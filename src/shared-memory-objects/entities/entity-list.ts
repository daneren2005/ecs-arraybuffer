import { SharedAllocatedMemory, SharedList, SharedListMemory } from '@daneren2005/shared-memory-objects';
import Entity from './entity';
import World from './world';

// TODO: Be able to grab only certain entities by type so we aren't initializing every entity in every thread
export default class EntityList implements Iterable<{ entity: Entity, deleteCurrent: () => void }> {
	static readonly ALLOCATE_COUNT = SharedList.ALLOCATE_COUNT;

	private world: World;
	private list: SharedList;
	private entityCache: Map<number, Entity> = new Map();

	constructor(world: World, config?: EntityListConfig | SharedListMemory) {
		this.world = world;
		if(config) {
			this.list = new SharedList(world.heap, config);
		} else {
			this.list = new SharedList(world.heap);
		}
	}

	get length() {
		return this.list.length;
	}

	insert(entity: Entity) {
		this.list.insert(entity.pointer);
		this.entityCache.set(entity.pointer, entity);
	}
	delete(entity: Entity) {
		this.entityCache.delete(entity.pointer);
		return this.list.deleteValue(entity.pointer);
	}

	*[Symbol.iterator]() {
		let iterator = this.list[Symbol.iterator]();

		for(let { data: entityPointerData, deleteCurrent } of iterator) {
			let entityPointer = Atomics.load(entityPointerData, 0);
			let entity = this.world.getEntityByPointer(entityPointer);

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

	free() {
		this.list.free();
	}
}

interface EntityListConfig {
	initWithBlock: SharedAllocatedMemory
}