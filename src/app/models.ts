export class Image {
  id: string;
  environmentReference: string;
  imported: boolean;
}

export class Environment {
  id: string;
}

export class Deployment {
  id: string;
}

export class Runtimestats {
	exportWorker: number;
	exportsPending: number;
	importWorker: number;
	importsPending: number;
	storePending: number;
	storeWorker: number;
}