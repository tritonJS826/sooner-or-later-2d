import { action, makeObservable, observable } from "mobx";
import CardsService from "../Service/data/CardsService";
import LevelsService from "../Service/data/LevelsService";
import levelStore, { LevelStore } from "./LevelStore";

export class Game {
  allLevelsData: any[];
  allEnemiesData: any[];

  currentLevelIndex: number;
  levelStore: LevelStore;

  constructor({ currentLevelIndex, levelStore }: IGameSeed) {
    this.allLevelsData = LevelsService.getLevels();
    this.allEnemiesData = CardsService.getCards();
    this.currentLevelIndex = currentLevelIndex ?? 0;
    this.levelStore = levelStore;
    this.levelStore.onCompleteLevel = this.onCompleteLevel;
    this.levelStore.onFailLevel = this.onFailLevel;

    makeObservable(this, {
      allLevelsData: observable,
      allEnemiesData: observable,
      currentLevelIndex: observable,
      startLevel: action,
      onCompleteLevel: action,
      onFailLevel: action,
    });
  }

  startLevel() {
    this.levelStore.heroes.resetAllHeroes();
    
    this.levelStore.resetLevel({
      ...this.allLevelsData[this?.currentLevelIndex ?? 0],
      onCompleteLevel: this.onCompleteLevel.bind(this),
      onFailLevel: this.onFailLevel.bind(this),
    });
  }

  onCompleteLevel() {
    const maxLevelIndex = this.allLevelsData.length - 1;
    if (maxLevelIndex === this.currentLevelIndex) {
      this.onGameComplete();
    } else {
      this.nextLevel();
      this.startLevel();
    }
  }

  onFailLevel() {
    this.startLevel();
  }

  private nextLevel() {
    this.currentLevelIndex += 1;
  }

  private onGameComplete() {
    alert('this is the end of the game) Thank u) ');
  }

}

const gameStore = new Game({ levelStore });

export default gameStore;

interface IGameSeed {
  currentLevelIndex?: number;
  levelStore: LevelStore;
}
