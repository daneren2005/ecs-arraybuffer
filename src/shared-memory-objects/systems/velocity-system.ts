import Ship from '../entities/ship';
import World from '../entities/world';
import createWorkerSystem from './create-worker-system';

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

			if(entity.x < 0) {
				entity.velocityX = Math.abs(entity.velocityX);
			} else if(entity.x > this.world.bounds.width) {
				entity.velocityX = -Math.abs(entity.velocityX);
			}
	
			if(entity.y < 0) {
				entity.velocityY = Math.abs(entity.velocityY);
			} else if(entity.y > this.world.bounds.height) {
				entity.velocityY = -Math.abs(entity.velocityY);
			}
		});
	}
}

createWorkerSystem((world: World) => new VelocitySystem(world));