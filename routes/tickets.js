const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:id/tickets/new
router.get('/:id/tickets/new', ticketsCtrl.newTicket);

// POST /flights/:id/
router.post('/:id/tickets', ticketsCtrl.create);

// DELETE /flights/:id/tickets/:ticketId
router.delete('/:id/tickets/:ticketId', ticketsCtrl.deleteTicket);

module.exports = router;