const { Router } = require("express");

const {
  createPost,
  updatePost,
  deletePost,
  createComment,
  updateComment,
} = require("../../controllers/api/private");

const router = Router();

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.post("/:id/comment", createComment);

router.put("/:id/comment/:comment_id", updateComment);

module.exports = router;
