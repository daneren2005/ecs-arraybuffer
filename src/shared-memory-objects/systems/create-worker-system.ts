import World from '../entities/world';

export default function createWorkerSystem(initWorker: InitWorker) {
	let world: World;
	let workerRunner: WorkerRunner;
	self.onmessage = function(e) {
		if(e.data.init) {
			world = new World(e.data.init);
			workerRunner = initWorker(world);
		} else if(e.data.elapsedTime) {
			workerRunner.run(e.data.elapsedTime);

			self.postMessage({
				done: true
			});
		}
	};
}

interface WorkerRunner {
	run(elapsedTime: number): void
}
type InitWorker = (world: World) => WorkerRunner;