import { action } from 'mobx';
import io, { Socket } from 'socket.io-client';

class GameWSS {
    socket?: Socket

    constructor() {}

    connect(hostId: string) {
      this.socket = io('http://localhost:6001');
      this.socket.on('init-test', handleSocketInit);
      this.socket.on('update-players', handleUpdatePlayers);
      // emit update-players to server to gove all chance to know about you
    }

    setMeReady() {
      this.socket?.emit('client-ready-to-next-stage');
    }

    setMeNotReady() {
      console.log('client-not-ready-to-next-stage');
      this.socket?.emit('client-not-ready-to-next-stage');
    }
}

function handleUpdatePlayers(message: any) { // message.players consist of players data with statuses
    console.log(message);
}

function handleSocketInit(message: any) {
  console.log(`init-test GWSS socket ${message.data}`);
}

export default GameWSS;
