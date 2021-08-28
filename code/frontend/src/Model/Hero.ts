import { observable, makeObservable } from 'mobx';

/**
 * Hero
 */
export default class Hero {
    /**
     * Id
     */
    @observable
    id: string;

    /**
     * Hero health (from 0 to 100)
     */
    @observable
    health: number;

    /**
     * Hero target id
     */
    @observable
    targetId: string;

    /**
     * Heroes name
     */
    @observable
    name: string;

    /**
     * Heroes coordinates
     */
    @observable
    coords: [number, number];

    constructor(params: Hero) {
      this.id = params.id;
      this.health = params.health;
      this.targetId = params.targetId;
      this.name = params.name;
      this.coords = params.coords;

      makeObservable(this);
    }
}
