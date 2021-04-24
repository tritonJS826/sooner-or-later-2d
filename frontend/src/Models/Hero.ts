import { action, observable, makeObservable } from "mobx";
import SimpleEnemy from "./SimpleEnemy";

export class Hero {
  id: string;
  health: number;
  attackPhrase = '';
  targetId: null | string;
  coords: [number, number];
  name: string
  
  constructor({ id, health = 100 }: IHeroSeed) {
    this.id = id;
    this.health = health;
    this.targetId = null;
    this.attackPhrase = '';
    this.coords = [Math.random(), 1];
    this.name = 'triton'; 
    makeObservable(this, {
      health: observable,
      targetId: observable,
      attackPhrase: observable,
      coords: observable,
      name: observable,

      resetHero: action,
      regenerate: action,
      setAttackPhrase: action,
      setTarget: action,
      shoot: action,
    });
  }

  @action.bound
  resetHero() {
    this.health = 150;
    this.attackPhrase = '';
    this.targetId = null;
  }

  @action.bound
  regenerate(amount: number) {
    this.health += amount;
  }

  @action.bound
  setAttackPhrase(attackPhrase: string) {
    this.attackPhrase = attackPhrase;
  }

  @action.bound
  setTarget(targetId: string | null) {
    this.targetId = targetId;
  }

  @action.bound
  public shoot(target: SimpleEnemy | undefined) {
    target?.getDamage(100, this.attackPhrase);
  }
}

interface IHeroSeed {
  id: string;
  health?: number;
  attackPhrase?: string;
  coords?: [number, number];
}
