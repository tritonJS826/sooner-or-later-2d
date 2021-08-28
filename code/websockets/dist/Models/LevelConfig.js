"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Level {
    constructor(level) {
        this.difficulty = level.difficulty;
        this.world = level.world;
        this.currentLevelId = level.currentLevelId;
        this.gameStatus = level.gameStatus;
    }
}
exports.default = Level;
