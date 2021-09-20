export class Player {
  id: string;

  name: string;

  status: PlayerStatus;
  constructor(player: RawPlayer) {
    this.id = player.id;
    this.name = player.name;
    this.status = player.status;
  }
}

export interface RawPlayer {
  id: string;
  name: string;
  status: PlayerStatus;
}

export enum PlayerStatus {
  "READY" = "READY",
  "NOT_READY" = "NOT_READY",
}
