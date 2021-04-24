import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import heroesStore, { Heroes } from './Heroes';
import enemiesStore, { EnemiesStore } from './Enemies';
import levelStore, { LevelStore } from './LevelStore';
import gameStore, { Game } from './GameStore';

export const store: IStore = {
  heroesStore,
  enemiesStore,
  levelStore,
  gameStore,
};
interface IStore {
  heroesStore: Heroes;
  enemiesStore: EnemiesStore;
  levelStore: LevelStore;
  gameStore: Game;
}

export const useStore = (): IStore => {
  const { store } = useContext(MobXProviderContext);
  return store as IStore;
};
