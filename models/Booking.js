const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
    facilityName: { type: String, required: true }, // courtName equivalent
    //email: { type: String, required: true }, // user email
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true },
    guestCount: { type: Number, required: true }, // Number of guests
    date: { type: String, required: true }, // Booking date
    startTime: { type: Date, required: true }, // Start time as Date
    endTime: { type: Date, required: true }, // End time as Date
});

module.exports = mongoose.model('Booking', bookingSchema);
