import { ApolloServer } from 'apollo-server-hapi';
import { makeExecutableSchema } from 'graphql-tools';
import Hapi from 'hapi';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

async function StartServer() {
  const server = new ApolloServer({ schema });

  const app = new Hapi.server({
    host: 'localhost',
    port: 3000,
  });

  await server.applyMiddleware({
    app,
  });

  await server.installSubscriptionHandlers(app.listener);

  await app.start();

  console.log('*********************************************************');
  console.log('🚀  Server running at:', `${app.info.uri}/${'graphql'}`);
  console.log('*********************************************************');
}

StartServer().catch(error => console.log(error));
