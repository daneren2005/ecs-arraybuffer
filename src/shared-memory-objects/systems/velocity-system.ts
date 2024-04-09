import degreesToRadians from '@/math/degrees-to-radians';
import Ship from '../entities/ship';
import World from '../entities/world';
import createWorkerSystem from './create-worker-system';
import computeAngle from '@/math/compute-angle';

class VelocitySystem {
	world: World;

	constructor(world: World) {
		this.world = world;
	}

	run(elapsedTime: number) {
		let ships = this.world.entities.filter(entity => entity instanceof Ship) as Array<Ship>;
		ships.forEach(entity => {
			entity.x += entity.velocityX * elapsedTime;
			entity.y += entity.velocityY * elapsedTime;

			if(entity.x < 0 || entity.x > this.world.bounds.width) {
				entity.velocityX = -entity.velocityX;
				entity.angle = degreesToRadians(computeAngle(entity.velocityX, entity.velocityY));
			}
	
			if(entity.y < 0 || entity.y > this.world.bounds.height) {
				entity.velocityY = -entity.velocityY;
				entity.angle = degreesToRadians(computeAngle(entity.velocityX, entity.velocityY));
			}
		});
	}
}

createWorkerSystem((world: World) => new VelocitySystem(world));