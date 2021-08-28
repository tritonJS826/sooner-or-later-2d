import { observable, makeObservable } from 'mobx';

/**
 * Enemy
 */
export default class Enemy {
    /**
     * Id
     */
    @observable
    id: string;

    /**
     * Target hero id
     */
    @observable
    targetHeroId: string;

    /**
     * Enemies coordinates
     */
    @observable
    coords: [number, number];

    /**
     * Enemies card id
     */
    @observable
    cardId: string;

    constructor(params: Enemy) {
      this.id = params.id;
      this.targetHeroId = params.targetHeroId;
      this.coords = params.coords;
      this.cardId = params.cardId;

      makeObservable(this);
    }
}
