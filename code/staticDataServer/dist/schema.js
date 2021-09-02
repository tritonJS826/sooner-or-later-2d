"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`
    type Query {
       worlds: [World]
       players: [Player]
    }

    type World {
        id: String
        name: String
        description: String
        cards: Object
        levels: Array
        textures: Object

    }

    type Player{
        id: String
        name: String
        status: String
        playerStatistics: Object

    } 
`);
exports.schema = schema;
//# sourceMappingURL=schema.js.map