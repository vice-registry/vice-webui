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
  storePending: number;
}