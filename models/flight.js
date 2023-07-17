const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX,', 'SAN', 'LGA', 'JFK']
    },
    arrival: {
        type: Date,
    }
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'JetBlue', 'Spirit', 'Southwest', 'Delta']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX,', 'SAN', 'LGA', 'JFK']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () =>
          (d => d.setFullYear(d.getFullYear() + 1))(
            new Date()
          ),
    },
    destinations: [destinationSchema]
    }, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
