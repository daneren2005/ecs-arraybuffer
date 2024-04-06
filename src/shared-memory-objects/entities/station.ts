import Entity from './entity';
import Ship from './ship';
import { ENTITY_TYPES } from './types';
import World from './world';

export default class Station extends Entity {
	color = 0xff0000;
	ships: Array<Entity> = [];
	money = 0;

	constructor(world: World) {
		super(world, {
			size: 0,
			type: ENTITY_TYPES.station
		});
		this.key = 'station';
		this.width = 20;
		this.height = 20;
		this.shields = 2;
		this.maxShields = 2;
		this.timeToRegenerateShields = 5;
	}

	update(delta: number) {
		super.update(delta);

		if(this.money > 0) {
			let ship = new Ship(this);
			ship.x = this.x;
			ship.y = this.y;
			ship.velocityX = (Math.random() > 0.5 ? -1 : 1) * Math.random() * ship.speed;
			ship.velocityY = (Math.random() > 0.5 ? -1 : 1) * Math.random() * ship.speed;

			this.ships.push(ship);
			ship.on('dead', () => {
				let index = this.ships.indexOf(ship);
				if(index >= 0) {
					this.ships.splice(index, 1);
				}
			});
			this.world.addEntity(ship);
			this.money--;
		}
	}

	die() {
		super.die();

		this.ships.forEach(ship => {
			ship.die();
		});
	}
}