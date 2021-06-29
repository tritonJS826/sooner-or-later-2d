import { body } from 'express-validator';
import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import { usersController } from './controllers/users.controller';
import { usersMiddleware } from './middleware/users.middleware';
import { bodyValidationMiddleware } from '../common/middleware/body.validation.middleware';

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/users`)
      .get(usersController.listUsers)
      .post(
        body('email').isEmail(),
        body('password')
          .isLength({ min: 5 })
          .withMessage('Must include password (5+ characters)'),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        usersMiddleware.validateSameEmailDoesntExist,
        usersController.createUser
      );

    return this.app;
  }
}
