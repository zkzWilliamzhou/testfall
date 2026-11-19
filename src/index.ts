export interface Config { name: string; version: string; }
export class Core { config: Config; constructor(c: Config) { this.config = c; }
  execute(input: string): string { return `Executed: ${input}`; }
}
export function createCore(config: Config): Core { return new Core(config); }
