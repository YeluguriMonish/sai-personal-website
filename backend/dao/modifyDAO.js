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

  static async addPost(post, date) {
    try {
      const postDoc = {
        text: post,
        date: date,
      };

      return await posts.insertOne(postDoc);
    } catch (e) {
      console.error(`Unable to upload post ${e}`);
      return { error: e };
    }
  }

  static async updatePost(postId, text, date) {
    try {
      const updateResponse = await posts.updateOne(
        { _id: ObjectId(postId) },
        { $set: { text: text, date: date } }
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
