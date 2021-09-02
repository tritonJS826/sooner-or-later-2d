"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.world = void 0;
const worlds_json_1 = __importDefault(require("../data/worlds.json"));
exports.world = {
    worlds: () => worlds_json_1.default,
    world: (id) => worlds_json_1.default.find((world) => id === world.id),
};
//# sourceMappingURL=world.js.map