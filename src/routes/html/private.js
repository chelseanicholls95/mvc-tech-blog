const { Router } = require("express");

const {
  renderDashboard,
  renderCreateNewPost,
} = require("../../controllers/html/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/new-post", renderCreateNewPost);

module.exports = router;
