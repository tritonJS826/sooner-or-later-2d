import { action, makeObservable, observable } from "mobx";
import SimpleEnemy from "../Models/SimpleEnemy";
import idGenerator from "../Service/IdGenerator";
import CardsService from "../Service/data/CardsService";

export class EnemiesStore {
  @observable enemies: SimpleEnemy[];

  constructor() {
    this.enemies = [];
    makeObservable(this, {
      enemies: observable,

      setEnemies: action,
      killAllEnemies: action,
      killEnemy: action,
      addEnemyByIndex: action,
      getEnemyIndexById: action,
      getEnemyById: action,
    });
  }

  @action.bound
  setEnemies(cards: SimpleEnemy[]) {
    this.enemies = cards.map((enemyData) => {
      const id = idGenerator.generateId();

      return new SimpleEnemy({
        ...enemyData,
        id,
        coords: [Math.random(), 0],
        killMyself: () => this.killEnemy(id),
      });
    });
  }

  @action.bound
  killEnemy(enemyId: string) {
    this.enemies = this.enemies.filter(
      (enemy: SimpleEnemy) => enemy.id !== enemyId
    );
  }

  // addRandomSimpleEnemy() {
  //   const cards = CardsService.getCards();
  //   const EnemyNumber = Math.floor(Math.random() * 3);
  //   const newEnemy = () => {
  //     const id = idGenerator.generateId();

  //     return new SimpleEnemy({
  //       ...cards[EnemyNumber],
  //       id,
  //       coords: [Math.random(), 0],
  //       killMyself: () => this.killEnemy(id),
  //     });
  //   };

  //   this.enemies.push(newEnemy());
  // }

  @action.bound
  addEnemyByIndex(enemyIndex: number) {
    const enemyData = CardsService.getCards()[enemyIndex];

    if (!enemyData) return alert("Error! Index of enemy in unavailable");

    const id = idGenerator.generateId();

    const enemy = new SimpleEnemy({
      ...enemyData,
      id,
      coords: [Math.random(), 0],
      killMyself: () => this.killEnemy(id),
    });

    this.enemies.push(enemy);
  }

  @action.bound
  killAllEnemies() {
    this.enemies.forEach((enemy) => enemy.killMyself());
  }

  @action.bound
  getEnemyIndexById(id: string | null) {
    if (id === null) return;
    return this.enemies.findIndex((enemy: SimpleEnemy) => enemy.id === id);
  }

  @action.bound
  getEnemyById(id: string | null) {
    if (id === null) return;
    return this.enemies.find((enemy: SimpleEnemy) => enemy.id === id);
  }
}

const enemiesStore = new EnemiesStore();

export default enemiesStore;
