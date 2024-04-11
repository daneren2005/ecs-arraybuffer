import Entity from './entity';
import Station from './station';
import { AllocatedMemory, GrowBufferData, MAX_BYTE_OFFSET_LENGTH, MemoryHeap, MemoryHeapMemory, SharedAllocatedMemory, SharedList, getPointer } from '@daneren2005/shared-memory-objects';
import EntityList from './entity-list';

import { ENTITY_TYPES } from './types';
import Ship from './ship';
import WorkerSystem from '../systems/worker-system';

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
				bufferSize: 1024 * 100
			});
			this.memory = this.heap.allocUI32(World.ALLOCATE_COUNT);
			this.entities = new EntityList(this, {
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
		try {
			this.garbageCollect();
		} catch(e) {
			// TODO: Throws errors if ran when another buffer exists we haven't gotten yet
		}
	}

	garbageCollect() {
		// Constantly clean up our cached entities so we don't just keep growing and growing
		this.entities.forEach(entity => {
			if(entity.dead) {
				this.entityCache.delete(entity.pointer);
			}
		});
	}

	growMemoryFromThread(memoryGrows: Array<GrowBufferData>, fromSystem: WorkerSystem) {
		// Update our memory
		memoryGrows.forEach(memoryGrown => this.heap.addSharedBuffer(memoryGrown));
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

export { WorldMemory };