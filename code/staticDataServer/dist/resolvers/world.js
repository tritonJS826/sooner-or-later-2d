"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.world = void 0;
const worlds_1 = require("../data/worlds");
exports.world = {
    worlds: () => worlds_1.worlds,
    world: (id) => worlds_1.worlds.find((world) => id === world.id),
};
//# sourceMappingURL=world.js.map