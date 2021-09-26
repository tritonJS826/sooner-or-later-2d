import { Player } from 'Logic/Game/Player/PreGamePage/PreGameStore';
import io, { Socket } from 'socket.io-client';

class GameWSS {
    socket?: Socket

    constructor() {}

    connect(player: Player, handleUpdatePlayers: (players: Player[]) => void, hostId?: string) {
      this.socket = io('http://localhost:6001');
      this.socket.on('players/update', (playersData) => handleUpdatePlayers(playersData.players));
      if (hostId) {
        this.socket.emit('player/join-room', { hostId, player });
      }
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

    createNewRoom(hostId: string) {
      if (!this.socket) {
        throw new Error('gwss is not exist');
      }

      this.socket.emit('room/create', { hostId });
    }
}

function handleSocketInit(message: any) {
  // console.log(message);
  // console.log(`init-test GWSS socket ${message?.id}`);
}

export default GameWSS;
