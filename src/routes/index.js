const { Router } = require("express");

const authRoutes = require("../routes/auth");
const htmlRoutes = require("./html");
const apiRoutes = require("./api");

const router = Router();

router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
