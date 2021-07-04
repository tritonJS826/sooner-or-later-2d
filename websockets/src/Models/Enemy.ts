import uuid from 'uuid';

export default class Enemy {
    /**
     * Enemy id
     */
    id: string;

    /**
     * Enemy goes to target Hero Id
     */
    targetHeroId: string;

    /**
     * Enemy coords
     */
    coords: [number, number];

    /**
     * Enemy card id
     */
    cardId: string;

    /**
     * Enemy health
     */
    health: number;

    constructor(enemy: Enemy) {
        this.id = uuid.v4();
        this.targetHeroId = enemy.targetHeroId;
        this.coords = enemy.coords;
        this.cardId = enemy.cardId;
        this.health = enemy.health;
    }
}