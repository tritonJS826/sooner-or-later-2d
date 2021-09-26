import { Player } from 'Logic/Game/Player/PreGamePage/PreGameStore';
import { action, makeObservable, observable } from 'mobx';

/**
 * The main class which controls the flow of the game process
 */
class GameStore {
  state: any; // state like on gwss service

  @observable
  players: Player[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setPlayers(players: Player[]) {
    console.log('GameStore, players', players);
    this.players = players;
  }
}

export const gameStore = new GameStore();
