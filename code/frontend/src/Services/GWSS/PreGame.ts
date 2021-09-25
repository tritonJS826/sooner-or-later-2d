import { Player } from 'Logic/Game/Player/PreGamePage/PreGameStore';
import io, { Socket } from 'socket.io-client';

class GameWSS {
    socket?: Socket

    constructor() {}

    connect(hostId: string, player: Player) {
      this.socket = io('http://localhost:6001');
      this.socket.on('players/update', handleUpdatePlayers);
      this.socket.emit('player/join-room', player);
      // emit join-players to server to give all chance to know about you
    }

    setReadyStatus(status: boolean) {
      if (!this.socket) {
        throw new Error('gwss is not exist');
      }

      if (status) {
        this.socket.emit('stage/status/ready');
      } else {
        this.socket.emit('stage/status/not-ready');
      }
    }

    leave() {
      if (!this.socket) {
        throw new Error('gwss is not exist');
      }

      this.socket.emit('player/exit');
    }
}

function handleUpdatePlayers(message: any) { // message.players consist of players data with statuses
  console.log('players gwss updated!!', message);
}

function handleSocketInit(message: any) {
  console.log(message);
  console.log(`init-test GWSS socket ${message?.id}`);
}

export default GameWSS;
