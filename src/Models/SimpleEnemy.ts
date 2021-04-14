import { action, makeObservable, observable, runInAction } from "mobx";
import { Hero } from "../Store/Hero";

export default class SimpleEnemy {
  id: string;
  frontSide: string;
  backSide: string;
  health: number;
  speed: number;
  damage: number;
  coords: [x: number, y: number];
  killMyself: () => void;
  constructor({
    id,
    frontSide = "",
    backSide = "",
    health = 100,
    speed,
    damage = 100,
    coords = [0, 0],
    killMyself,
  }: ISimpleEnemySeed) {
    this.id = id;
    this.frontSide = frontSide;
    this.backSide = backSide;
    this.health = health;
    this.speed = (Math.random() + 0.1) * 0.001;
    this.damage = damage;
    this.coords = coords;
    this.killMyself = killMyself;
    makeObservable(this, {
      coords: observable,
      health: observable,
      speed: observable,
      // damage: observable,
      doSomething: action,
      getDamage: action,
      killMyself: action,
    });
  }

  @action
  public doSomething(hero: Hero) {
    setTimeout(() => {
      requestAnimationFrame(() => {
        const distanceYToHero = Math.abs(this.coords[1] - hero.coords[1]);

        if (distanceYToHero < 0.01) {
          runInAction(() => this.fight(hero));
        } else {
          runInAction(() => this.go(hero.coords));
        }
        this.doSomething(hero);
      });

      // fps = 16 => every 60 seconds update
    }, 50);
  }

  private go([x, y]: [number, number]) {
    const angleInDirectionToHero = Math.atan((x - this.coords[0]) / (y - this.coords[1]));

    const deltaX = this.speed * Math.sin(angleInDirectionToHero);
    const deltaY = this.speed * Math.cos(angleInDirectionToHero);

    const newX = this.coords[0] + deltaX;
    const newY = this.coords[1] + deltaY;

    this.coords = [newX, newY];
  }

  private fight(target: Hero) {
    target.health -= 1;
  }

  public getDamage(damage: number, phrase: string) {
    alert('ohhhh');
    if (phrase === this.backSide) {
      this.health -= damage;
    }
    
    if (this.health < 1) {
      this.killMyself();
      this.speed = 0;
      this.damage = 0;
      alert(`${this.frontSide} is dead`)
    }
  }
}

interface ISimpleEnemySeed {
  id: string;
  frontSide?: string;
  backSide?: string;
  health?: number;
  speed?: number;
  damage?: number;
  coords?: [x: number, y: number];
  killMyself: () => void;
}
