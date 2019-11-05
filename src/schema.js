import { resolvers } from './resolvers';
import typeDefs from './Types';
import { ApolloServer } from 'apollo-server-express';

const schema = new ApolloServer({
    typeDefs,
    resolvers,
});

export { schema };
