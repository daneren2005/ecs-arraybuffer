import distance from '@/math/distance';
import Entity from '../entities/entity';
import Ship from '../entities/ship';
import Station from '../entities/station';
import World from '../entities/world';
import createWorkerSystem from './create-worker-system';
import { Quadtree, Rectangle } from '@timohausmann/quadtree-ts';

class CollisionSystem {
	world: World;

	constructor(world: World) {
		this.world = world;
	}

	run() {
		// Create and populate quadtree
		let quadtree = new Quadtree({
			width: this.world.bounds.width,
			height: this.world.bounds.height
		});

		this.world.entities.forEach(entity => {
			quadtree.insert(new Rectangle({
				x: entity.x,
				y: entity.y,
				width: entity.width,
				height: entity.height,
				data: {
					entity
				}
			}));
		});

		let ships = this.world.entities.filter(entity => entity instanceof Ship) as Array<Ship>;
		ships.forEach(ship => {
			let entitiesInRange = quadtree.retrieve(new Rectangle({
				x: ship.x,
				y: ship.y,
				width: ship.width,
				height: ship.height
			})).map((result: any) => result.data.entity) as Array<Entity>;

			entitiesInRange = entitiesInRange.filter(entity => {
				if(entity instanceof Station) {
					return entity !== ship.station;
				} else if(entity instanceof Ship) {
					return entity.station !== ship.station;
				} else {
					return false;
				}
			});

			let collisions = entitiesInRange.filter(entity => distance(entity.x, entity.y, ship.x, ship.y) < Math.max(ship.width, entity.width));
			if(collisions.length) {
				collide(ship, collisions[0]);
				ship.velocityX = -ship.velocityX;
				ship.velocityY = -ship.velocityY;
			}
		});
	}
}

function collide(ship: Ship, target: Entity) {
	if(!ship.canTakeDamage() || !target.canTakeDamage()) {
		return;
	}

	let enemyWorth = 1;
	if(target instanceof Station) {
		enemyWorth = target.ships.length;
	}

	ship.takeDamage(1);
	target.takeDamage(1);

	if(target.dead) {
		ship.station.addMoney(enemyWorth);
	}
	if(ship.dead) {
		if(target instanceof Station) {
			target.addMoney(1);
		} else if(target instanceof Ship) {
			target.station.addMoney(1);
		}
	}
}

createWorkerSystem((world: World) => new CollisionSystem(world));