import { SelectOption } from 'Components/SelectWithLabel/SelectWithLabel';
import {
  action, computed, makeObservable, observable,
} from 'mobx';

interface World {
  id: string;
  levels: Level[];
  name: string;
  description: string;
}

interface Level {
  id: string
  title: string
  description: string
}

interface Settings {
  hostName: string;
  maxPlayers: number;
  currentWorldId: string;
  currentLevelId: string;
}

class GameConfigurationStore {
  @observable
  settings: Settings = {
    hostName: 'singlePlayer',
    maxPlayers: 2,
    currentWorldId: '0',
    currentLevelId: '0',
  };

  @observable
  worlds: World[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setSettings(settings: Partial<Settings>) {
    this.settings = {
      ...this.settings,
      ...settings,
    };
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
  get currentWorld() {
    return this.worlds.find((world) => world.id === this.settings.currentWorldId)!;
  }

  @computed
  get currentLevel() {
    return this.currentWorld?.levels
      .find((level) => level.id === this.settings.currentLevelId);
  }

  @computed
  get optionsLevel(): SelectOption[] {
    const currentWorld = this.worlds.find(
      (world) => world.id === this.settings.currentWorldId,
    );

    const levels = currentWorld?.levels ?? [];

    return levels.map((level) => ({
      key: level.id,
      data: level.title,
      value: level.id,
    }));
  }

  @action.bound
  loadData(worlds: World[]) {
    this.worlds = worlds;
    this.setSettings({ ...this.settings, currentWorldId: worlds[0].id, currentLevelId: worlds[0].levels[0].id });
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
      return response;
    }
    return {
      host: {
        hostName: 'test',
        maxPlayers: 1,
        worldId: this.settings.currentWorldId,
        levelId: this.settings.currentLevelId,
      },
      port: 0,
    };
  }
}

export default GameConfigurationStore;

export interface CreateHostResponse {
  host: {
    hostName: string;
    maxPlayers: number;
    worldId: string;
    levelId: string;
  };
  port: number;
}
