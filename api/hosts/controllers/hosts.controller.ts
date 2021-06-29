import express from 'express';
import debug from 'debug';
import { hostService } from '../services/hosts.service';

const log: debug.IDebugger = debug('app:hosts-controller');

class HostsController {
  async listHosts(req: express.Request, res: express.Response) {
    const hosts = await hostService.list(100, 0);
    res.status(200).send(hosts);
  }

  async getHostById(req: express.Request, res: express.Response) {
    const host = await hostService.readById(req.body.id);
    res.status(200).send(host);
  }

  async createHost(req: express.Request, res: express.Response) {
    const hostId = await hostService.create(req.body);
    res.status(201).send({ id: hostId });
  }

  async patch(req: express.Request, res: express.Response) {
    log(await hostService.patchById(req.body.id, req.body));
    res.status(204).send();
  }

  async put(req: express.Request, res: express.Response) {
    log(await hostService.putById(req.body.id, req.body));
    res.status(204).send();
  }

  async removeHost(req: express.Request, res: express.Response) {
    log(await hostService.deleteById(req.body.id));
    res.status(204).send();
  }
}

export const hostsController = new HostsController();
