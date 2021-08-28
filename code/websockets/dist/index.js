"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const OnConnect_1 = __importDefault(require("./OnConnect"));
const express_1 = __importDefault(require("express"));
const HostsService_1 = require("./HostsService");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default());
const hostService = new HostsService_1.HostsService();
const expressPort = 5499;
app.listen(expressPort, () => {
    console.log(`Example app listening at http://localhost:${expressPort}`);
});
app.post("/create-host", (req, res, next) => {
    console.log(req.body);
    const { host, port } = hostService.createHost({
        hostName: req.body.hostName,
        worldId: req.body.worldId,
        difficulty: req.body.difficulty,
        maxPlayers: req.body.maxPlayers,
        level: req.body.level,
    });
    // its port for game and for pre game page
    res.status(200).send(JSON.stringify({ host, port }));
});
const wsServer = new ws_1.default.Server({ port: 5002 });
console.log("Server running on port 5002");
wsServer.on("connection", OnConnect_1.default);
exports.default = wsServer;
