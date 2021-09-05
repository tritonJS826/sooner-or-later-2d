"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HostsService_1 = require("./HostsService");
const index_1 = __importDefault(require("./index"));
const hostSore = new HostsService_1.HostsService();
let gamersWatch = 0;
const onConnect = (wsClient) => {
    gamersWatch++;
    console.log('New user:', gamersWatch);
    // action on each connection
    index_1.default.clients.forEach((client) => {
        client.send(JSON.stringify({ gamersWatch }));
    });
    // handle messages
    // wsClient.on('message', (message: IncomingMessage) => {
    //   console.log({ message });
    //   wsServer.clients.forEach((client) => {
    //     client.send(message);
    //   });
    // });
    // handle close connection
    wsClient.on('close', () => {
        gamersWatch--;
        console.log('Users left:', gamersWatch);
        index_1.default.clients.forEach((client) => {
            client.send(JSON.stringify({ gamersWatch }));
        });
    });
};
exports.default = onConnect;
