"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const schema = (0, graphql_1.buildSchema)(`

    type Query {
        worlds: [World]
     }
 
     type World {
         id: String
         name: String
         description: String
         cards: [Card]
         levels: [Level]
     }

     type Card {
        id: String
        question: String
        answer: String
     }

     type Level {
        id: String
        title: String
        description: String
        waves: [Wave]
     }

     type Wave {
         time: Int
         cards: [Card]
     }
`);
exports.schema = schema;
//# sourceMappingURL=schema.js.map