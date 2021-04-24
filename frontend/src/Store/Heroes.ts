import { action, makeObservable, observable } from "mobx";
import { Hero } from "../Models/Hero";
import generator from "../Service/IdGenerator";

export class Heroes {
  @observable heroes: Hero[];

  constructor(heroes: Hero[]) {
    this.heroes = heroes;
    makeObservable(this, {
      heroes: observable,
      // setHeroes: action,
      killHero: action,
    });
  }

  // @action.bound
  // setHeroes(protoHeroesData: any) {
  //   const hero1 = new Hero({ id: generator.generateId() });
  //   const hero2 = new Hero({ id: generator.generateId() });

  //   this.heroes = [hero1, hero2];
  // }

  @action.bound
  killHero(heroId: string) {
    this.heroes = this.heroes.filter((hero: Hero) => hero.id !== heroId);
  }

  @action.bound
  killAllHeroes() {
    this.heroes = [];
    alert("kill all heroes");
  }

  @action.bound
  resetAllHeroes() {
    this.heroes.forEach((hero) => (hero.resetHero()));
  }

  @action.bound
  getHeroById(id: string | null) {
    if (id === null) return;
    return this.heroes.find((hero: Hero) => hero.id === id);
  }
}

const hero1 = new Hero({ id: generator.generateId(), health: 0 });
const hero2 = new Hero({ id: generator.generateId(), health: 0 });

const enemiesStore = new Heroes([hero1, hero2]);

export default enemiesStore;
