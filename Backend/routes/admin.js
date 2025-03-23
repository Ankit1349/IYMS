const express = require('express');
const router = express.Router();
const Trailer = require('../models/Trailer');
const Dock = require('../models/Dock');
const Parking = require('../models/Parking');

// @route   GET /api/reports
// @desc    Get various reports
router.get('/reports', async (req, res) => {
    try {
        // Replace with actual calculations/queries
        const reports = {
            totalTrailers: await Trailer.countDocuments(),
            incomingTrailers: 10, // Replace with actual logic
            avgTurnaroundTime: 2, // Replace with actual calculation
            trailersInDocks: 5, // Replace with actual count
        };
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// @route   GET /api/trailers/search
// @desc    Search trailers by various fields
router.get('/trailers/search', async (req, res) => {
    const { query } = req.query;
    try {
        const trailers = await Trailer.find({
            $or: [
                { vehicleNumber: query },
                { mobileNumber: query },
                { email: query }
            ]
        });
        res.json(trailers);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// @route   GET /api/docks
// @desc    Get docking station data
router.get('/docks', async (req, res) => {
    try {
        const docks = await Dock.find(); // Replace with actual logic
        res.json(docks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// @route   GET /api/parking
// @desc    Get parking spot data
router.get('/parking', async (req, res) => {
    try {
        const parkingSpots = await Parking.find(); // Replace with actual logic
        res.json(parkingSpots);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;