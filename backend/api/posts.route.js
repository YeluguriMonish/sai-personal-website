import express from "express";
import PostsCtrl from "./posts.controller.js";
import ModifyCtrl from "./modify.controller.js";

const router = express.Router();

router.route("/").get(PostsCtrl.apiGetPosts);

router
  .route("/modify")
  .post(ModifyCtrl.apiUploadPost)
  .put(ModifyCtrl.apiUpdatePost)
  .delete(ModifyCtrl.apiDeletePost);

export default router;
