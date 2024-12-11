const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Facility', facilitySchema);


