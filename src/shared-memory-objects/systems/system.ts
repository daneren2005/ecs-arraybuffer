const STATS_SIZE = 20;
export default abstract class System {
	name: string;
	currentDelta: number = 0;
	leftOverDelta: number = 0;
	deltaBetweenRuns: number;
	firstRun: boolean = true;

	private startedAt: number = 0;
	// Stats are stored as revolving most recent STATS_SIZE stable + next set
	// When we reach STATS_SIZE * 2, we remove the first STATS_SIZE and start adding on top again
	// min/avg/max always ran against the first STATS_SIZE so it looks like a stable number
	private runTimes: Array<number> = [];

	constructor(options: SystemConfig = { name: 'System' }) {
		this.name = options.name ?? this.constructor.name;

		this.deltaBetweenRuns = options.deltaBetweenRuns ?? 0;
	}

	update(elapsedTime: number): boolean {
		this.currentDelta += elapsedTime;

		if(!this.startedAt && (this.currentDelta >= this.deltaBetweenRuns || this.firstRun)) {
			let leftOverDelta = 0;
			if(this.deltaBetweenRuns > 0) {
				// Without this if we take 100ms to run (ie: IterableSystem across multiple frames) then we will end up actually running this in 300ms total instead of again in 100ms for a total of 200ms
				// With firstRun this ends up calling run(0) the first time - this makes it so things like events are will trigger on the second instead of triggering a 1 second timer at 1.0166 seconds
				leftOverDelta = this.currentDelta % this.deltaBetweenRuns;
			}

			this.startedAt = performance.now();
			let result = this.run(this.currentDelta - leftOverDelta);
			if(result instanceof Promise) {
				result.then(() => {
					this.finishRun();
				});
			} else {
				this.finishRun();
			}

			this.currentDelta = leftOverDelta;
			this.firstRun = false;

			return true;
		} else {
			return false;
		}
	}
	private finishRun() {
		let diff = performance.now() - this.startedAt;
		this.runTimes.push(diff);
		if(this.runTimes.length >= STATS_SIZE * 2) {
			this.runTimes.splice(0, STATS_SIZE);
		}
		
		this.startedAt = 0;
	}
	abstract run(elapsedTime: number): void | Promise<void>;

	destroy() {}


	getRuntimeStats() {
		let set = this.runTimes.slice(0, STATS_SIZE);
		let total = set.reduce((total, current) => total + current, 0);
		let avg = total / set.length;

		return {
			min: Math.min(...set),
			avg,
			max: Math.max(...set),
			percent: avg / (this.deltaBetweenRuns || 16.66)
		};
	}
}

interface SystemConfig {
	name: string
	deltaBetweenRuns?: number
}
export type { SystemConfig };
