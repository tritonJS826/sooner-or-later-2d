//интерфейс для персонажа
export interface Hero {
    id: string;
    health: number;
    targetId: string;
    name: string;
    coords: [number, number];
    dataLoader: boolean;
    isOnPause: boolean;
}

