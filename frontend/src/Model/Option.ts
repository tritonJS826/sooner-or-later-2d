import { observable, makeObservable } from 'mobx';

/**
 * Options
 */
export default class Option {
    /**
     * Sound volume (from 0 to 100)
     */
    @observable
    soundVolume = 100;

    constructor() {
      makeObservable(this);
    }
}
