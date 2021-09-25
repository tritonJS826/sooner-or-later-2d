import { Player } from "Models/Player";

export default class Room {
    roomId: string;

    players: Player[] = [];

    constructor(roomId: string) {
        this.roomId = roomId;
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }

    removePlayer(playerId: string) {
        this.players = this.players.filter((player: Player) => player.id !== playerId);
    }
}