"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const config_1 = require("./config");
const cors = require(`cors`);
const app = (0, express_1.default)();
app.use(cors());
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.schema,
    rootValue: resolvers_1.root,
    graphiql: true,
}));
app.listen(config_1.config.port, () => console.log(`Express-graphQL now running on localhost:${config_1.config.port}/graphql`));
//# sourceMappingURL=index.js.map