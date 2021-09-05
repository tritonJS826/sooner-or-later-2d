import { action, makeObservable, observable } from 'mobx';
import Difficulty from 'Model/Difficulty';
import PlayerStatus from 'Model/PlayerStatus';

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
  /**
   * LWSS websocket
   */
   ws?: WebSocket;

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
    this.ws = new WebSocket('ws://localhost:5002'); // LWSS
    this.ws.onopen = () => console.log('Connected');

    this.ws.onmessage = (message) => {
      const currentHost = JSON.parse(message.data).hosts[port];
      console.log(currentHost);
      this.hostDescription = {
        hostName: currentHost.hostName,
        hostId: currentHost.id,
        world: `it's world's id: ${currentHost.world}`,
        level: `it's level's id: ${currentHost.level}`,
        difficulty: Difficulty.EASY,
        maxPlayers: currentHost.maxPlayers,
      };

      // GWSS
      this.players = playersStub;
    };

    // this.hostDescription = hostDescriptionStub;
  }

  @action.bound
  closeConnections() {
    this.ws?.close();
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
