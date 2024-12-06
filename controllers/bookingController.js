const Booking = require('../models/Booking');
const Facility = require('../models/Facility');

// Create a booking
exports.createBooking = async (req, res) => {
    const { facilityId, date } = req.body;

    try {
        const facility = await Facility.findById(facilityId);
        if (!facility || !facility.availability) {
            return res.status(400).json({ message: 'Facility not available' });
        }

        const booking = new Booking({
            user: req.user.userId,
            facility: facilityId,
            date
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all bookings
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user').populate('facility');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
