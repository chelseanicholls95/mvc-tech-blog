const { Router } = require("express");

const {
  renderDashboard,
  renderCreateNewPost,
  renderEditPost,
} = require("../../controllers/html/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/dashboard/new", renderCreateNewPost);
router.get("/dashboard/edit/:id", renderEditPost);

module.exports = router;
