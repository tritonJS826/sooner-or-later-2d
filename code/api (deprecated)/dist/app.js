"use strict";
// import dotenv from 'dotenv';
// import express from 'express';
// import * as http from 'http';
// import * as winston from 'winston';
// import * as expressWinston from 'express-winston';
// import cors from 'cors';
// import debug from 'debug';
// import helmet from 'helmet';
// import swaggerUi from 'swagger-ui-express';
// import CommonRoutesConfig from './common/common.routes.config';
// import UsersRoutes from './users/users.routes.config';
// // import swaggerDocument from './swagger.yaml';
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./swagger.yaml');
// const dotenvResult = dotenv.config();
// if (dotenvResult.error) {
//   throw dotenvResult.error;
// }
// const app: express.Application = express();
// const server: http.Server = http.createServer(app);
// const port = 5000;
// const routes: Array<CommonRoutesConfig> = [];
// const debugLog: debug.IDebugger = debug('app');
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use(express.json());
// app.use(cors());
// app.use(helmet());
// const loggerOptions: expressWinston.LoggerOptions = {
//   transports: [new winston.transports.Console()],
//   format: winston.format.combine(
//     winston.format.json(),
//     winston.format.prettyPrint(),
//     winston.format.colorize({ all: true })
//   ),
// };
// if (!process.env.DEBUG) {
//   loggerOptions.meta = false; // when not debugging, make terse
//   if (typeof global.it === 'function') {
//     loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
//   }
// }
// app.use(expressWinston.logger(loggerOptions));
// routes.push(new UsersRoutes(app));
// const runningMessage = `Server running at http://localhost:${port}`;
// app.get('/', (req: express.Request, res: express.Response) => {
//   res.status(200).send(runningMessage);
// });
// export default server.listen(port, () => {
//   routes.forEach((route: CommonRoutesConfig) => {
//     debugLog(`Routes configured for ${route.getName()}`);
//   });
//   console.log(runningMessage);
// });
console.log('do nothing');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0JBQStCO0FBRS9CLGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsc0NBQXNDO0FBQ3RDLHFEQUFxRDtBQUNyRCwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQiw4Q0FBOEM7QUFDOUMsa0VBQWtFO0FBQ2xFLHlEQUF5RDtBQUV6RCxtREFBbUQ7QUFDbkQsa0NBQWtDO0FBRWxDLHVEQUF1RDtBQUV2RCx3Q0FBd0M7QUFDeEMsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5QixJQUFJO0FBRUosOENBQThDO0FBQzlDLHNEQUFzRDtBQUN0RCxxQkFBcUI7QUFDckIsZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUVsRCwyRUFBMkU7QUFFM0UsMkJBQTJCO0FBQzNCLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFFckIsd0RBQXdEO0FBQ3hELG9EQUFvRDtBQUNwRCxvQ0FBb0M7QUFDcEMsNkJBQTZCO0FBQzdCLG9DQUFvQztBQUNwQyw2Q0FBNkM7QUFDN0MsT0FBTztBQUNQLEtBQUs7QUFFTCw0QkFBNEI7QUFDNUIsa0VBQWtFO0FBQ2xFLDJDQUEyQztBQUMzQyxpRkFBaUY7QUFDakYsTUFBTTtBQUNOLElBQUk7QUFFSixpREFBaUQ7QUFFakQscUNBQXFDO0FBRXJDLHVFQUF1RTtBQUN2RSxrRUFBa0U7QUFDbEUsMENBQTBDO0FBQzFDLE1BQU07QUFDTiw2Q0FBNkM7QUFDN0Msb0RBQW9EO0FBQ3BELDREQUE0RDtBQUM1RCxRQUFRO0FBQ1IsaUNBQWlDO0FBQ2pDLE1BQU07QUFFTixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDIn0=