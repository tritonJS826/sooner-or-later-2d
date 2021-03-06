import { createServer } from "http";
import { Server, Socket as SocketType } from "socket.io";
import HandleClient from './HandleClient';

const port=6001;
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {    
        origin: `*`,
        methods: ["GET", "POST"],
    },
});

io.on('connection', (client: SocketType) => {
    client.on('room/create', (args) => HandleClient.handleCreateRoom(client, args));
    client.on('player/join-room', (args) => HandleClient.handleClientJoin(client, args)); 
    client.on('player/exit', () => HandleClient.handleRemoveClient(client));
    client.on('stage/status/ready', () => HandleClient.handleClientReadyToNextStage(client));
    client.on('stage/status/not-ready', () => HandleClient.handleClientNotReadyToNextStage(client));
    // client.on('choose-target', HandleClient.handleChooseTarget);
    // client.on('shoot', HandleClient.handleShoot);
    

    // server emit methods
    // players/update
    // stage/next
    // stage/fail 
});


httpServer.listen(port);
console.log(`GWSS running on port ${port}`);
