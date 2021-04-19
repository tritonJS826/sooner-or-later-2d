import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import heroStore, { Hero } from './Hero';
import enemiesStore, { EnemiesStore } from './Enemies';
import levelStore, { LevelStore } from './LevelStore';
import gameStore, { Game } from './GameStore';

export const store = {
  heroStore,
  enemiesStore,
  levelStore,
  gameStore,
};

interface IStore {
  heroStore: Hero;
  enemiesStore: EnemiesStore;
  levelStore: LevelStore;
  gameStore: Game;
}

export const useStore = (): IStore => {
  const { store } = useContext(MobXProviderContext);
  return store as IStore;
};
