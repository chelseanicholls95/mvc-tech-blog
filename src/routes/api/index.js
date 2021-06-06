const { Router } = require("express");

const postRoutes = require("./posts");

const router = Router();

router.use("/posts", postRoutes);

module.exports = router;
