const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

// GET /flights
router.get('/', flightsCtrl.index);

// GET /flights/new
router.get('/new', flightsCtrl.new);

// GET /flights/:id
router.get('/:id', flightsCtrl.show);

// POST /flights
router.post('/', flightsCtrl.create);

// POST /flights/:id/destinations
router.post('/:id/destinations', flightsCtrl.addDestination);

module.exports = router;