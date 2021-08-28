import { v4 } from "uuid";

export class Host {
    id: string;
    hostName: string;
    maxPlayers: number;
    level: number;

    /**
     * World name
     */
    world: string;

    /**
     *  0 -easy -- 100 --hard
     */
    difficulty: number;

    constructor(hostParameters: HostParameters) {
        this.id = v4();
        this.hostName = hostParameters.hostName;
        this.world = hostParameters.worldId;
        this.difficulty = hostParameters.difficulty;
        this.maxPlayers = hostParameters.maxPlayers;
        this.level = hostParameters.level;
    }   
}

export interface HostParameters {
    id?: string;
    hostName: string;
    worldId: string;
    difficulty: number;
    maxPlayers: number;
    level: number;
}