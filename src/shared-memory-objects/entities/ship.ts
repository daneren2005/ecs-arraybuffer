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
	stationMemory: Uint32Array;

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

	constructor(world: World, config: ShipConfig | SharedAllocatedMemory) {
		if('bufferPosition' in config) {
			super(world, config);
			this.velocityMemory = this.getArrayFromMemory(Float32Array, 3);
			this.stationMemory = this.getArrayFromMemory(Uint32Array, 1);

			this.station = this.world.getEntityByPointer(this.stationMemory[0]) as Station;
		} else {
			super(world, {
				size: 4,
				type: ENTITY_TYPES.ship
			});
			this.velocityMemory = this.getArrayFromMemory(Float32Array, 3);
			this.stationMemory = this.getArrayFromMemory(Uint32Array, 1);

			this.width = 10;
			this.height = 5;
			this.speed = 100;

			this.shields = 1;
			this.maxShields = 1;
			this.timeToRegenerateShields = 1;

			this.station = config.station;
			this.stationMemory[0] = this.station.pointer;
		}

	}

	get color(): number {
		return this.station.color;
	}

	update(delta: number) {
		let nearesetEnemy = this.getNearestEnemy();
		if(nearesetEnemy) {
			// Bounce off enemy doing damage
			if(distance(nearesetEnemy.x, nearesetEnemy.y, this.x, this.y) < Math.max(this.width, nearesetEnemy.width)) {
				this.collide(nearesetEnemy);
				this.velocityX = -this.velocityX;
				this.velocityY = -this.velocityY;
			}
			// Move towards enemy
			else {
				let force = this.getMoveTowardsForce(nearesetEnemy);
				let newVelocity = new PhaserMath.Vector2(this.velocityX + force.x * 4, this.velocityY + force.y * 4);
				newVelocity.normalize();

				this.velocityX = newVelocity.x * this.speed;
				this.velocityY = newVelocity.y * this.speed;

				this.angle = degreesToRadians(computeAngle(this.velocityX, this.velocityY));
			}
		}

		// TODO: This should not be needed, but somehow ships are staying alive even after station is destroyed
		if(this.station.dead) {
			this.die();
		}

		super.update(delta);
	}

	getNearestEnemy(): Entity | null {
		let nearesetEnemy = this.world.getNearestEntity(this, entity => {
			if(entity instanceof Station) {
				return entity !== this.station;
			} else if(entity instanceof Ship) {
				return entity.station !== this.station;
			} else {
				return false;
			}
		});

		if(nearesetEnemy) {
			return nearesetEnemy;
		} else {
			let stations = this.world.entities.filter(entity => entity instanceof Station && entity !== this.station);
			stations.sort((a, b) => {
				return euclideanDistance(a.x, a.y, this.x, this.y) - euclideanDistance(b.x, b.y, this.x, this.y);
			});

			return stations[0];
		}
	}
	getMoveTowardsForce(entity: Entity) {
		let force = new PhaserMath.Vector2(entity.x - this.x, entity.y - this.y);
		force.normalize();
		return force;
	}

	collide(target: Entity) {
		if(!this.canTakeDamage() || !target.canTakeDamage()) {
			return;
		}

		let enemyWorth = 1;
		if(target instanceof Station) {
			enemyWorth = target.ships.length;
		}

		this.takeDamage(1);
		target.takeDamage(1);

		if(target.dead) {
			this.station.addMoney(enemyWorth);
		}
		if(this.dead) {
			if(target instanceof Station) {
				target.addMoney(1);
			} else if(target instanceof Ship) {
				target.station.addMoney(1);
			}
		}
	}

	die() {
		this.station.removeShip(this);

		super.die();
	}
}

interface ShipConfig {
	station: Station
}