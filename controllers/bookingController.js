const Booking = require('../models/Booking');
const Facility = require('../models/Facility');

// Create a booking
exports.createBooking = async (req, res) => {

    console.log(req.body);
    const { 
        
        facilityName, 
        date, 
        startTime, 
        endTime, 
        guestCount, 
        firstName, 
        lastName

    }
     = req.body;

    try {
        // Create a new booking with the updated schema
        const booking = new Booking({
         // Ensure `req.user` contains the authenticated user's info
           
            facilityName,
            
            firstName,
            lastName,
            guestCount,
            date,
            startTime, // Ensure this is formatted as a Date
            endTime    // Ensure this is formatted as a Date
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all bookings
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate('user', 'email firstName lastName') // Populate user fields
            .populate('facility', 'name availability');   // Populate facility fields

        res.json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
