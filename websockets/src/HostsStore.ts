import {Host, HostParameters} from 'Models/Host';



export class HostsStore {
    /**
     * The key is a hosts port from 5500 to 6000
     */
    hosts: {[key: number]: Host} = {};

    minPort = 5500;

    maxPort = 6000;

    constructor() {}

    
    getAllHosts(): Host[] {
        return Object.values(this.hosts);
    }
    
    getHostById(hostId: string): Host | undefined {
        return Object.values(this.hosts).find(host => host.id === hostId);
    }
    
    getHostByPort(port: number): Host | undefined {
        return this.hosts[port];
    }
    
    createHost(hostParameters: HostParameters): Host {
        const newHost = new Host(hostParameters);
        const freePort = this.getFreePort();
        if (!freePort) {
            throw new Error('all ports is using');
        }
        this.hosts[freePort] = newHost;
        return newHost;
    }
    
    updateHostById(hostParameters: Host): Host {
        const port = this.getPortByHostId(hostParameters.id);
        if (!port) {
            throw new Error('host id is undefined');
        }
        
        this.hosts[port] = hostParameters;
        return hostParameters;
    }
    
    removeHostByPort(port: number): void {
        delete this.hosts[port];
    }
    
    removeHostById(hostId: string): void {
        const port = this.getPortByHostId(hostId);
        if (!port) {
            throw new Error('host id is undefined');
        }
        delete this.hosts[port];
    }
    
    private getFreePort(): number | undefined {
        for (let i = this.minPort; i <= this.maxPort; i++) {
            if (!this.hosts[i]) {
                return i;
            } 
        }
    
        return undefined
    }
    
    private getPortByHostId(hostId: string): number | undefined {
        const [port] = Object.entries(this.hosts).find(([port, host]) => host.id === hostId) ?? [];
        return Number(port);
    }
}