import { EventEmitter } from 'eventemitter3';
import Entity from './entity';
import Station from './station';
import { Quadtree, Rectangle } from '@timohausmann/quadtree-ts';
import euclideanDistance from '@/math/euclidean-distance';
import { AllocatedMemory, MAX_BYTE_OFFSET_LENGTH, MemoryHeap, MemoryHeapMemory, SharedAllocatedMemory, SharedList, getPointer } from '@daneren2005/shared-memory-objects';
import EntityList from './entity-list';
import System from '../systems/system';
import WorkerSystem from '../systems/worker-system';

import VelocitySystemWorker from '../systems/velocity-system?worker';
import UpdateHealthTimersSystemWorker from '../systems/update-health-timers-system?worker';
import SpawnShipSystem from '../systems/spawn-ship-system?worker';
import { ENTITY_TYPES } from './types';
import Ship from './ship';

const ID_INDEX = 0;
const BOUNDS_WIDTH_INDEX = 1;
const BOUNDS_HEIGHT_INDEX = 2;
const ENTITIES_LIST_INDEX = 3;
export default class World {
	static readonly ALLOCATE_COUNT = 3 + SharedList.ALLOCATE_COUNT;

	// TODO: How do we clear entityCache when something is deleted in other thread?
	entities: EntityList;
	private readonly entityCache: Map<number, Entity> = new Map();
	bounds: {
		width: number,
		height: number
	};
	systems: Array<System> = [];
	// @ts-expect-error
	quadtree: Quadtree;

	readonly heap: MemoryHeap;
	protected readonly memory: AllocatedMemory;

	constructor(config?: WorldMemory) {
		if(config) {
			this.heap = new MemoryHeap(config.heap);
			this.memory = new AllocatedMemory(this.heap, config.world);
			this.entities = new EntityList(this, {
				firstBlock: {
					bufferPosition: this.memory.bufferPosition,
					bufferByteOffset: this.memory.data.byteOffset + ENTITIES_LIST_INDEX * this.memory.data.BYTES_PER_ELEMENT
				}
			});
		} else {
			this.heap = new MemoryHeap({
				bufferSize: MAX_BYTE_OFFSET_LENGTH
			});
			this.memory = this.heap.allocUI32(World.ALLOCATE_COUNT);
			this.entities = new EntityList(this, {
				initWithBlock: {
					bufferPosition: this.memory.bufferPosition,
					bufferByteOffset: this.memory.data.byteOffset + ENTITIES_LIST_INDEX * this.memory.data.BYTES_PER_ELEMENT
				}
			});

			this.initSystems();
		}

		let memory = this.memory;
		this.bounds = {
			get width() {
				return memory.data[BOUNDS_WIDTH_INDEX];
			},
			set width(value: number) {
				memory.data[BOUNDS_WIDTH_INDEX] = value;
			},

			get height() {
				return memory.data[BOUNDS_HEIGHT_INDEX];
			},
			set height(value: number) {
				memory.data[BOUNDS_HEIGHT_INDEX] = value;
			}
		};
	}

	load(config: any) {
		config.entities.forEach((entityConfig: any) => {
			let entity;
			switch(entityConfig.type) {
				case 'station':
					entity = new Station(this);
					break;
				default:
					throw new Error(`Invalid entity type: ${entityConfig.type}`);
			}
			entity.load(entityConfig);
			this.addEntity(entity);
		});

		if(config.bounds) {
			this.bounds.width = config.bounds.width;
			this.bounds.height = config.bounds.height;
		}
	}
	addEntity(entity: Entity) {
		this.entities.insert(entity);
	}
	removeEntity(entity: Entity) {
		this.entities.delete(entity);
	}
	getEntityByPointer(entityPointer: number) {
		let entity = this.entityCache.get(entityPointer);
		if(!entity) {
			let entityMemory = new AllocatedMemory(this.heap, getPointer(entityPointer));
			let type = entityMemory.data[0];
			if(type === ENTITY_TYPES.ship) {
				entity = new Ship(this, entityMemory);
			} else if(type === ENTITY_TYPES.station) {
				entity = new Station(this, entityMemory);
			}

			if(entity) {
				this.entityCache.set(entityPointer, entity);
			} else {
				console.warn(`Could not create entity from pointer ${entityPointer}`);
			}
		}

		return entity;
	}

	update(delta: number) {
		this.quadtree = new Quadtree({
			width: this.bounds.width,
			height: this.bounds.height
		});
		this.entities.forEach(entity => {
			this.quadtree.insert(new Rectangle({
				x: entity.x,
				y: entity.y,
				width: entity.width,
				height: entity.height,
				data: {
					entity
				}
			}));
		});

		this.entities.forEach(entity => {
			if(entity.dead) {
				return;
			}

			entity.update(delta);
		});

		this.systems.forEach(system => {
			system.update(delta);
		});
	}

	private initSystems() {
		// TODO: CollisionSystem, MoveToTargetSystem, TargetEnemySystem
		this.systems.push(new WorkerSystem(this, {
			name: 'velocitySystem',
			worker: new VelocitySystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'updateHealthTimersSystemWorker',
			worker: new UpdateHealthTimersSystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'spawnShipSystem',
			worker: new SpawnShipSystem()
		}));
	}

	getNearestEntity(entity: Entity, filter: (entity: Entity) => boolean) {
		let rect = {
			x: entity.x - 50,
			y: entity.y - 50,
			width: entity.width + 100,
			height: entity.height + 100
		};

		// TODO: At the beginning this is slow because we are in a clump of our own units so it returns a lot of results without any enemies
		let entities = this.getEntitiesInRange(rect).filter(otherEntity => otherEntity !== entity && !otherEntity.dead && filter(otherEntity));
		if(entities.length === 0) {
			rect.x -= 100;
			rect.y -= 100;
			rect.width += 200;
			rect.height += 200;
			entities = this.getEntitiesInRange(rect).filter(otherEntity => otherEntity !== entity && filter(otherEntity));
		}

		entities.sort((a, b) => {
			return euclideanDistance(a.x, a.y, entity.x, entity.y) - euclideanDistance(b.x, b.y, entity.x, entity.y);
		});
		return entities[0] ?? null;
	}
	getEntitiesInRange(range: { x: number, y: number, width: number, height: number }): Array<Entity> {
		return this.quadtree.retrieve(new Rectangle(range)).map((result: any) => result.data.entity);
	}

	getId() {
		return Atomics.add(this.memory.data, ID_INDEX, 1);
	}

	getSharedMemory() {
		return {
			heap: this.heap.getSharedMemory(),
			world: this.memory.getSharedMemory()
		};
	}

	destroy() {
		this.systems.forEach(system => system.destroy());
		this.systems = [];
	}
}

interface WorldMemory {
	heap: MemoryHeapMemory
	world: SharedAllocatedMemory
}

export { WorldMemory };