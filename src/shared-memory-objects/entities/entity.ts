import World from './world';
import { AllocatedMemory, SharedAllocatedMemory, TypedArrayConstructor } from '@daneren2005/shared-memory-objects';

const TYPE_INDEX = 0;
const ID_INDEX = 1;
const DEAD_INDEX = 2;
export default class Entity {
	static readonly ALLOCATE_COUNT = 13;

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
	key = 'boid';

	private shieldMemory: Float32Array;
	get shields() {
		return this.shieldMemory[0];
	}
	set shields(value: number) {
		this.shieldMemory[0] = value;
	}
	get maxShields() {
		return this.shieldMemory[1];
	}
	set maxShields(value: number) {
		this.shieldMemory[1] = value;
	}
	get timeToRegenerateShields() {
		return this.shieldMemory[2];
	}
	set timeToRegenerateShields(value: number) {
		this.shieldMemory[2] = value;
	}
	get timeSinceShieldRegeneration() {
		return this.shieldMemory[3];
	}
	set timeSinceShieldRegeneration(value: number) {
		this.shieldMemory[3] = value;
	}
	get timeSinceTakenDamage() {
		return this.shieldMemory[4];
	}
	set timeSinceTakenDamage(value: number) {
		this.shieldMemory[4] = value;
	}

	getSprite?: (() => any);

	constructor(world: World, config: EntityConfig | SharedAllocatedMemory) {
		this.world = world;

		if('size' in config) {
			this.memory = world.heap.allocUI32(config.size + Entity.ALLOCATE_COUNT);
			this.memory.data[ID_INDEX] = world.getId();
			this.memory.data[TYPE_INDEX] = config.type;
		} else {
			if(config instanceof AllocatedMemory) {
				this.memory = config;
			} else {
				this.memory = new AllocatedMemory(world.heap, config);
			}
		}

		this._id = this.memory.data[ID_INDEX];
		this.takenMemoryBytes += 3 * this.memory.data.BYTES_PER_ELEMENT;

		this.positionMemory = this.getArrayFromMemory(Float32Array, 5);
		this.shieldMemory = this.getArrayFromMemory(Float32Array, 5);
	}

	load(config: any) {
		Object.keys(config).forEach((key: string) => {
			// @ts-expect-error
			this[key] = config[key];
		});
	}

	update(delta: number) {
		
	}

	die() {
		this.dead = true;
		this.world.removeEntity(this);
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
	
	get pointer(): number {
		return this.memory.pointer;
	}
}

interface EntityConfig {
	size: number
	type: number
}