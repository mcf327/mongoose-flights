const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

function newTicket(req, res) {
    res.render('tickets/new', { flightId: req.params.id });
}

async function create(req, res) {
    const flightId = req.params.id;
    req.body.flight = flightId;
    try {
        await Ticket.create(req.body);
        res.redirect(`/flights/${flightId}`);
    } catch (err) {
        console.log(err);
        res.redirect('/flights');
    }
}

async function deleteTicket(req, res) {
    const ticketId = req.params.ticketId;
    try {
        await Ticket.findByIdAndDelete(ticketId);
        res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.redirect(`/flights/${req.params.id}`);
    }
}

module.exports = {
    newTicket,
    create,
    deleteTicket
}