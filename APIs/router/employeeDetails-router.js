const express = require("express");
const empDetailsController = require('../controllers/getemployeedetails-api');

const router = express.Router();

router.get("/", empDetailsController.findAll);


module.exports = router;