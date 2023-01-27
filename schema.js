const { gql } = require("apollo-server")
const typeDefs = gql`
    type Query {
        "Dumy Init"
        dummyField: String
    }
`;
module.exports = typeDefs