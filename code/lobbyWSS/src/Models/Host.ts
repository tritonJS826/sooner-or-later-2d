import { RawPlayer as RawPlayer } from "Models/Player";
import { v4 } from "uuid";

export class Host {
    hostId: string;
    hostName: string;
    maxPlayers: number;
    level: string;
    
    /**test */
    players: RawPlayer[];

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
        this.players = [];
    }

    // addPlayer(player: RawPlayer) {
        // if (this.players.has(player.id)) {
        //     console.log('Error, player already exist')
        // }
        // this.players.set(player.id, player);
    //     this.playerArr.push(player)
    // }

    // removePlayer(player: RawPlayer) {
    //     // if (!this.players.has(player.id)) {
    //     //     console.log('Error, player is undefined!')
    //     // }
    //     // this.players.delete(player.id);
    // }
}

export interface HostParameters {
    id?: string;
    hostName: string;
    worldId: string;
    maxPlayers: number;
    levelId: string;
}