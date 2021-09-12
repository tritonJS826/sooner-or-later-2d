export interface CreateHostProperties {
    hostName: string;
    maxPlayers: number;
    currentWorldId: string;
    currentLevelId: string;
}

export interface CreateHostResponse {
    host: {
      hostName: string;
      maxPlayers: number;
      worldId: string;
      levelId: string;
    };
    port: number;
  }

class HostsService {
  constructor() {}

  async createHost(CreateHostProperties: CreateHostProperties) {
    const responseRaw = await fetch('http://localhost:5499/create-host', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hostName: CreateHostProperties.hostName,
        maxPlayers: CreateHostProperties.maxPlayers,
        worldId: CreateHostProperties.currentWorldId,
        levelId: CreateHostProperties.currentLevelId,
      }),
    });

    const response: CreateHostResponse = await responseRaw.json();
    return response;
  }

  async removeGame(hostId: string): Promise<void> {
    await fetch('http://localhost:5499/host', {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hostId,
      }),
    });
  }
}

export default HostsService;
