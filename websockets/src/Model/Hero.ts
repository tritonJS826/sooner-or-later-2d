import uuid from 'uuid';

export default class Hero {
    /**
     * Hero Id
     */
    id: string;

    /**
     * Target which hero focused 
     */
    targetEnemyId: string;

    /**
     * Hero name
     */
    name: string;

    /**
     * Hero coords
     */
    coords: [number, number];
    
    /**
     * Hero health
     */
    health: number;

    constructor(hero: Hero) {
        this.id = uuid.v4();
        this.targetEnemyId = hero.targetEnemyId;
        this.coords = hero.coords;
        this.name = hero.name;
        this.health = hero.health;
    }


}