const Flight = require('../models/flight');

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights: flights });
}

function newFlight(req, res) {
    res.render('flights/new', {
        departs: new Flight().departs.toISOString().slice(0, 16),
        errorMsg: ''
    });

}

async function create(req, res) {
    try {
      await Flight.create(req.body);
      res.redirect('/flights');  
    } catch (err) {
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }

module.exports = {
    index,
    new: newFlight,
    create
}