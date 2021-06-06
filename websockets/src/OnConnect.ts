import { IncomingMessage } from 'http';
import wsServer from './index';

const onConnect = (wsClient: any) => {
  console.log('New user');

  // message on first connection
  wsClient.send(JSON.stringify('Connected'));

  // handle messages
  wsClient.on('message', (message: IncomingMessage) => {
    console.log({ message });

    wsServer.clients.forEach((client: any) => {
      client.send(message);
    });
  });

  // handle close connection
  wsClient.on('close', () => {
    const message = JSON.stringify({ info: 'User disconnected' });

    console.log(message);

    wsServer.clients.forEach((client: any) => {
      client.send(message);
    });
  });
};

export default onConnect;
