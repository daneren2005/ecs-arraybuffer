import Entity from './entity';
import Station from './station';
import { AllocatedMemory, MAX_BYTE_OFFSET_LENGTH, MemoryHeap, MemoryHeapMemory, SharedAllocatedMemory, SharedList, getPointer } from '@daneren2005/shared-memory-objects';
import EntityList from './entity-list';
import System from '../systems/system';
import WorkerSystem from '../systems/worker-system';

import VelocitySystemWorker from '../systems/velocity-system?worker';
import UpdateHealthTimersSystemWorker from '../systems/update-health-timers-system?worker';
import SpawnShipSystemWorker from '../systems/spawn-ship-system?worker';
import CollisionSystemWorker from '../systems/collision-system?worker';
import TargetEnemySystemWorker from '../systems/target-enemy-system?worker';
import MoveToTargetSystem from '../systems/move-to-target-system?worker';

import { ENTITY_TYPES } from './types';
import Ship from './ship';

const ID_INDEX = 0;
const BOUNDS_WIDTH_INDEX = 1;
const BOUNDS_HEIGHT_INDEX = 2;
const ENTITIES_LIST_INDEX = 3;
export default class World {
	static readonly ALLOCATE_COUNT = 3 + SharedList.ALLOCATE_COUNT;

	entities: EntityList;
	private readonly entityCache: Map<number, Entity> = new Map();
	bounds: {
		width: number,
		height: number
	};
	systems: Array<System> = [];

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
	getEntityByPointer(entityPointer: number): Entity | undefined {
		if(!entityPointer) {
			return undefined;
		}

		let entity = this.entityCache.get(entityPointer);
		// We can free memory and re-create a new entity in the same spot but we need to update our cache
		if(entity?.dead) {
			this.entityCache.delete(entityPointer);
			entity = undefined;
		}

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
			}
		}

		return entity;
	}

	update(delta: number) {
		this.systems.forEach(system => {
			system.update(delta);
		});

		this.garbageCollect();
	}

	garbageCollect() {
		// Constantly clean up our cached entities so we don't just keep growing and growing
		this.entities.forEach(entity => {
			if(entity.dead) {
				this.entityCache.delete(entity.pointer);
			}
		});
	}

	private initSystems() {
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
			worker: new SpawnShipSystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'collisionSystem',
			worker: new CollisionSystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'targetEnemySystem',
			worker: new TargetEnemySystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'moveToTargetSystem',
			worker: new MoveToTargetSystem()
		}));
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