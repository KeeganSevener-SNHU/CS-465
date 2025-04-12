const express = require('express');
const router = express.Router();

// import the controller from trips.js
const tripsListController = require('../controllers/trips');

// define the endpoints
router
    .route('/trips')
    .get(tripsListController.tripsList)
    .post(tripsListController.tripsAddTrip);

// GETs a route via trip ID.
router
    .route('/trips/:tripCode')
    .get(tripsListController.tripFindByCode)
    .put(tripsListController.tripsUpdateTrip);

module.exports = router;