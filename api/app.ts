import dotenv from 'dotenv';

import express from 'express';
import { Server, createServer } from 'http';
import { transports, format } from 'winston';
import { LoggerOptions, logger } from 'express-winston';
import cors from 'cors';
import debug from 'debug';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { CommonRoutesConfig } from './common/common.routes.config';
import { UsersRoutes } from './users/users.routes.config';

import { HostsRoutes } from "./hosts/hosts.routes.config";
// import swaggerDocument from './swagger.yaml';
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./swagger.yaml');

const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  throw dotenvResult.error;
}

const app: express.Application = express();
const server: Server = createServer(app);
const port = 5000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(cors());
app.use(helmet());

const loggerOptions: LoggerOptions = {
  transports: [new transports.Console()],
  format: format.combine(
    format.json(),
    format.prettyPrint(),
    format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  // when not debugging, make terse
  loggerOptions.meta = false;
  if (typeof global.it === 'function') {
    // for non-debug test runs, squelch entirely
    loggerOptions.level = 'http';
  }
}

app.use(logger(loggerOptions));

routes.push(new UsersRoutes(app));
routes.push(new HostsRoutes(app))

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});
export const listen = server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage);
});
