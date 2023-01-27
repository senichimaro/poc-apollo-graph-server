const resolvers = {
  Query: {
    getPosts: (_, __, { dataSources }) => dataSources.oneEndpoint.getPosts(),
    getPost: (_, { id }, { dataSources }) => dataSources.oneEndpoint.getPost(id),
  },
};
module.exports = resolvers;
