import euclideanDistance from '@/math/euclidean-distance';
import Entity from '../entities/entity';
import Ship from '../entities/ship';
import World from '../entities/world';
import createWorkerSystem from './create-worker-system';
import { Quadtree, Rectangle } from '@timohausmann/quadtree-ts';
import Station from '../entities/station';

class TargetEnemySystem {
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
		ships.forEach(entity => {
			let target = getNearestEnemy(quadtree as Quadtree<Rectangle>, entity);
			entity.targetPointer = target?.pointer ?? 0;
		});
	}
}

function getNearestEnemy(quadtree: Quadtree<Rectangle>, ship: Ship): Entity | undefined {
	let nearesetEnemy = getNearestEntity(quadtree, ship, entity => {
		if(entity instanceof Station) {
			return entity !== ship.station;
		} else if(entity instanceof Ship) {
			return entity.station !== ship.station;
		} else {
			return false;
		}
	});

	if(nearesetEnemy) {
		return nearesetEnemy;
	} else {
		let stations = ship.world.entities.filter(entity => entity instanceof Station && entity !== ship.station);
		stations.sort((a, b) => {
			return euclideanDistance(a.x, a.y, ship.x, ship.y) - euclideanDistance(b.x, b.y, ship.x, ship.y);
		});

		return stations[0];
	}
}
function getNearestEntity(quadtree: Quadtree<Rectangle>, entity: Entity, filter: (entity: Entity) => boolean) {
	let rect = {
		x: entity.x - 50,
		y: entity.y - 50,
		width: entity.width + 100,
		height: entity.height + 100
	};

	let entities = getEntitiesInRange(quadtree, rect).filter(otherEntity => otherEntity !== entity && !otherEntity.dead && filter(otherEntity));
	if(entities.length === 0) {
		rect.x -= 100;
		rect.y -= 100;
		rect.width += 200;
		rect.height += 200;
		entities = getEntitiesInRange(quadtree, rect).filter(otherEntity => otherEntity !== entity && filter(otherEntity));
	}

	entities.sort((a, b) => {
		return euclideanDistance(a.x, a.y, entity.x, entity.y) - euclideanDistance(b.x, b.y, entity.x, entity.y);
	});
	return entities[0] ?? null;
}
function getEntitiesInRange(quadtree: Quadtree<Rectangle>, range: { x: number, y: number, width: number, height: number }): Array<Entity> {
	return quadtree.retrieve(new Rectangle(range)).map((result: any) => result.data.entity);
}

createWorkerSystem((world: World) => new TargetEnemySystem(world));