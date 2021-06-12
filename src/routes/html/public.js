const { Router } = require("express");

const {
  renderHome,
  renderLogin,
  renderSignup,
  renderViewPost,
} = require("../../controllers/html/public");

const router = Router();

router.get("/", renderHome);
router.get("/login", renderLogin);
router.get("/signup", renderSignup);
router.get("/view/:id", renderViewPost);

module.exports = router;
