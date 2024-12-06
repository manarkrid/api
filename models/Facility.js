const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    availability: { type: Boolean, default: true }
});

module.exports = mongoose.model('Facility', facilitySchema);
