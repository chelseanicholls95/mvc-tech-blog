const { Router } = require("express");

const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/api");
const auth = require("../../middleware/auth");

const router = Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", auth, createPost);

router.put("/:id", auth, updatePost);

router.delete("/:id", auth, deletePost);

module.exports = router;
