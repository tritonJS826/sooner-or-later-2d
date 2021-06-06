import WebSocket from 'ws';
import onConnect from './OnConnect';

const wsServer = new WebSocket.Server({ port: 9000 });

wsServer.on('connection', onConnect);

export default wsServer;
