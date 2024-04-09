import computeAngle from '@/math/compute-angle';
import distance from '@/math/distance';
import euclideanDistance from '@/math/euclidean-distance';
import Entity from './entity';
import Station from './station';
// @ts-expect-error
import PhaserMath from 'phaser/src/math';
import degreesToRadians from '@/math/degrees-to-radians';
import { ENTITY_TYPES } from './types';
import World from './world';
import { SharedAllocatedMemory } from '@daneren2005/shared-memory-objects';

export default class Ship extends Entity {
	station: Station;
	uintMemory: Uint32Array;

	velocityMemory: Float32Array;
	get speed() {
		return this.velocityMemory[0];
	}
	set speed(value: number) {
		this.velocityMemory[0] = value;
	}
	get velocityX() {
		return this.velocityMemory[1];
	}
	set velocityX(value: number) {
		this.velocityMemory[1] = value;
	}
	get velocityY() {
		return this.velocityMemory[2];
	}
	set velocityY(value: number) {
		this.velocityMemory[2] = value;
	}

	get targetPointer() {
		return Atomics.load(this.uintMemory, 1);
	}
	set targetPointer(value: number) {
		Atomics.store(this.uintMemory, 1, value);
	}

	constructor(world: World, config: ShipConfig | SharedAllocatedMemory) {
		if('bufferPosition' in config) {
			super(world, config);
			this.velocityMemory = this.getArrayFromMemory(Float32Array, 3);
			this.uintMemory = this.getArrayFromMemory(Uint32Array, 2);

			this.station = this.world.getEntityByPointer(this.uintMemory[0]) as Station;
		} else {
			super(world, {
				size: 5,
				type: ENTITY_TYPES.ship
			});
			this.velocityMemory = this.getArrayFromMemory(Float32Array, 3);
			this.uintMemory = this.getArrayFromMemory(Uint32Array, 2);

			this.width = 10;
			this.height = 5;
			this.speed = 100;

			this.shields = 1;
			this.maxShields = 1;
			this.timeToRegenerateShields = 1;

			this.station = config.station;
			this.uintMemory[0] = this.station.pointer;
		}

	}

	get color(): number {
		return this.station.color;
	}

	die() {
		if(this.dead) {
			return;
		}

		this.station.removeShip(this);

		super.die();
	}
}

interface ShipConfig {
	station: Station
}