import {worlds} from '../data/worlds';

export const world = {
  worlds: () => worlds,
  world: (id: string) => worlds.find((world) => id === world.id),
};