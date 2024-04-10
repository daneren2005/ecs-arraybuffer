import World from '../entities/world';
import createWorkerSystem from './create-worker-system';

class UpdateHealthTimerSystem {
	world: World;

	constructor(world: World) {
		this.world = world;
	}

	run(elapsedTime: number) {
		this.world.entities.forEach(entity => {
			entity.timeSinceTakenDamage += elapsedTime;

			if(entity.shields < entity.maxShields) {
				entity.timeSinceShieldRegeneration += elapsedTime;
				if(entity.timeSinceShieldRegeneration > entity.timeToRegenerateShields) {
					entity.shields++;
					entity.timeSinceShieldRegeneration = 0;
				}
			}
		});
	}
}

createWorkerSystem((world: World) => new UpdateHealthTimerSystem(world));