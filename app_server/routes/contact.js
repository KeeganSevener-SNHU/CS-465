var express = require("express");
var router = express.Router();
const ctrlContact = require('../controllers/contact');

// Get the contact page
router.get('/', ctrlContact.contact);
module.exports = router;