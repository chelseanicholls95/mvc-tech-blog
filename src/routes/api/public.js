const { Router } = require("express");

const { getPosts, getPost } = require("../../controllers/api/public");

const router = Router();

router.get("/", getPosts);

router.get("/:id", getPost);

module.exports = router;
