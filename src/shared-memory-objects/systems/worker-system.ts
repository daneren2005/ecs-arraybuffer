import World, { WorldMemory } from '../entities/world';
import System, { type SystemConfig } from './system';

export default class WorkerSystem extends System {
	world: World;
	worker: Worker;
	runningResolve: (() => void) | null = null;

	constructor(world: World, options: WorkerSystemConfig) {
		super(options);
		this.world = world;
		this.worker = options.worker;

		this.worker.onmessage = (e) => {
			if(e.data.done) {
				this.runningResolve?.();
				this.runningResolve = null;
			}
		};

		const initConfig: WorldMemory = world.getSharedMemory();
		world.heap.onGrowBufferHandlers.push(buffer => {
			// TODO: Implement passing new buffer to thread
		});
		this.worker.postMessage({
			init: initConfig
		});
	}

	run(elapsedTime: number): Promise<void> {
		return new Promise((resolve) => {
			this.runningResolve = resolve;

			this.worker.postMessage({
				elapsedTime
			});
		});
	}

	destroy() {
		this.worker.terminate();
	}
}

interface WorkerSystemConfig extends SystemConfig {
	worker: Worker
}