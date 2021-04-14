import { action, makeObservable, observable } from "mobx";
import generator from "../Service/IdGenerator";
import enemiesStore, { EnemiesStore } from "./Enemies";
import hero, { Hero } from "./Hero";

export enum ELevelStage {
  introduction = "introduction",
  game = "game",
  levelCompleted = "levelCompleted",
  heroDied = "heroDied",
}

export class LevelStore {
  id: string;
  header: string | null;
  description: string | null;
  startText: string | null;
  startImgUrl: string | null;
  finishText: string | null;
  finishImgUrl: string | null;
  timer: number;
  levelStage: ELevelStage;
  onCompleteLevel: () => void;
  onFailLevel: () => void;

  enemiesData;
  enemiesStore: EnemiesStore;
  hero: Hero;

  timerId: any;

  constructor({
    id,
    header,
    description,
    startText,
    startImgUrl,
    finishText,
    finishImgUrl,
    enemies,
    timer,
    onCompleteLevel,
    onFailLevel,
    enemiesStore,
    hero,
  }: ILevelSeed) {
    this.id = id;
    this.header = header ?? null;
    this.description = description ?? null;
    this.startText = startText ?? null;
    this.startImgUrl = startImgUrl ?? null;
    this.finishText = finishText ?? null;
    this.finishImgUrl = finishImgUrl ?? null;
    this.timer = timer ?? 0;
    this.levelStage = ELevelStage.introduction;
    this.onCompleteLevel = onCompleteLevel;
    this.onFailLevel = onFailLevel;
    this.enemiesData = enemies;

    this.enemiesStore = enemiesStore;
    this.hero = hero;

    this.timerId = null;

    makeObservable(this, {
      id: observable,
      header: observable,
      description: observable,
      startText: observable,
      startImgUrl: observable,
      finishText: observable,
      finishImgUrl: observable,
      timer: observable,
      nextLevelStage: action,
      resetLevel: action,
      levelStage: observable,
      enemiesStore: observable,
    });
  }

  // addRandomEnemyEnemy() {
  //   enemiesStore.addRandomSimpleEnemy();
  //   console.log("addRandomSimpleEnemies");
  // }

  private isLevelEnded() {
    if (!this.enemiesData) return;

    // console.log(this.enemiesData.length - 1);

    const isEnemiesStoreEmpty = this.enemiesStore.enemies.length === 0;
    const isNewEnemyAbsent =
      this.enemiesData[this.enemiesData.length - 1].showTime < this.timer;
    const isStageGame = this.levelStage === ELevelStage.game;

    return isEnemiesStoreEmpty && isNewEnemyAbsent && isStageGame;
  }

  private startTimer() {
    const setTimer = () => {
      this.timerId = setInterval(() => {
        this.timer++;

        if (this.enemiesData?.length) {
          const requiredToCreate = this.enemiesData.find((enemyData) => this.timer === enemyData.showTime);
          requiredToCreate?.cardsId.forEach((enemyIndex) => enemiesStore.addEnemyByIndex(enemyIndex));
        }

        if (this.isLevelEnded()) {
          this.nextLevelStage();
          alert("nextLevelStage");
        }
      }, 1000);
    };
    return setTimer();
  }

  private resetTimer() {
    this.timer = 0;
  }

  private stopTimer() {
    clearInterval(this.timerId);
  }

  nextLevelStage() {
    switch (this.levelStage) {
      case ELevelStage.introduction:
        this.levelStage = ELevelStage.game;
        this.startTimer();
        return;

      case ELevelStage.game:
        this.levelStage = ELevelStage.levelCompleted;
        this.stopTimer();
        return;

      case ELevelStage.levelCompleted:
        this.onCompleteLevel();
        return;

      default:
        alert("wrong LevelStage (LevelStore)");
    }
  }

  resetLevel(levelData: ILevelSeed) {
    this.id = levelData.id;
    this.header = levelData.header ?? null;
    this.description = levelData.description ?? null;
    this.startText = levelData.startText ?? null;
    this.startImgUrl = levelData.startImgUrl ?? null;
    this.finishText = levelData.finishText ?? null;
    this.finishImgUrl = levelData.finishImgUrl ?? null;
    this.timer = levelData.timer ?? 0;
    this.levelStage = ELevelStage.introduction;
    this.enemiesData = levelData.enemies ?? [];

    this.onCompleteLevel = levelData.onCompleteLevel;
    // enemiesStore.refresh();

    // this.startTimer();
  }
}

const levelStore = new LevelStore({
  id: generator.generateId(),

  onCompleteLevel: () => {
    alert("level finished");
  },

  onFailLevel: () => {
    alert("level failed");
  },

  enemiesStore,

  hero,
});

export default levelStore;

interface ILevelSeed {
  id: string;
  header?: string;
  description?: string;
  startText?: string;
  startImgUrl?: string;
  finishText?: string;
  finishImgUrl?: string;
  timer?: number;
  onCompleteLevel: () => void;
  onFailLevel: () => void;
  enemiesStore: EnemiesStore;
  hero: Hero;
  enemies?: {
    showTime: number;
    cardsId: number[];
  }[];
}

// {
//   "id": "fddassada",
//   "header": "Welcome to the first level!",
//   "description": "Your first level",
//   "startText": "Something interesting story.....",
//   "startImgUrl": null,
//   "finishText": "The end of the first level",
//   "finishImgUrl": null,
//   "enemies": [
//       {
//           "showTime": 2000,
//           "cardsId": [1]
//       },
//       {
//           "showTime": 3000,
//           "cardsId": [2]
//       },
//       {
//           "showTime": 7000,
//           "cardsId": [1,2,3]
//       }
//   ]
// }
