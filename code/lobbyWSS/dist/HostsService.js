"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostsService = void 0;
const Host_1 = require("./Models/Host");
class HostsService {
    constructor() {
        /**
         * The key is a hosts port from 5500 to 6000
         */
        this.hosts = {};
        this.minPort = 5500;
        this.maxPort = 6000;
    }
    addPlayerToHostByPort(port, playerInfo) {
        const oldHost = this.getHostByPort(Number(port));
        if (!oldHost) {
            throw new Error('Host is undefined');
        }
        oldHost === null || oldHost === void 0 ? void 0 : oldHost.players.push(playerInfo);
        this.updateHostById(oldHost);
    }
    getAllHosts() {
        return Object.values(this.hosts);
    }
    getHostById(hostId) {
        return Object.values(this.hosts).find(host => host.hostId === hostId);
    }
    getHostByPort(port) {
        return this.hosts[port];
    }
    createHost(hostParameters) {
        const newHost = new Host_1.Host(hostParameters);
        const freePort = this.getFreePort();
        if (!freePort) {
            throw new Error('all ports is using');
        }
        this.hosts[freePort] = newHost;
        return { host: newHost, port: freePort };
    }
    updateHostById(hostParameters) {
        const port = this.getPortByHostId(hostParameters.hostId);
        if (!port) {
            throw new Error('host id is undefined');
        }
        this.hosts[port] = hostParameters;
        return hostParameters;
    }
    removeHostByPort(port) {
        delete this.hosts[port];
    }
    removeHostById(hostId) {
        const port = this.getPortByHostId(hostId);
        if (!port) {
            throw new Error('host id is undefined');
        }
        delete this.hosts[port];
    }
    getFreePort() {
        for (let i = this.minPort; i <= this.maxPort; i++) {
            if (!this.hosts[i]) {
                return i;
            }
        }
        return undefined;
    }
    getPortByHostId(hostId) {
        var _a;
        const [port] = (_a = Object.entries(this.hosts).find(([port, host]) => host.hostId === hostId)) !== null && _a !== void 0 ? _a : [];
        return Number(port);
    }
}
exports.HostsService = HostsService;
