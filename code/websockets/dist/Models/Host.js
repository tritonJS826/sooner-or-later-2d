"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Host = void 0;
const uuid_1 = require("uuid");
class Host {
    constructor(hostParameters) {
        this.id = uuid_1.v4();
        this.hostName = hostParameters.hostName;
        this.world = hostParameters.worldId;
        this.difficulty = hostParameters.difficulty;
        this.maxPlayers = hostParameters.maxPlayers;
        this.level = hostParameters.level;
    }
}
exports.Host = Host;
