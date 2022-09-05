const express = require("express");
const router = express.Router();

const { collection } = require("../controllers/collectionController");

router.get("/collection", collection);
module.exports = router;
