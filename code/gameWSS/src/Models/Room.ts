import GameState from "../Models/GameState";
import { Player } from "../Models/Player";

export default class Room {
    roomId: string;

    private state: GameState;

    players: Player[] = [];

    // upgrade set State according to receiving data (for example 3 level of "super world")
    constructor(roomId: string) {
        this.roomId = roomId;
        // upgrade set State according to receiving data (for example 3 level of "super world")
        this.state = new GameState();
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }

    removePlayer(playerId: string) {
        this.players = this.players.filter((player: Player) => player.id !== playerId);
    }
}