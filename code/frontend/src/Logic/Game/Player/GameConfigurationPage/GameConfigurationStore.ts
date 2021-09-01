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
  description: string;
}

interface Settings {
  hostName: string;
  maxPlayers: number;
  worldId: string;
  level: number;
  difficulty: number;
}

class GameConfigurationStore {
  @observable
  settings: Settings = {
    hostName: 'singlePlayer',
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
  get currentWorldDescription(): string {
    return this.worlds.find((world) => world.id === this.settings.worldId)!?.description;
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
  async createGame({ multiplayer }: {multiplayer: boolean}): Promise<CreateHostResponse> {
    if (multiplayer) {
      // host service works on ws:localhost:5002
      const responseRaw = await fetch('http://localhost:5499/create-host', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.settings),
      });

      const response: CreateHostResponse = await responseRaw.json();
      console.log(JSON.stringify(this.settings));
      return response;
    }
    return {
      host: {
        hostName: 'test',
        maxPlayers: 1,
        worldId: this.settings.worldId,
        level: this.settings.level,
        difficulty: this.settings.difficulty,
      },
      port: 0,
    };
  }
}

export default GameConfigurationStore;

const worldsStub: World[] = [
  {
    id: '1',
    levelsAmount: 42,
    name: 'touchTyping',
    maxDifficulty: 5,
    description: `la lalala lalal lalal lalal lallllal lalal al lallallal lal lal lal lallal lal lala lal lallalal la lal la l
    
    
    la lalala lalal lalal lalal lallllal lalal al lallallal lal lal lal lallal lal lala lal lallalal la lal la l
    la lalala lalal lalal lalal lallllal lalal al lallallal lal lal lal lallal lal lala lal lallalal la lal la l`,
  },
  {
    id: '2',
    levelsAmount: 6,
    name: 'algebra',
    maxDifficulty: 10,
    description: `be bebebe bebel bebel bebel belllbel bebel al belbelbel bel bel bel belbel bel bebe bel belbebel be bel be l
    be bebebe bebel bebel bebel belllbel bebel al belbelbel bel bel bel belbel bel bebe bel belbebel be bel be l
    be bebebe bebel bebel bebel belllbel bebel al belbelbel bel bel bel belbel bel bebe bel belbebel be bel be l`,
  },
];

export interface CreateHostResponse {
  host: {
    hostName: string;
    maxPlayers: number;
    worldId: string;
    level: number;
    difficulty: number;
  };
  port: number;
}
