import { body } from 'express-validator';
import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import { hostsController } from './controllers/hosts.controller';
import { hostsMiddleware } from './middleware/hosts.middleware';
import { bodyValidationMiddleware } from '../common/middleware/body.validation.middleware';

export class HostsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'HostsRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/hosts`)
      .get(hostsController.listHosts)
      .post(
        body('hostname')
          .isLength({ min: 3 }),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        hostsMiddleware.validateSameHostNameDoesntExist,
        hostsController.createHost
      );

    return this.app;
  }
}
