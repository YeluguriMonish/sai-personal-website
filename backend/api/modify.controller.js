import ModifyDAO from "../dao/modifyDAO.js";

export default class ModifyController {
  static async apiUploadPost(req, res, next) {
    try {
      const post = req.body.text;
      const date = new Date();

      const PostResponse = await ModifyDAO.addPost(post, date);

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdatePost(req, res, next) {
    try {
      const postId = req.body.post_id;
      const text = req.body.text;
      const date = new Date();

      const postResponse = await ModifyDAO.updatePost(postId, text, date);

      var { error } = postResponse;
      if (error) {
        res.status(400).json({ error });
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeletePost(req, res, next) {
    try {
      const postId = req.query.id;
      console.log(postId);
      const postResponse = await ModifyDAO.deletePost(postId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
