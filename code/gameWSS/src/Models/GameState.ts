import { GameStatus } from "../Models/GameStatus";
import { Player } from "../Models/Player";

type State = {
  currentLevelStage: GameStatus;
  currentLevel: string; // rewrite
  currentWorld: string; // rewrite
  players: {
    [key: string]: Player;
  }
};

const initialGameState: State = {
  currentLevelStage: GameStatus.PRE_GAME,
  currentLevel: "test", // rewrite
  currentWorld: "test", // rewrite
  players: {},
};

class GameState {
  state?: State;

  constructor() {
    console.log("game state created");
    this.createGameState();
    
  }
  
  // set params later
  private createGameState() {
    this.state = initialGameState;
  }

  nextLevelStage(): void {
    console.log("Next level stage");
    this.state?.currentLevelStage
    switch (this.state?.currentLevelStage) {
      case GameStatus.PRE_GAME:
        this.state.currentLevelStage = GameStatus.LEVEL_INTRO;
        console.log(GameStatus.LEVEL_INTRO);
        return;
      case GameStatus.LEVEL_INTRO:
        this.state.currentLevelStage = GameStatus.GAME;
        console.log(GameStatus.GAME);
      return;
      case GameStatus.GAME:
        this.state.currentLevelStage = GameStatus.LEVEL_PASSED;
        console.log(GameStatus.LEVEL_PASSED);
        return;
      case GameStatus.LEVEL_PASSED:
        this.state.currentLevelStage = GameStatus.PRE_GAME;
        console.log(GameStatus.PRE_GAME);
        this.nextLevel();
        return;
      case GameStatus.LEVEL_FAILED:
        this.state.currentLevelStage = GameStatus.PRE_GAME;
        return;
    }
  }

  addPlayer(player: Player): void {
    if (!this.state) {
      throw new Error('State is not defined');
    }
    this.state.players[player.id] = player;
  }

  removePlayerById(playerId: string):void {
    if (!this.state) {
      throw new Error('State is not defined');
    }

    delete this.state.players[playerId];
  }

  private setCurrentLevel(level: any) {
    if (!this.state) {
      throw new Error('State is not defined');
    }

    this.state.currentLevel = level;
  }

  private setCurrentWorkd(world: any) {
    if (!this.state) {
      throw new Error('State is not defined');
    }

    this.state.currentWorld = world;
  }

  nextLevel(): void {
    console.log("nextLevel"); // stub
  }
}

export default GameState;
