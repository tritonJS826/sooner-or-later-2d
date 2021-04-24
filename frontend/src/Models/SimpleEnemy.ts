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
  private enemyTimerId: any;
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
    this.speed = (Math.random() + 0.1) * 0.01;
    this.damage = damage;
    this.coords = coords;

    this.killMyself = () => { 
      // remove personal timer
      this.stopDoAnything();
      // remove from enemy store
      killMyself();
    };

    makeObservable(this, {
      coords: observable,
      health: observable,
      speed: observable,
      damage: observable,

      startDoSomething: action,
      getDamage: action,
      killMyself: action,
    });
  }



  @action
  public startDoSomething(hero: Hero) {
    this.enemyTimerId = setTimeout(() => {
      requestAnimationFrame(() => {
        const distanceYToHero = Math.abs(this.coords[1] - hero.coords[1]);

        if (distanceYToHero < 0.01) {
          runInAction(() => this.fight(hero));
        } else {
          runInAction(() => this.go(hero.coords));
        }
      });
      
      this.startDoSomething(hero);
      // fps = 16 => every 60 msec update
    }, 50);
  }

  @action
  private stopDoAnything() {
    clearInterval(this.enemyTimerId);
  }

  private go([x, y]: [number, number]) {
    const angleInDirectionToHero = Math.atan((x - this.coords[0]) / (y - this.coords[1]));

    const deltaX = this.speed * Math.sin(angleInDirectionToHero);
    const deltaY = this.speed * Math.cos(angleInDirectionToHero);

    const newX = this.coords[0] + deltaX;
    const newY = this.coords[1] + deltaY;

    this.coords = [newX, newY];
    console.log(this.coords)
  }

  private fight(target: Hero) {
    target.health -= 0.5;
  }

  public getDamage(damage: number, phrase: string) {
    if (phrase === this.backSide) {
      this.health -= damage;
    }
    
    if (this.health < 1) {
      this.killMyself();
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
