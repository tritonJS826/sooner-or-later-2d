"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const index_2 = require("./index");
// const hostSore = new HostsService();
let gamersWatch = 0;
const onConnect = (wsClient) => {
    gamersWatch++;
    console.log('New user:', gamersWatch);
    // action on each connection
    index_1.default.clients.forEach((client) => {
        client.send(JSON.stringify({
            gamersWatch,
            hosts: index_2.hostService.hosts,
        }));
    });
    // handle messages
    wsClient.on('message', (messageRaw) => {
        console.log('message');
        const message = JSON.parse(messageRaw);
        if (message.type === 'connectToHost') {
            // change hosts array and notify all clients
            const { port, playerInfo } = message;
            console.log(port);
            index_2.hostService.addPlayerToHostByPort(port, playerInfo);
            console.log(index_2.hostService.hosts);
        }
        index_1.default.clients.forEach((client) => {
            client.send(JSON.stringify({
                gamersWatch,
                hosts: index_2.hostService.hosts,
            }));
        });
    });
    // handle close connection
    wsClient.on('close', () => {
        gamersWatch--;
        console.log('Users left:', gamersWatch);
        index_1.default.clients.forEach((client) => {
            // client would be broken if sen messsage ()
            client.send(JSON.stringify({ action: 'close', gamersWatch, hosts: index_2.hostService.hosts }));
        });
    });
};
exports.default = onConnect;
