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
}

export default Lobby;
