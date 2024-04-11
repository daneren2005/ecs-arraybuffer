import { GrowBufferData } from '@daneren2005/shared-memory-objects';

interface UpdateWorkerData {
	memoryGrown: Array<GrowBufferData>
}

export type { UpdateWorkerData };