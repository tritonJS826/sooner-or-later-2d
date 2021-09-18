import { HostsService } from './HostsService';
import { IncomingMessage } from 'http';
import wsServer from './index';
import { hostService } from './index';
import { Host } from './Models/Host';
import { Player } from './Models/Player';

// const hostSore = new HostsService();
let gamersWatch = 0;

interface HostsServiceResponse {
  gamersWatch: number;
  hosts: {[key: number]: Host};
}

const onConnect = (wsClient: any) => {
  gamersWatch++;
  console.log('New user:', gamersWatch);

  // action on each connection
  wsServer.clients.forEach((client) => {
    client.send(JSON.stringify({
      gamersWatch,
      hosts: hostService.hosts,
    } as HostsServiceResponse));
  });

  // handle messages
  wsClient.on('message', (messageRaw: string) => {
    console.log('message');
    const message = JSON.parse(messageRaw); 
    if (message.type === 'connectToHost') {
      // change hosts array and notify all clients
      const {port, playerInfo} = message;

      console.log(port)
      hostService.addPlayerToHostByPort(port, playerInfo);
      console.log(hostService.hosts);
    }

    wsServer.clients.forEach((client) => {
      client.send(JSON.stringify({
        gamersWatch,
        hosts: hostService.hosts,
      } as HostsServiceResponse));
    });
  });

  // handle close connection
  wsClient.on('close', () => {
    gamersWatch--;

    console.log('Users left:', gamersWatch);

    wsServer.clients.forEach((client) => {
      // client would be broken if sen messsage ()
      client.send(JSON.stringify({action: 'close' ,gamersWatch, hosts: hostService.hosts} as HostsServiceResponse));
    });
  });
};

export default onConnect;
