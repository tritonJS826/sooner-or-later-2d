import { observable, makeObservable } from 'mobx';

/**
 * Hero
 */
export default class AllyHero {
  /**
   * Id
   */
  @observable
  id: string;

  /**
   * Health (from 0 to 100)
   */
  @observable
  health: number;

  /**
   * Target enemy id
   */
  @observable
  targetId: string;

  /**
   * Hero name
   */
  @observable
  name: string;

  /**
   * Hero coordinates
   */
  @observable
  coords: [number, number];

  constructor(params: AllyHero) {
    this.id = params.id;
    this.health = params.health;
    this.targetId = params.targetId;
    this.name = params.name;
    this.coords = params.coords;
    makeObservable(this);
  }
}
