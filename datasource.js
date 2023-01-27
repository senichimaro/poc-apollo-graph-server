const { RESTDataSource } = require("apollo-datasource-rest");

class OneSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/";
  }

  getPosts() {
    return this.get("posts");
  }
  getPost(id) {
    return this.get(`posts/${id}`);
  }
}

module.exports = OneSource;
