const { Router } = require("express");

const {
  renderHome,
  renderLogin,
  renderSignup,
} = require("../../controllers/html");

const router = Router();

router.get("/", renderHome);
router.get("/login", renderLogin);
router.get("/signup", renderSignup);

module.exports = router;
