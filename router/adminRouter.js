const express = require("express");
const router = express.Router();
const {
    login,
    dashboard,
    addproduct,
    addcollection,
} = require("../controllers/adminController");

//Using filtering route
router.use(login);
router.get("/dashboard", dashboard);
router.get("/add-product", addproduct);
router.get("/add-collection", addcollection);

module.exports = router;
