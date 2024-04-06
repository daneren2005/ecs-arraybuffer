import { MemoryHeap, SharedAllocatedMemory, SharedList, SharedListMemory } from '@daneren2005/shared-memory-objects';
import Entity from './entity';

// TODO: How do we clear entityCache when something is deleted in other thread?
export default class EntityList implements Iterable<{ entity: Entity, deleteCurrent: () => void }> {
	static readonly ALLOCATE_COUNT = SharedList.ALLOCATE_COUNT;

	private list: SharedList;
	private entityCache: Map<number, Entity> = new Map();

	constructor(heap: MemoryHeap, config?: EntityListConfig | SharedListMemory) {
		if(config) {
			this.list = new SharedList(heap, config);
		} else {
			this.list = new SharedList(heap);
		}
	}

	get length() {
		return this.list.length;
	}

	insert(entity: Entity) {
		this.list.insert(entity.id);
		this.entityCache.set(entity.id, entity);
	}
	delete(entity: Entity) {
		this.entityCache.delete(entity.id);
		return this.list.deleteValue(entity.id);
	}

	*[Symbol.iterator]() {
		let iterator = this.list[Symbol.iterator]();

		for(let { data: entityIdData, deleteCurrent } of iterator) {
			let entityId = Atomics.load(entityIdData, 0);
			let entity = this.entityCache.get(entityId);
			// TODO: Create entity if not existing (ie: second thread)

			if(entity) {
				yield {
					entity,
					deleteCurrent
				};
			}
		}
	}
	forEach(callback: (entity: Entity) => void) {
		for(let { entity } of this) {
			callback(entity);
		}
	}

	find(callback: (entity: Entity) => boolean): Entity | undefined {
		for(let { entity } of this) {
			if(callback(entity)) {
				return entity;
			}
		}
	}
	filter(callback: (entity: Entity) => boolean): Array<Entity> {
		let entities = [];
		for(let { entity } of this) {
			if(callback(entity)) {
				entities.push(entity);
			}
		}

		return entities;
	}
	map<K>(callback: (entity: Entity) => K): Array<K> {
		let returns = [];
		for(let { entity } of this) {
			returns.push(callback(entity));
		}

		return returns;
	}

	getSharedMemory() {
		return this.list.getSharedMemory();
	}
}

interface EntityListConfig {
	initWithBlock: SharedAllocatedMemory
}