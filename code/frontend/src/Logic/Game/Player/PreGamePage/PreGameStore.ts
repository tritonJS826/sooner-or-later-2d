import { hostService } from 'Apis';
import { action, makeObservable, observable } from 'mobx';
import Difficulty from 'Model/Difficulty';
import PlayerStatus from 'Model/PlayerStatus';
import GameWSS from 'Services/GWSS/PreGame';
import Lobby from 'Services/LWSS/Lobby';

export interface Player {
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

  gwss?: GameWSS;

  @observable
  isPlayerReady = false;

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
  connectToGWSS(hostId: string) { // better to get player data and hostId instead just host Id
    this.gwss = new GameWSS();
    const player = playerInfoStub(); // add real player data
    this.gwss.connect(player, hostId);
  }

  @action.bound
  async setPlayerReady() {
    // try async request on wsserver
    this.isPlayerReady = true;
    this.gwss?.setReadyStatus(true);
  }

  @action.bound
  async setPlayerNotReady() {
    this.isPlayerReady = false;
    this.gwss?.setReadyStatus(false);
  }

  @action.bound
  async connectToLWSS(port: string): Promise<void> {
    this.lobby = new Lobby({
      onOpen: () => console.log('Connected to LWSS'),
      onMessage: (message) => {
        const currentHost = JSON.parse(message.data).hosts[port];
        this.setHostDescription(currentHost);
      },
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
