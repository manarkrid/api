const Facility = require('../models/Facility');
//one
exports.getFacility = async (req, res) => {
    try {
        const { id } = req.params;
        const facility = await Facility.findById(id);
        
        if (!facility) {
            return res.status(404).json({ message: 'Facility not found' });
        }

        res.json(facility);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all facilities
exports.getFacilities = async (req, res) => {
    try {
        const facilities = await Facility.find();
        res.json(facilities);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
