import { GameStatus } from "Models/GameStatus";

export default class Level {
  /**
   * Game status
   */
  gameStatus: GameStatus;

  /**
   * Number from 1 to 100. 1 = easy, 100 = hard,
   */
  difficulty: string;

  /**
   * World of the game
   */
  world: string;

  /**
   * Current level
   */
  currentLevelId: string;

  constructor(level: Level) {
    this.difficulty = level.difficulty;
    this.world = level.world;
    this.currentLevelId = level.currentLevelId;
    this.gameStatus = level.gameStatus;
  }
}
