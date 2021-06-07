import { action, observable, makeObservable } from "mobx"
interface IEnemies {
    id: string;
    targetHeroId: string;
    coords: [number, number];
    cardId: string;
}

export class Enemies {
    id: string;
    targetHeroId: string;
    coords: [number, number];
    cardId: string;

    constructor({ id, targetHeroId, coords, cardId }: IEnemies) {
        this.id = id;
        this.targetHeroId = targetHeroId;
        this.coords = coords;
        this.cardId = cardId;

        makeObservable(this, {
            targetHeroId: observable,
            coords: observable,
            cardId: observable,
        });
    }
}



