import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {schema} from './schema';
import {root} from './resolvers';
import {config} from './config';
const cors = require( `cors` );


const app = express();
app.use( cors() );
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(config.port, () => console.log(`Express-graphQL now running on localhost:${config.port}/graphql`));