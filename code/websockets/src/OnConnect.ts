import { HostsService } from './HostsService';
import { IncomingMessage } from 'http';
import wsServer from './index';

const hostSore = new HostsService();
let gamersWatch = 0;

interface HostsServiceResponse {
  gamersWatch: number;
}

const onConnect = (wsClient: any) => {
  gamersWatch++;
  console.log('New user:', gamersWatch);

  // action on each connection
  wsServer.clients.forEach((client) => {
    client.send(JSON.stringify({gamersWatch} as HostsServiceResponse));
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

    wsServer.clients.forEach((client) => {
      client.send(JSON.stringify({gamersWatch} as HostsServiceResponse));
    });
  });
};

export default onConnect;
