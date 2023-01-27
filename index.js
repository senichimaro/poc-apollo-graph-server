const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const OneEndpoint = require("./datasource");

async function initApolloServer(typeDefs) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        oneEndpoint: new OneEndpoint(),
      };
    },
  });
  await server.listen({ port: process.env.PORT || 4000 });
}
initApolloServer(typeDefs);