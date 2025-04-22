var express = require("express");
var router = express.Router();
const ctrlRooms = require('../controllers/rooms');

// Get the rooms page
router.get('/', ctrlRooms.rooms);
module.exports = router;