import { createServer } from "http";
import { Server, Socket as SocketType } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {});

io.on('connection', (socket: SocketType) => {
    console.log('!connected')
    socket.emit('init', {data: 'hello!'})
});

const port=6001;

httpServer.listen(port);
console.log(`GWSS running on port ${port}`);
