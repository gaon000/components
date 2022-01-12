import express from "express";
import {
  getPost,
  getPostList,
  createPost,
  modifyPost,
  deletePost,
} from "../../controllers/post.controller";

const router = express.Router();

router.route("/").get(getPostList);
router.route("/:postId").get(getPost);
router.route("/").post(createPost);
router.route("/:postId").delete(deletePost);
router.route("/:postId").put(modifyPost);

export default router;
