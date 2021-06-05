let posts;

export default class PostsDAO {
  static async injectDB(conn) {
    if (posts) {
      return;
    }
    try {
      posts = await conn.db(process.env.POSTS_NS).collection("posts");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in postsDAO: ${e}`
      );
    }
  }

  static async getPosts({ filters = null, page = 0, postsPerPage = 20 } = {}) {
    let query;
    if (filters) {
      if ("title" in filters) {
        query = { $text: { $search: filters["title"] } };
      }
    }

    let cursor;

    try {
      cursor = await posts.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { postsList: [], totalNumPosts: 0 };
    }

    const displayCursor = cursor.limit(postsPerPage).skip(postsPerPage * page);

    try {
      const postsList = await displayCursor.toArray();
      const totalNumPosts = await posts.countDocuments(query);

      return { postsList, totalNumPosts };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { postsList: [], totalNumPosts: 0 };
    }
  }
}
