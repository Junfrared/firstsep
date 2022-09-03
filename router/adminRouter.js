const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controllers/adminController");

//Using filtering route
router.get("/dashboard", dashboard);

module.exports = router;
