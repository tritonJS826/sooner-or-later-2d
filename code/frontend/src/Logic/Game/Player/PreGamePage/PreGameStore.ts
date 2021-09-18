import { hostService } from 'Apis';
import { action, makeObservable, observable } from 'mobx';
import Difficulty from 'Model/Difficulty';
import PlayerStatus from 'Model/PlayerStatus';
import Lobby from 'Services/LWSS/Lobby';

interface Player {
  id: string;
  name: string;
  status: PlayerStatus;
}

interface HostDescription {
  port: number,
  hostName: string;
  hostId: string;
  world: string;
  level: string;
  difficulty: Difficulty;
  maxPlayers: number;
  players: Player[];
}

class PreGameStore {
  lobby?: Lobby;

  @observable
  isPlayerReady = false;

  // @observable
  // players: Player[] = [];

  @observable
  hostDescription: HostDescription = {
    port: 0,
    hostName: '',
    hostId: '',
    world: '',
    level: '',
    difficulty: Difficulty.ALL,
    maxPlayers: 1,
    players: [],
  };

  constructor() {
    makeObservable(this);
  }

  @action.bound
  async setPlayerReady() {
    // try async request on wsserver
    this.isPlayerReady = true;
  }

  @action.bound
  async connectToLWSS(port: string): Promise<void> {
    this.lobby = new Lobby({
      onOpen: () => console.log('Connected'),
      onMessage: (message) => {
        const currentHost = JSON.parse(message.data).hosts[port];
        this.setHostDescription(currentHost);
      },
    });
    const message = JSON.stringify({
      action: 'connect to host',
      port,
    });
    this.lobby.connectToHost(port, playerInfoStub());

    // GWSS
    // this.players = playersStub; -- find in hostDescription
  }

  @action.bound
  setHostDescription(hostDescription: HostDescription) {
    this.hostDescription = {
      hostName: hostDescription.hostName,
      hostId: hostDescription.hostId,
      port: hostDescription.port,
      world: `it's world's id: ${hostDescription.world}`,
      level: `it's level's id: ${hostDescription.level}`,
      difficulty: Difficulty.EASY,
      maxPlayers: hostDescription.maxPlayers,
      players: hostDescription.players,
    };
  }

  @action.bound
  closeConnections() {
    this.lobby?.disconnect();
    hostService.removeGame(this.hostDescription.hostId);
  }
}

export default PreGameStore;

const playerInfoStub = () => {
  const player = {
    id: String(Math.random()),
    name: `Random name stub: ${Math.random()}`,
    status: PlayerStatus.READY,
  };

  return player;
};
