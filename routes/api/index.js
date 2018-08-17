const router = require("express").Router();
const addressRoutes = require("./address");

// Article routes
router.use("/address", addressRoutes);

module.exports = router;