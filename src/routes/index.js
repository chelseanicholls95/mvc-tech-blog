const { Router } = require("express");

const auth = require("../middleware/auth");
const htmlRoutes = require("./html");
const apiRoutes = require("./api");

const router = Router();

router.use("/api", auth, apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
