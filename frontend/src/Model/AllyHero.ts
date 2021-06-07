import { action, observable, makeObservable } from "mobx"

interface IAllyHero {
    id: string;
    health: number;
    targetId: string;
    name: string;
    coords: [number, number];
    dataLoader: boolean;
    isOnPause: boolean;
}
export class AllyHero {
    id: string;
    health: number;
    targetId: string;
    name: string;
    coords: [number, number];
    dataLoader: boolean;
    isOnPause: boolean;

    constructor({ id, health, targetId, name, coords, dataLoader, isOnPause }: IAllyHero) {
        this.id = id;
        this.health = health;
        this.targetId = targetId;
        this.name = name;
        this.coords = coords;
        this.dataLoader = dataLoader;
        this.isOnPause = isOnPause;

        makeObservable(this, {
            health: observable,
            targetId: observable,
            name: observable,
            coords: observable,
            dataLoader: observable,
            isOnPause: observable,
        });
    }
}


