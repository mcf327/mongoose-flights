const Flight = require('../models/flight');

async function index(req, res) {
    const flights = await Flight.find({}).sort({ departs: 1 });
    const currentDate = new Date();
    flights.forEach(flight => {
      if (flight.departs < currentDate) {
        flight.isDeparted = true;
      } else {
        flight.isDeparted = false;
      }
    });
    res.render('flights/index', { flights: flights });
}

function newFlight(req, res) {
    const flight = new Flight();
    res.render('flights/new', {
        flight: flight,
        departs: flight.departs.toISOString().slice(0, 16),
        errorMsg: ''
    });

}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.sort((a,b) => a.arrival - b.arrival);
    res.render('flights/show', { flight: flight });
  } catch (err) {
    console.log(err);
    res.redirect('/flights');
  }
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

async function addDestination(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
    res.redirect('/flights');
  }
}

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addDestination
}