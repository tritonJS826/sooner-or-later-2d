import { createServer } from "http";
import { Server, Socket as SocketType } from "socket.io";
import HandleClient from './Client';

const port=6001;
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {    
        origin: `*`,
        methods: ["GET", "POST"],
    },
});

io.on('connection', (client: SocketType) => {
    client.emit('init', {data: 'hello!'});

    client.on('update-players', () => HandleClient.handleClientJoin(client)); // join
    client.on('client-ready-to-next-stage', () => HandleClient.handleClientReadyToNextStage(client));
    client.on('client-not-ready-to-next-stage', () => HandleClient.handleClientNotReadyToNextStage(client));
    // client.on('choose-target', HandleClient.handleChooseTarget);
    // client.on('shoot', HandleClient.handleShoot);
});


httpServer.listen(port);
console.log(`GWSS running on port ${port}`);
