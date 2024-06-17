const express = require("express");
const app = express();
const router = express.Router();
const aduanController = require("../controllers/aduanController");

// menambahkan aduan
router.post("/", aduanController.createAduan);

module.exports = router;
