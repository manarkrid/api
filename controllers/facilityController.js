const Facility = require('../models/Facility');

// Get all facilities
exports.getFacilities = async (req, res) => {
    try {
        const facilities = await Facility.find();
        res.json(facilities);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
