import {Socket as SocketType } from "socket.io";
import { roomService } from "./RoomService";
import Room from "./Models/Room";
import { Player } from "./Models/Player";


class HandleClient {

    constructor() {
        console.log('HandleClient service initialized');
    }

    /**
     * 
     * @param data = {
     * hostId: string;
     * }
     */
    static handleCreateRoom(client: SocketType, data: any): void {
        client.join(data.hostId);
        roomService.createRoom(new Room(data.hostId));
    }

    /**
     * 
     * @param data = {
     *      hostId: string;
     *      player: clientPlayer;
     * }
     */
    static handleClientJoin(client: SocketType, data: any): void {
        if (!data.hostId) {
            throw new Error('hostId is undefined');
        }
        if (!data.player) {
            throw new Error('player is undefined');
        }

        client.join(data.hostId);
        roomService.getRoomById(data.hostId).addPlayer(new Player(data.player));
        client.to(data.hostId).emit('players/update', {
            players: roomService.getRoomById(data.hostId).players,
        });

        // next line -- because new client cant get prev message (maybe i just don't understand socket.io)
        // it is temp crutch 
        client.emit('players/update', {
            players: roomService.getRoomById(data.hostId).players,
        })
    }

    static handleRemoveClient(client: SocketType): void {
        // remove client from his room
    }

    static handleClientReadyToNextStage(client: SocketType): void {
        // remove next line
        console.log(client?.rooms ?? 'rooms: 0'); 
        // if (all clients in the room is ready) {
            // GameState.nextStage()
        // } else {
            // emit everybody in the room that client is ready 
        // }
        console.log(`handleClientReadyToNextStage${client.id}`);
    }

    static handleClientNotReadyToNextStage(client: SocketType): void {
        // emit everybody that client is not ready
        console.log('handleClientNotReadyToNextStage');
    }

    // static handleChooseTarget(client: SocketType): void {
    //     console.log('handleChooseTarget');
    // }

    // static handleShoot(client: SocketType): void {
    //     console.log('handleShoot');
    // }
}


export default HandleClient;