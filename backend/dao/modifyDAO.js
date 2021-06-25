import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;

let posts;

export default class ModifyDAO {
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

  static async addPost(title, date, gist, category) {
    try {
      const postDoc = {
        title: title,
        gist: gist,
        category: category,
        date: date,
      };

      return await posts.insertOne(postDoc);
    } catch (e) {
      console.error(`Unable to upload post ${e}`);
      return { error: e };
    }
  }

  static async updatePost(postId, title, date, gist, category) {
    try {
      const updateResponse = await posts.updateOne(
        { _id: ObjectId(postId) },
        { $set: { title: title, date: date, gist: gist, category: category } }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update post: ${e}`);
      return { error: e };
    }
  }

  static async deletePost(postId) {
    try {
      const deleteResponse = await posts.deleteOne({
        _id: ObjectId(postId),
      });

      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete post: ${e}`);
      return { error: e };
    }
  }
}
