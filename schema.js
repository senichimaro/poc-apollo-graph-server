const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    getPosts: [Post]
    getPost(id: Int): Post
  }
  type Post {
    "Post ID"
    id: Int
    "Title of the post"
    title: String
    "Text of the post"
    body: String
    "Author ID"
    userId: Int
  }
`;
module.exports = typeDefs;
