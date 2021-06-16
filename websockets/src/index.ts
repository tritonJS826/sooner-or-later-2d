import WebSocket from 'ws';
import onConnect from './OnConnect';

const wsServer = new WebSocket.Server({ port: 5002 });

console.log('Server running on port 5002')

wsServer.on('connection', onConnect);

export default wsServer;
