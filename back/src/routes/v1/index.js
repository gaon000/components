import express from "express";
import postRouter from "./post.route";
import commentRouter from "./comment.route";

const router = express.Router();

router.use("/posts", postRouter);
router.use("/comments", commentRouter);

export default router;
