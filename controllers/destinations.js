const Flight = require('../models/flight');

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
    addDestination
}