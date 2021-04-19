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
  failText: string | null;
  failImg: string | null;
  timer: number;
  levelStage: ELevelStage;

  onCompleteLevel: () => void;
  onFailLevel: () => void;

  enemiesData:
    | {
        showTime: number;
        cardsId: number[];
      }[]
    | undefined;
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
    failText,
    failImg,
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
    this.failText = failText ?? null;
    this.failImg = failImg ?? null;
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
      failText: observable,
      failImg: observable,
      timer: observable,
      levelStage: observable,

      enemiesStore: observable,
      hero: observable,

      nextLevelStage: action,
      resetLevel: action,
    });
  }

  // addRandomEnemyEnemy() {
  //   enemiesStore.addRandomSimpleEnemy();
  //   console.log("addRandomSimpleEnemies");
  // }

  nextLevelStage() {
    switch (this.levelStage) {
      case ELevelStage.heroDied:
        this.levelStage = ELevelStage.introduction;
        return;

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
    // нужно переписать!! наверно
    this.id = levelData.id;
    this.header = levelData.header ?? null;
    this.description = levelData.description ?? null;
    this.startText = levelData.startText ?? null;
    this.startImgUrl = levelData.startImgUrl ?? null;
    this.finishText = levelData.finishText ?? null;
    this.finishImgUrl = levelData.finishImgUrl ?? null;
    this.failText = levelData.failText ?? null;
    this.failImg = levelData.failImg ?? null;
    this.timer = levelData.timer ?? 0;
    this.levelStage = ELevelStage.introduction;
    this.enemiesData = levelData.enemies ?? [];

    this.onCompleteLevel = levelData.onCompleteLevel;
    // enemiesStore.refresh();

    // this.startTimer();
  }

  private isHeroDied() {
    return this.hero.health < 1;
  }

  private isLevelEnded() {
    if (!this.enemiesData) return;

    const isEnemiesStoreEmpty = this.enemiesStore.enemies.length === 0;
    const isNewEnemyAbsent =
      this.enemiesData[this.enemiesData.length - 1].showTime < this.timer;
    const isStageGame = this.levelStage === ELevelStage.game;

    return isEnemiesStoreEmpty && isNewEnemyAbsent && isStageGame;
  }

  private tick() {
    this.timer++;

    // add enemies if required
    if (this.enemiesData?.length) {
      const requiredToCreate = this.enemiesData.find(
        (enemyData) => this.timer === enemyData.showTime
      );
      requiredToCreate?.cardsId.forEach((enemyIndex) =>
        enemiesStore.addEnemyByIndex(enemyIndex)
      );
    }

    if (this.isLevelEnded()) {
      this.nextLevelStage();
    }

    if (this.isHeroDied()) {
      this.stopTimer();

      this.hero.resetHero();
      // next line is wrong. Enemies are not removed from scene, they are continuating to damaging the hero
      this.enemiesStore.killAllEnemies();

      this.resetTimer();
      this.levelStage = ELevelStage.heroDied;
    }
  }

  private startTimer() {
    const timer = () => {
      this.timerId = setInterval(this.tick.bind(this), 1000);
    };
    return timer();
  }

  private resetTimer() {
    this.timer = 0;
  }

  private stopTimer() {
    clearInterval(this.timerId);
  }
}

const levelStore = new LevelStore({
  id: generator.generateId(),

  onCompleteLevel: () => {
    alert("level finished stub");
  },

  onFailLevel: () => {
    alert("level failed stub");
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
  failText?: string;
  failImg?: string;
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
