// APOLLO provides implementations for different servers such as Koa, hapi, Express and restify. We are going to use Express.

import express from 'express';
import cors from 'cors';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import { PubSub } from 'graphql-server-express';

import { schema } from './src/schema';

const PORT = 7800;
const server = express();
server.use('*', cors({ origin: 'http://localhost:7800' }));

// ? Setup express middleware for graphql.
// ? For every request to ‘/graphql’, Apollo will run through the entire 
// ? query/mutation processing chain and return the result depending on the query/mutation from the client.
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

// ? Test bed.
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
