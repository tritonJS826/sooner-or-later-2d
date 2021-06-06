//интерфейс для врага
export interface Enemies {
    id: string;
    targetHeroId: string;
    coords: [number, number];
    cardId: string;
}

