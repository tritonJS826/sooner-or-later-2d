import { buildSchema } from "graphql";

const schema = buildSchema(`

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

export { schema };
