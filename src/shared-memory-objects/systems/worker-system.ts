import World, { WorldMemory } from '../entities/world';
import { UpdateMainData } from './interfaces/update-main-data';
import { UpdateWorkerData } from './interfaces/update-worker-data';
import System, { type SystemConfig } from './system';

export default class WorkerSystem extends System {
	world: World;
	worker: Worker;
	runningResolve: (() => void) | null = null;

	pendingUpdates: UpdateWorkerData = {
		memoryGrown: []
	};

	constructor(world: World, options: WorkerSystemConfig) {
		super(options);
		this.world = world;
		this.worker = options.worker;

		this.worker.onmessage = (e) => {
			if(e.data.done) {
				let updates = e.data as UpdateMainData;
				this.world.growMemoryFromThread(updates.memoryGrown, this);

				this.runningResolve?.();
				this.runningResolve = null;
			}
		};

		const initConfig: WorldMemory = world.getSharedMemory();
		world.heap.addOnGrowBufferHandlers(data => this.pendingUpdates.memoryGrown.push(data));
		this.worker.postMessage({
			init: initConfig
		});
	}

	run(elapsedTime: number): Promise<void> {
		return new Promise((resolve) => {
			this.runningResolve = resolve;

			this.worker.postMessage({
				elapsedTime,
				...this.pendingUpdates
			});

			this.pendingUpdates = {
				memoryGrown: []
			};
		});
	}

	destroy() {
		this.worker.terminate();
	}
}

interface WorkerSystemConfig extends SystemConfig {
	worker: Worker
}