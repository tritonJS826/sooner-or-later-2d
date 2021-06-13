import { body } from 'express-validator';
import express from 'express';
import CommonRoutesConfig from '../common/common.routes.config';
import UsersController from './controllers/users.controller';
import UsersMiddleware from './middleware/users.middleware';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';

export default class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/users`)
      .get(UsersController.listUsers)
      .post(
        body('email').isEmail(),
        body('password')
          .isLength({ min: 5 })
          .withMessage('Must include password (5+ characters)'),
        BodyValidationMiddleware.verifyBodyFieldsErrors,
        UsersMiddleware.validateSameEmailDoesntExist,
        UsersController.createUser
      );

    return this.app;
  }
}
