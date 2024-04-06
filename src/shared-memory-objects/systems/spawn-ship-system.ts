import Ship from '../entities/ship';
import Station from '../entities/station';
import World from '../entities/world';
import createWorkerSystem from './create-worker-system';

class SpawnShipSystem {
	world: World;

	constructor(world: World) {
		this.world = world;
	}

	run() {
		let stations = this.world.entities.filter(entity => entity instanceof Station) as Array<Station>;
		stations.forEach(station => {
			if(!station.dead && station.money > 0) {
				let ship = new Ship(this.world, {
					station
				});
				ship.x = station.x;
				ship.y = station.y;
				ship.velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * ship.speed;
				ship.velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * ship.speed;
	
				station.ships.insert(ship);
				this.world.addEntity(ship);
	
				station.subtractMoney(1);
			}
		});
	}
}

createWorkerSystem((world: World) => new SpawnShipSystem(world));