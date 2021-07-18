import { SelectOption } from 'Components/SelectWithLabel/SelectWithLabel';
import {
  action, computed, makeObservable, observable,
} from 'mobx';
// import { Difficulty } from 'Model/Difficulty';

interface World {
  id: string;
  levelsAmount: number;
  name: string;
  maxDifficulty: number;
}

interface Settings {
  roomName: string;
  maxPlayers: number;
  worldId: string;
  level: number;
  difficulty: number;
}

class GameConfigurationStore {
  @observable
  settings: Settings = {
    roomName: '',
    maxPlayers: 2,
    worldId: '',
    level: 0,
    difficulty: 0,
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
    const currentWorld = this.worlds.find(
      (world) => world.id === this.settings.worldId,
    );

    const difficulties = currentWorld?.maxDifficulty ?? 0;

    return new Array(difficulties).fill(null).map((difficulty, index) => ({
      key: String(index),
      data: String(index),
      value: String(index),
    }));
  }

  @action.bound
  async loadData() {
    // connect to wsserver
    // get data about worlds and levels and difficulties

    this.worlds = worldsStub;
    this.setSettings({ ...this.settings, worldId: this.worlds[0].id });
  }

  @action.bound
  createGame() {
    // async to wsserver
  }
}

export default GameConfigurationStore;

const worldsStub = [
  {
    id: '1',
    levelsAmount: 42,
    name: 'touchTyping',
    maxDifficulty: 5,
  },
  {
    id: '2',
    levelsAmount: 6,
    name: 'algebra',
    maxDifficulty: 10,
  },
];