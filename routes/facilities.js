const express = require('express');
const router = express.Router();
const { getFacilities, getFacility } = require('../controllers/facilityController');



router.get('/', getFacilities);
router.get('/:id',getFacility);

module.exports = router;
