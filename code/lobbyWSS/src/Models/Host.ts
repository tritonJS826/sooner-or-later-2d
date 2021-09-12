import { v4 } from "uuid";

export class Host {
    hostId: string;
    hostName: string;
    maxPlayers: number;
    level: string;

    /**
     * World name
     */
    world: string;

    constructor(hostParameters: HostParameters) {
        this.hostId = v4();
        this.hostName = hostParameters.hostName;
        this.world = hostParameters.worldId;
        this.maxPlayers = hostParameters.maxPlayers;
        this.level = hostParameters.levelId;
    }   
}

export interface HostParameters {
    id?: string;
    hostName: string;
    worldId: string;
    maxPlayers: number;
    levelId: string;
}