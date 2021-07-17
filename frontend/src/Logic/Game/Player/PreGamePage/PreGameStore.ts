import { action, makeObservable, observable } from 'mobx';
import { Difficulty } from 'Model/Difficulty';
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
  playersAmount: number;
  maxPlayers: number;
}

class PreGameStore {
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
    playersAmount: 1,
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
  async loadData() {
    // get from wsserver
    this.hostDescription = hostDescriptionStub;
    this.players = playersStub;
  }
}

export default PreGameStore;

const hostDescriptionStub: HostDescription = {
  hostName: 'superHost',
  hostId: 'asdasda-dasdadasd-ad',
  world: 'zombie-killer',
  level: '32',
  difficulty: Difficulty.EASY,
  playersAmount: 5,
  maxPlayers: 7,
};

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
