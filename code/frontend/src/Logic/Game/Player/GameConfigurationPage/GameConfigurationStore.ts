import { hostService } from 'Apis';
import { SelectOption } from 'Components/SelectWithLabel/SelectWithLabel';
import { CreateHostResponse } from 'Services/LWSS/Host';
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
  id: string;
  title: string;
  description: string;
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

  /**
   * LWSS websocket
   */
  ws?: WebSocket;

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
  get currentWorld(): World {
    const currentWorld = this.worlds.find(
      (world) => world.id === this.settings.currentWorldId,
    )!;

    this.setCurrentLevelId(currentWorld.levels[0].id);
    return currentWorld;
  }

  @action.bound
  setCurrentWorldId(id: string) {
    this.settings.currentWorldId = id;
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
  get currentLevel(): Level {
    return this.currentWorld?.levels.find(
      (level) => level.id === this.settings.currentLevelId,
    )!;
  }

  @action.bound
  setCurrentLevelId(id: string) {
    this.settings.currentLevelId = id;
  }

  @computed
  get optionsLevel(): SelectOption[] {
    const levels = this.currentWorld?.levels ?? [];

    return levels.map((level) => ({
      key: level.id,
      data: level.title,
      value: level.id,
    }));
  }

  @action.bound
  loadData(worlds: World[]) {
    this.worlds = worlds;
    this.setSettings({
      ...this.settings,
      currentWorldId: worlds[0].id,
      currentLevelId: worlds[0].levels[0].id,
    });
  }

  async createGame({
    multiplayer,
  }: {
    multiplayer: boolean;
  }): Promise<CreateHostResponse> {
    if (multiplayer) {
      return hostService.createHost(this.settings);
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
