"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostService = void 0;
const ws_1 = __importDefault(require("ws"));
const OnConnect_1 = __importDefault(require("./OnConnect"));
const express_1 = __importDefault(require("express"));
const HostsService_1 = require("./HostsService");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default()); //deprecated
exports.hostService = new HostsService_1.HostsService();
const expressPort = 5499;
app.listen(expressPort, () => {
    console.log(`Example app listening at http://localhost:${expressPort}`);
});
app.post("/create-host", (req, res, next) => {
    const { host, port } = exports.hostService.createHost({
        hostName: req.body.hostName,
        worldId: req.body.worldId,
        maxPlayers: req.body.maxPlayers,
        levelId: req.body.levelId,
    });
    // its port for game and for pre game page
    res.status(200).send(JSON.stringify({ host, port }));
});
app.delete("/host", (req, res, next) => {
    console.log('host deleted', req.body);
    exports.hostService.removeHostById(req.body.hostId);
});
const port = 5002;
const wsServer = new ws_1.default.Server({ port });
console.log(`LWSS running on port${port}`);
wsServer.on("connection", OnConnect_1.default);
exports.default = wsServer;
