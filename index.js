const { ApolloServer } = require("apollo-server")
const schema = require("./schema")

async function initApolloServer(){
    console.log("Server executed")
    const server = new ApolloServer({typeDefs:schema})
    await server.listen({port: 4000})
}
initApolloServer(schema)