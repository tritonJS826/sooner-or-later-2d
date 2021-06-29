import express from 'express';
import { hostService } from '../services/hosts.service';

class HostsMiddleware {
  async validateSameHostNameDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const host = await hostService.getHostByHostName(req.body.hostname);
    if (host) {
      res.status(400).send({ errors: ['Hostname already exists'] });
    } else {
      next();
    }
  }

  async validateSameHostNameBelongToSameHost(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (res.locals.host._id === req.params.hostId) {
      next();
    } else {
      res.status(400).send({ errors: ['Invalid hostname'] });
    }
  }

  validatePatchHostName = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (req.body.hostname) {
      await this.validateSameHostNameBelongToSameHost(req, res, next);
    } else {
      next();
    }
  };

  async validateHostExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const host = await hostService.readById(req.params.hostId);
    if (host) {
      res.locals.host = host;
      next();
    } else {
      res.status(404).send({
        errors: [`Host ${req.params.hostId} not found`],
      });
    }
  }

  async extractHostId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    req.body.id = req.params.hostId;
    next();
  }
}

export const hostsMiddleware = new HostsMiddleware();
