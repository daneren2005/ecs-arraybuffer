import World from '../entities/world';
import { UpdateWorkerData } from './interfaces/update-worker-data';
import { UpdateMainData } from './interfaces/update-main-data';

export default function createWorkerSystem(initWorker: InitWorker) {
	let world: World;
	let workerRunner: WorkerRunner;
	let pendingUpdates: UpdateMainData = {
		memoryGrown: []
	};
	self.onmessage = function(e) {
		if(e.data.init) {
			world = new World(e.data.init);
			workerRunner = initWorker(world);

			world.heap.addOnGrowBufferHandlers(data => pendingUpdates.memoryGrown.push(data));
		} else if(e.data.elapsedTime) {
			let updates = e.data as UpdateWorkerData;
			updates.memoryGrown.forEach(memoryGrown => world.heap.addSharedBuffer(memoryGrown));

			try {
				workerRunner.run(e.data.elapsedTime);
				world.garbageCollect();
			} catch(e) {
				// TODO: Throws errors if ran when another buffer exists we haven't gotten yet
			}

			self.postMessage({
				done: true,
				...pendingUpdates
			});

			pendingUpdates = {
				memoryGrown: []
			};
		}
	};
}

interface WorkerRunner {
	run(elapsedTime: number): void
}
type InitWorker = (world: World) => WorkerRunner;