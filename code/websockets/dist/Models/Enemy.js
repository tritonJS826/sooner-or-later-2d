"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("uuid"));
class Enemy {
    constructor(enemy) {
        this.id = uuid_1.default.v4();
        this.targetHeroId = enemy.targetHeroId;
        this.coords = enemy.coords;
        this.cardId = enemy.cardId;
        this.health = enemy.health;
    }
}
exports.default = Enemy;
