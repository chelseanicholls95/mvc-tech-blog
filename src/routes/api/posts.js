const { Router } = require("express");

const {
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../../controllers/api");
const auth = require("../../middleware/auth");

const router = Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.put("/:id", auth, updatePost);

router.delete("/:id", auth, deletePost);

module.exports = router;
