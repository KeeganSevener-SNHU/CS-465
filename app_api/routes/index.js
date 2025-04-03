const express = require('express');
const router = express.Router();

// import the controller from trips.js
const tripsListController = require('../controllers/trips');

// define the endpoints
router.route('/trips').get(tripsListController.tripsList);
router.route('/trips/:tripCode').get(tripsListController.tripFindByCode);

module.exports = router;