import {Socket as SocketType } from "socket.io";
import { roomService } from "./RoomService";
import Room from "./Models/Room";


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

    static handleClientJoin(client: SocketType, data: any): void {
        if (!data.hostId) {
            throw new Error('hostId is undefined');
        }
        if (!data.player) {
            throw new Error('player is undefined');
        }

        if (data.hostId) { // data.hostId is a sign that room was created
            client.join(data.hostId);
            client.to(data.hostId).emit('players/update', {});
        }
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