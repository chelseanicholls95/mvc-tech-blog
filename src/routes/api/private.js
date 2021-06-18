const { Router } = require("express");

const {
  createPost,
  updatePost,
  deletePost,
  createComment,
  updateComment,
  deleteComment,
} = require("../../controllers/api/private");

const router = Router();

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.post("/:id/comment", createComment);

router.put("/:post_id/comment/:comment_id", updateComment);

router.delete("/:id/comment/:comment_id", deleteComment);

module.exports = router;
