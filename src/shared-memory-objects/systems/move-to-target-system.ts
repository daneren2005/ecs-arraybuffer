import normalize from '@/math/normalize';
import Entity from '../entities/entity';
import Ship from '../entities/ship';
import World from '../entities/world';
import createWorkerSystem from './create-worker-system';
import computeAngle from '@/math/compute-angle';
import degreesToRadians from '@/math/degrees-to-radians';

class MoveToTargetSystem {
	world: World;

	constructor(world: World) {
		this.world = world;
	}

	run() {
		this.world.entities.forEach((entity: Ship) => {
			if(!entity.targetPointer) {
				return;
			}
			let target = this.world.getEntityByPointer(entity.targetPointer);
			if(!target) {
				return;
			}

			let force = getMoveTowardsForce(entity, target);
			let newVelocity = normalize(entity.velocityX + force.x * 4, entity.velocityY + force.y * 4);

			entity.velocityX = newVelocity.x * entity.speed;
			entity.velocityY = newVelocity.y * entity.speed;
			entity.angle = degreesToRadians(computeAngle(entity.velocityX, entity.velocityY));
		}, entity => entity instanceof Ship);
	}
}

function getMoveTowardsForce(entity1: Entity, entity2: Entity) {
	return normalize(entity2.x - entity1.x, entity2.y - entity1.y);
}

createWorkerSystem((world: World) => new MoveToTargetSystem(world));