import { Player } from 'Logic/Game/Player/PreGamePage/PreGameStore';

export interface LobbyHandlers {
    onOpen: () => void;

    onMessage: (message: any) => void;
}

class Lobby {
    ws: WebSocket;

    constructor(lobbyHandlers: LobbyHandlers) {
      this.ws = new WebSocket('ws://localhost:5002');

      this.ws.onopen = lobbyHandlers.onOpen;
      this.ws.onmessage = lobbyHandlers.onMessage;
    }

    disconnect() {
      this.ws.close();
    }

    // connectToHost(port: string, playerInfo: Player) {
    //   setTimeout(() => {
    //     this.ws.send(JSON.stringify({ type: 'connectToHost', port, playerInfo }));
    //   }, 300); // sometimes we need to wait before websocket get connection
    // }
}

export default Lobby;
