import { SharedAllocatedMemory, SharedList } from '@daneren2005/shared-memory-objects';
import Entity from './entity';
import Ship from './ship';
import { ENTITY_TYPES } from './types';
import World from './world';
import EntityList from './entity-list';

const MONEY_INDEX = 0;
const COLOR_INDEX = 1;
export default class Station extends Entity {
	ships: EntityList;

	moneyMemory: Uint32Array;
	get money() {
		return Atomics.load(this.moneyMemory, MONEY_INDEX);
	}
	set money(value: number) {
		Atomics.store(this.moneyMemory, MONEY_INDEX, value);
	}
	get color() {
		return this.moneyMemory[COLOR_INDEX];
	}
	set color(value: number) {
		this.moneyMemory[COLOR_INDEX] = value;
	}

	constructor(world: World, memory?: SharedAllocatedMemory) {
		if(memory) {
			super(world, memory);
			this.moneyMemory = this.getArrayFromMemory(Uint32Array, 2);

			this.ships = new EntityList(this.world, {
				initWithBlock: this.getAllocatedFromMemory(EntityList.ALLOCATE_COUNT)
			});
		} else {
			super(world, {
				size: 2 + EntityList.ALLOCATE_COUNT,
				type: ENTITY_TYPES.station
			});
			this.moneyMemory = this.getArrayFromMemory(Uint32Array, 2);

			this.ships = new EntityList(this.world, {
				firstBlock: this.getAllocatedFromMemory(EntityList.ALLOCATE_COUNT)
			});
			
			this.width = 20;
			this.height = 20;
			this.shields = 2;
			this.maxShields = 2;
			this.timeToRegenerateShields = 5;
		}
		this.key = 'station';
	}

	addMoney(value: number) {
		Atomics.add(this.moneyMemory, MONEY_INDEX, value);
	}
	subtractMoney(value: number) {
		Atomics.sub(this.moneyMemory, MONEY_INDEX, value);
	}

	removeShip(ship: Ship) {
		if(!this.dead) {
			this.ships.delete(ship);
		}
	}

	die() {
		if(this.dead) {
			return;
		}

		this.ships.forEach(ship => {
			ship.die();
		});

		this.ships.free();
		super.die();
	}
}