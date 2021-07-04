import { v4 } from "uuid";

export class Host {
    id: string;
    hostName: string;
    world: string;
    difficulty: string;

    constructor(hostParameters: HostParameters) {
        this.id = v4();
        this.hostName = hostParameters.hostName;
        this.world = hostParameters.world;
        this.difficulty = hostParameters.difficulty;
    }
}

export interface HostParameters {
    id?: string;
    hostName: string;
    world: string;
    difficulty: string;
}