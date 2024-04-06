import { EventEmitter } from 'eventemitter3';
import World from './world';
import { AllocatedMemory, SharedAllocatedMemory, TypedArrayConstructor } from '@daneren2005/shared-memory-objects';

const TYPE_INDEX = 0;
const ID_INDEX = 1;
const DEAD_INDEX = 2;
export default class Entity extends EventEmitter {
	static readonly ALLOCATE_COUNT = 8;

	readonly world: World;
	protected readonly memory: AllocatedMemory;
	private takenMemoryBytes: number = 0;

	// Need to keep a non-changing id reference so if another thread deletes and re-allocates this memory we can still find which entity we are trying to get rid of
	private _id: number;
	get id() {
		return this._id;
	}
	// We are dead if we are labeled as dead OR if this memory has been re-allocated so the id field is no longer what it should be
	get dead(): boolean {
		return this._id !== this.memory.data[ID_INDEX] || !!this.memory.data[DEAD_INDEX];
	}
	set dead(value: boolean) {
		this.memory.data[DEAD_INDEX] = value ? 1 : 0;
	}

	private positionMemory: Float32Array;
	get x() {
		return this.positionMemory[0];
	}
	set x(value: number) {
		this.positionMemory[0] = value;
	}
	get y() {
		return this.positionMemory[1];
	}
	set y(value: number) {
		this.positionMemory[1] = value;
	}
	get width() {
		return this.positionMemory[2];
	}
	set width(value: number) {
		this.positionMemory[2] = value;
	}
	get height() {
		return this.positionMemory[3];
	}
	set height(value: number) {
		this.positionMemory[3] = value;
	}
	get angle() {
		return this.positionMemory[4];
	}
	set angle(value: number) {
		this.positionMemory[4] = value;
	}
	type = 'entity';
	key = 'boid';
	shields = 1;
	maxShields = 1;
	timeToRegenerateShields = 1;
	timeSinceShieldRegeneration = 0;
	timeSinceTakenDamage = 0;

	constructor(world: World, config: EntityConfig | SharedAllocatedMemory) {
		super();

		this.world = world;

		if('size' in config) {
			this.memory = world.heap.allocUI32(config.size + Entity.ALLOCATE_COUNT);
			this.memory.data[ID_INDEX] = world.getId();
		} else {
			this.memory = new AllocatedMemory(world.heap, config);
		}

		this._id = this.memory.data[ID_INDEX];
		this.takenMemoryBytes += 3 * this.memory.data.BYTES_PER_ELEMENT;

		this.positionMemory = this.getArrayFromMemory(Float32Array, 5);
	}

	load(config: any) {
		Object.keys(config).forEach((key: string) => {
			// @ts-expect-error
			this[key] = config[key];
		});
	}

	update(delta: number) {
		this.timeSinceTakenDamage += delta;

		if(this.shields < this.maxShields) {
			this.timeSinceShieldRegeneration += delta;
			if(this.timeSinceShieldRegeneration > this.timeToRegenerateShields) {
				this.shields++;
				this.timeSinceShieldRegeneration = 0;
			}
		}
	}

	die() {
		// Only emit dead once
		if(this.dead) {
			return;
		}

		this.dead = true;
		this.emit('dead');

		this.memory.free();
	}
	canTakeDamage() {
		return this.timeSinceTakenDamage >= 0.2;
	}
	takeDamage(damage: number) {
		if(!this.canTakeDamage()) {
			return;
		}

		this.shields -= damage;
		this.timeSinceTakenDamage = 0;
		if(this.shields < 0) {
			this.die();
		}
	}

	getArrayFromMemory<T extends Float32Array | Uint32Array | Int32Array>(type: TypedArrayConstructor<T>, length: number): T {
		let allocated = this.getAllocatedFromMemory(length);
		return new type(this.memory.data.buffer, allocated.bufferByteOffset, length);
	}
	getAllocatedFromMemory(length: number): SharedAllocatedMemory {
		let startByteOffset = this.takenMemoryBytes;
		this.takenMemoryBytes += length * 4;
		if(import.meta.env.MODE === 'development') {
			if(this.takenMemoryBytes > this.memory.data.byteLength) {
				console.warn(`Taking more memory then entity declared: ${this.takenMemoryBytes} >= ${this.memory.data.byteLength}`);
			}
		}

		return {
			bufferPosition: this.memory.bufferPosition,
			bufferByteOffset: this.memory.data.byteOffset + startByteOffset
		};
	}
}

interface EntityConfig {
	size: number
	type: number
}