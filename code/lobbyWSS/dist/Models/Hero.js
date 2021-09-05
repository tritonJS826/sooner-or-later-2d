"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("uuid"));
class Hero {
    constructor(hero) {
        this.id = uuid_1.default.v4();
        this.targetEnemyId = hero.targetEnemyId;
        this.coords = hero.coords;
        this.name = hero.name;
        this.health = hero.health;
    }
}
exports.default = Hero;
