import express from "express";

const router = express.Router();

router.route("/").get();
router.route("/:postId").get();
router.route("/").post();
router.route("/:postId").delete();
router.route("/:postId").put();

export default router;
