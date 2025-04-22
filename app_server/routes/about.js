var express = require("express");
var router = express.Router();
const ctrlAbout = require('../controllers/about');

// Get the about page
router.get('/', ctrlAbout.about);
module.exports = router;