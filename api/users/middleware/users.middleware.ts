import express from 'express';
import { usersService } from '../services/users.service';

class UsersMiddleware {
  async validateSameEmailDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = await usersService.getUserByEmail(req.body.email);
    if (user) {
      res.status(400).send({ errors: ['User email already exists'] });
    } else {
      next();
    }
  }

  async validateSameEmailBelongToSameUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (res.locals.user._id === req.params.userId) {
      next();
    } else {
      res.status(400).send({ errors: ['Invalid email'] });
    }
  }

  validatePatchEmail = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (req.body.email) {
      this.validateSameEmailBelongToSameUser(req, res, next);
    } else {
      next();
    }
  };

  async validateUserExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = await usersService.readById(req.params.userId);
    if (user) {
      res.locals.user = user;
      next();
    } else {
      res.status(404).send({
        errors: [`User ${req.params.userId} not found`],
      });
    }
  }

  async extractUserId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    req.body.id = req.params.userId;
    next();
  }
}

export const usersMiddleware = new UsersMiddleware();
