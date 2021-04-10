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
      killEnemy: action,
      setEnemies: action,
    })
  }
  
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


  killEnemy(enemyId: string) {
    this.enemies = this.enemies.filter((enemy: SimpleEnemy) => enemy.id !== enemyId);
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

  addEnemyByIndex(enemyIndex: number) {
    const enemyData = CardsService.getCards()[enemyIndex];

    if (!enemyData) return alert('Error! Index of enemy in unavailable');

    const enemy = new SimpleEnemy({ ...enemyData, coords: [Math.random(), 0], killMyself: () => this.killEnemy(enemyData.id) });
    this.enemies.push(enemy)
  }

  getEnemyIndexById(id: string | null) {
    if (id === null) return;
    return this.enemies.findIndex((enemy: SimpleEnemy) => enemy.id === id);
  }

  getEnemyById(id: string | null) {
    if (id === null) return;
    return this.enemies.find((enemy: SimpleEnemy) => enemy.id === id);
  }
}

const enemiesStore = new EnemiesStore();

export default enemiesStore;
