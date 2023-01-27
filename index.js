const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")

async function initApolloServer(typeDefs){
    const server = new ApolloServer({
        typeDefs
    })
    await server.listen({port: 4000})
}
initApolloServer(typeDefs)