const { Router } = require("express");

const {
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/api/private");

const router = Router();

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

module.exports = router;
