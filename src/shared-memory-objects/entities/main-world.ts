import World from './world';
import System from '../systems/system';
import WorkerSystem from '../systems/worker-system';

import VelocitySystemWorker from '../systems/velocity-system?worker';
import UpdateHealthTimersSystemWorker from '../systems/update-health-timers-system?worker';
import SpawnShipSystemWorker from '../systems/spawn-ship-system?worker';
import CollisionSystemWorker from '../systems/collision-system?worker';
import TargetEnemySystemWorker from '../systems/target-enemy-system?worker';
import MoveToTargetSystem from '../systems/move-to-target-system?worker';
import { GrowBufferData } from '@daneren2005/shared-memory-objects';

export default class MainWorld extends World {
	systems: Array<System> = [];

	constructor() {
		super();

		this.initSystems();
	}

	update(delta: number) {
		this.systems.forEach(system => {
			system.update(delta);
		});

		super.update(delta);
	}

	private initSystems() {
		this.systems.push(new WorkerSystem(this, {
			name: 'velocitySystem',
			worker: new VelocitySystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'updateHealthTimersSystemWorker',
			worker: new UpdateHealthTimersSystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'spawnShipSystem',
			worker: new SpawnShipSystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'collisionSystem',
			worker: new CollisionSystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'targetEnemySystem',
			worker: new TargetEnemySystemWorker()
		}));
		this.systems.push(new WorkerSystem(this, {
			name: 'moveToTargetSystem',
			worker: new MoveToTargetSystem()
		}));
	}

	growMemoryFromThread(memoryGrows: Array<GrowBufferData>, fromSystem: WorkerSystem) {
		super.growMemoryFromThread(memoryGrows, fromSystem);

		// Update other threads memory
		this.systems.forEach(system => {
			if(system === fromSystem || !(system instanceof WorkerSystem)) {
				return;
			}

			system.pendingUpdates.memoryGrown.push(...memoryGrows);
		});
	}

	destroy() {
		this.systems.forEach(system => system.destroy());
		this.systems = [];
	}
}