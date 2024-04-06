import { EventEmitter } from 'eventemitter3';
import Entity from './entity';
import Station from './station';
import { Quadtree, Rectangle } from '@timohausmann/quadtree-ts';
import euclideanDistance from '@/math/euclidean-distance';
import { AllocatedMemory, MAX_BYTE_OFFSET_LENGTH, MemoryHeap, MemoryHeapMemory, SharedAllocatedMemory, SharedList } from '@daneren2005/shared-memory-objects';
import EntityList from './entity-list';

const ID_INDEX = 0;
const BOUNDS_WIDTH_INDEX = 1;
const BOUNDS_HEIGHT_INDEX = 2;
const ENTITIES_LIST_INDEX = 3;
export default class World extends EventEmitter {
	static readonly ALLOCATE_COUNT = 3 + SharedList.ALLOCATE_COUNT;

	entities: EntityList;
	bounds: {
		width: number,
		height: number
	};
	// @ts-expect-error
	quadtree: Quadtree;

	readonly heap: MemoryHeap;
	protected readonly memory: AllocatedMemory;

	constructor(config?: WorldMemory) {
		super();

		if(config) {
			this.heap = new MemoryHeap(config.heap);
			this.memory = new AllocatedMemory(this.heap, config.world);
			this.entities = new EntityList(this.heap, {
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
			this.entities = new EntityList(this.heap, {
				initWithBlock: {
					bufferPosition: this.memory.bufferPosition,
					bufferByteOffset: this.memory.data.byteOffset + ENTITIES_LIST_INDEX * this.memory.data.BYTES_PER_ELEMENT
				}
			});
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
		entity.on('dead', () => {
			this.removeEntity(entity);
		});
		this.emit('entity-added', entity);
	}
	removeEntity(entity: Entity) {
		this.entities.delete(entity);
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
}

interface WorldMemory {
	heap: MemoryHeapMemory
	world: SharedAllocatedMemory
}