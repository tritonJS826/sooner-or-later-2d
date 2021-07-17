import { SelectOption } from 'Components/SelectWithLabel/SelectWithLabel';
import {
  action, computed, makeObservable, observable,
} from 'mobx';
import { Difficulty } from 'Model/Difficulty';
import generateId from 'Utils/IdGenerator';

interface World {
  id: string;
  levelsAmount: number;
  name: string;
}

interface Settings {
  roomName: string;
  maxPlayers: number;
  worldId: string;
  level: number;
  difficulty: Difficulty;
}

class GameConfigurationStore {
  @observable
  settings: Settings = {
    roomName: '',
    maxPlayers: 2,
    worldId: '',
    level: 1,
    difficulty: Difficulty.EASY,
  };

  @observable
  worlds: World[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setSettings(settings: Settings) {
    this.settings = settings;
  }

  @computed
  get optionsWorld(): SelectOption[] {
    return this.worlds.map((world) => ({
      key: world.id,
      data: world.name,
      value: world.id,
    }));
  }

  @computed
  get optionsLevel(): SelectOption[] {
    const currentWorld = this.worlds.find(
      (world) => world.id === this.settings.worldId,
    );

    const levelsAmount = currentWorld?.levelsAmount ?? 0;

    return new Array(levelsAmount).fill(null).map((level, index) => ({
      key: String(index),
      data: String(index),
      value: String(index),
    }));
  }

  @computed
  get optionsWorldDifficulty(): SelectOption[] {
    return [
      {
        key: Difficulty.EASY,
        data: Difficulty.EASY,
        value: Difficulty.EASY,
      },
      {
        key: Difficulty.HARD,
        data: Difficulty.HARD,
        value: Difficulty.HARD,
      },
    ];
  }

  @action.bound
  loadData() {
    // connect to wsserver
    // get data abot worlds and levels and difficulties

    this.worlds = worldsStub;
  }

  @action.bound
  createGame() {
    // async to wsserver
  }
}

export default GameConfigurationStore;

const worldsStub = [
  {
    id: 'id1',
    levelsAmount: 4,
    name: 'testWorld1',
  },
  {
    id: 'id2',
    levelsAmount: 6,
    name: 'testWorld2',
  },
];
