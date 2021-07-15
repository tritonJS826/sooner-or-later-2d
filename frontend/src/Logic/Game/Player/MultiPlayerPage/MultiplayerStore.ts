import {
  makeObservable, action, observable, computed,
} from 'mobx';
import { Difficulty } from 'Model/Difficulty';

interface HostTableData {
  id: string;
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
  async loadData(): Promise<void> {
    this.tableData = tableData;
  }

  @computed
  get tableDataWithFilter() {
    return this.tableData
      .filter((cellData) => {
        const isIdMatch = this.filter.id ? cellData.id.includes(this.filter.id) : true;
        const isWordMatch = this.filter.world ? cellData.world.includes(this.filter.world) : true;
        const isHostNameMatch = this.filter.hostName ? cellData.hostName.includes(this.filter.hostName) : true;
        const isDifficultyMatch = this.filter.difficulty ? cellData.difficulty.includes(this.filter.difficulty) : true;

        return isIdMatch && isWordMatch && isHostNameMatch && isDifficultyMatch;
      });
  }
}

export default MultiplayerStore;

const tableData = [{
  id: '1',
  world: 'world1',
  hostName: 'hostName',
  difficulty: 'easy',
}, {
  id: '2',
  world: 'world2',
  hostName: 'hostName2',
  difficulty: 'hard',
}, {
  id: '3',
  world: 'world1',
  hostName: 'hostName',
  difficulty: 'easy',
}, {
  id: '4',
  world: 'world2',
  hostName: 'hostName2',
  difficulty: 'hard',
}, {
  id: '5',
  world: 'world1',
  hostName: 'hostName',
  difficulty: 'easy',
}, {
  id: '6',
  world: 'world2',
  hostName: 'hostName2hostName2',
  difficulty: 'hard',
}, {
  id: '7',
  world: 'world1',
  hostName: 'hostName',
  difficulty: 'easy',
}, {
  id: '8',
  world: 'world2',
  hostName: 'hostName2',
  difficulty: 'hard',
}, {
  id: '9',
  world: 'world1',
  hostName: 'hostName',
  difficulty: 'easy',
}, {
  id: '10',
  world: 'world2',
  hostName: 'hostName2',
  difficulty: 'hard',
}, {
  id: '11',
  world: 'world1',
  hostName: 'hostName',
  difficulty: 'easy',
}, {
  id: '12',
  world: 'world2',
  hostName: 'hostName2',
  difficulty: 'hard',
}];
