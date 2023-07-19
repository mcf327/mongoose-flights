const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// POST /flights/:id/destinations
router.post('/:id/destinations', destinationsCtrl.addDestination);

module.exports = router;