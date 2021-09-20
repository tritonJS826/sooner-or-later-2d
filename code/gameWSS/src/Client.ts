import {Socket as SocketType } from "socket.io";

class HandleClient {

    constructor() {
        console.log('HandleClient service initialized');
    }

    static handleClientJoin(client: SocketType): void {
        if (client.data.hostId) { // data.hostId is a sign that room was created
            console.log('!!!!here!!!!')
            client.join(client.data.hostId);
            client.to(client.data.hostId).emit('update-players')
        } else {
            client.join(client.data.playerId) // create new room which have host player id
        }
        console.log(`handleClientJoin (client${client.id, client.data})`);
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