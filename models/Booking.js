const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    facility: { type: mongoose.Schema.Types.ObjectId, ref: 'Facility' },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
