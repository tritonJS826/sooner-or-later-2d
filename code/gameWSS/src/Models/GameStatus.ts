export enum GameStatus {
  PRE_GAME = "PRE_GAME",
  LEVEL_INTRO = "LEVEL_INTRO",
  GAME = "GAME",
  LEVEL_FAILED = "LEVEL_FAILED",
  LEVEL_PASSED = "LEVEL_PASSED",
}

export const gameStatuses = [
  GameStatus.PRE_GAME,
  GameStatus.LEVEL_INTRO,
  GameStatus.GAME,
  GameStatus.LEVEL_FAILED,
  GameStatus.LEVEL_PASSED,
];
