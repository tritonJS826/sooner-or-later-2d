import {
  makeObservable, action, observable, computed,
} from 'mobx';
import Difficulty from 'Model/Difficulty';

interface HostTableData {
  id: string;
  port: string;
  world: string;
  hostName: string;
  difficulty: string;
}
interface Filter {
  id?: string;
  world?: string;
  hostName?: string;
  difficulty?: Difficulty;
}

class MultiplayerStore {
  /**
   * LWSS websocket
   */
  ws?: WebSocket;

  /**
   * Amount of connected to WSServer players
   */
  @observable
  playersAvailable: number = 0;

  @observable
  filter: Filter = {};

  @observable
  tableData: HostTableData[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setFilter(filter: Filter) {
    this.filter = filter;
  }

  @action.bound
  setPlayersAvailable(playersAmount: number) {
    this.playersAvailable = playersAmount;
  }

  @action.bound
  setTableData(tableData: HostTableData[]) {
    this.tableData = tableData;
  }

  @action.bound
  async connectToLWSS(): Promise<void> {
    this.ws = new WebSocket('ws://localhost:5002'); // Better to use LWSS service (Loobby) (like in PreGameStore)
    this.ws.onopen = () => console.log('Connected to LWSS');

    this.ws.onmessage = (message) => {
      const hostsList = Object.entries(JSON.parse(message.data).hosts ?? {});
      this.setTableData(hostsList.map(([port, host]: any) => ({
        id: host.hostId,
        port,
        world: host.world, // it's just id
        hostName: host.hostName,
        difficulty: Difficulty.EASY,
      })));
      this.setPlayersAvailable(JSON.parse(message.data).gamersWatch);
    };
  }

  @action.bound
  closeConnections() {
    console.log('DisConnected');
    this.ws?.close();
  }

  @computed
  get tableDataWithFilter() {
    return this.tableData.filter((cellData) => {
      const isIdMatch = this.filter.id
        ? cellData.id.includes(this.filter.id)
        : true;
      const isWordMatch = this.filter.world
        ? cellData.world.includes(this.filter.world)
        : true;
      const isHostNameMatch = this.filter.hostName
        ? cellData.hostName.includes(this.filter.hostName)
        : true;
      const isDifficultyMatch = this.filter.difficulty
        ? cellData.difficulty.includes(this.filter.difficulty)
        : true;

      return isIdMatch && isWordMatch && isHostNameMatch && isDifficultyMatch;
    });
  }
}

export default MultiplayerStore;
