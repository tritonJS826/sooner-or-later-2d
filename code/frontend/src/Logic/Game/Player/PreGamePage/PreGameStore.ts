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
  hostName: string;
  hostId: string;
  world: string;
  level: string;
  difficulty: Difficulty;
  maxPlayers: number;
}

class PreGameStore {
  ws?: Lobby;

  @observable
  isPlayerReady = false;

  @observable
  players: Player[] = [];

  @observable
  hostDescription: HostDescription = {
    hostName: '',
    hostId: '',
    world: '',
    level: '',
    difficulty: Difficulty.ALL,
    maxPlayers: 1,
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
    this.ws = new Lobby({
      onOpen: () => console.log('Connected'),
      onMessage: (message) => {
        const currentHost = JSON.parse(message.data).hosts[port];
        this.setHostDescription(currentHost);
      },
    });
    // GWSS
    this.players = playersStub;
  }

  @action.bound
  setHostDescription(hostDescription: HostDescription) {
    this.hostDescription = {
      hostName: hostDescription.hostName,
      hostId: hostDescription.hostId,
      world: `it's world's id: ${hostDescription.world}`,
      level: `it's level's id: ${hostDescription.level}`,
      difficulty: Difficulty.EASY,
      maxPlayers: hostDescription.maxPlayers,
    };
  }

  @action.bound
  closeConnections() {
    this.ws?.disconnect();
    hostService.removeGame(this.hostDescription.hostId);
  }
}

export default PreGameStore;

const playersStub = [
  {
    id: '1',
    name: 'Ivan',
    status: PlayerStatus.READY,
  },
  {
    id: '2',
    name: 'Iman',
    status: PlayerStatus.NOT_READY,
  },
  {
    id: '3',
    name: 'Isan',
    status: PlayerStatus.NOT_READY,
  },
];
