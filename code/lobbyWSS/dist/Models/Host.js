"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Host = void 0;
const uuid_1 = require("uuid");
class Host {
    constructor(hostParameters) {
        this.hostId = uuid_1.v4();
        this.hostName = hostParameters.hostName;
        this.world = hostParameters.worldId;
        this.maxPlayers = hostParameters.maxPlayers;
        this.level = hostParameters.levelId;
        this.players = [];
    }
}
exports.Host = Host;
