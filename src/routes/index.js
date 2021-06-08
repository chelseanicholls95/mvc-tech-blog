const { Router } = require("express");
const auth = require("../middleware/auth");

const apiRoutes = require("./api");

const router = Router();

router.use("/api", auth, apiRoutes);

module.exports = router;
