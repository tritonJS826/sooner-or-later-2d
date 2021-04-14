import { action, observable, makeObservable } from "mobx";
import SimpleEnemy from "../Models/SimpleEnemy";
import generator from "../Service/IdGenerator";

export class Hero {
  id: string;
  health = 100;
  attackPhrase = '';
  targetId: null | string;
  coords: [number, number];
  name: string
  
  constructor({ id, health = 100 }: IHeroSeed) {
    this.id = id;
    this.health = health;
    this.targetId = null;
    this.attackPhrase = '';
    this.coords = [0.5, 1];
    this.name = 'triton'; 
    makeObservable(this, {
      health: observable,
      attackPhrase: observable,
      targetId: observable,
      coords: observable,
      name: observable,
      setAttackPhrase: action,
      setTarget: action,
      shoot: action,
    });
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

export const heroStore = new Hero({ id: generator.generateId() });

export default heroStore;
