// src/routes/dock.js
const express = require('express');
const router = express.Router();
const DockSpotStatus = require('../models/DockSpotStatus');


// Get all dock spots
router.get('/spots', async (req, res) => {
    try {
        const spots = await DockSpotStatus.find(); // Fetch all spots
        res.json({ spots });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch dock spots' });
    }
});

// Update the status of a specific spot by spotID
router.put('/spot/update', async (req, res) => {
    try {
        const { spotID } = req.body;
        const { status } = req.body;

        // Validate status
        if (!['empty', 'occupied'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status value' });
        }

        // for debugging purposes
        // console.log('SpotID:', spotID);
        // console.log('Status:', status);

        // Find the spot by spotID and update its status
        const updatedSpot = await DockSpotStatus.findOneAndUpdate(
            { spotID },
            { status },
            { new: true, useFindAndModify: false }
        );

        if (!updatedSpot) {
            return res.status(404).json({ message: 'Spot not found' });
        }

        res.json(updatedSpot);
    } catch (error) {
        console.error('Error updating spot status:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Add a new spot
router.post('/spot', async (req, res) => {
    try {
        const { spotID, status } = req.body;

        // Validate status
        if (!['empty', 'occupied'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status value' });
        }

        // Check if spot already exists
        const existingSpot = await DockSpotStatus.findOne({ spotID });
        if (existingSpot) {
            return res.status(400).json({ message: 'Spot already exists' });
        }

        // Create a new spot
        const newDockSpotStatus = new DockSpotStatus({
            spotID,
            status,
        });

        // Save the new spot to the database
        await newDockSpotStatus.save();

        res.status(201).json(newDockSpotStatus);
    } catch (error) {
        console.error('Error adding new spot:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Get the total number of occupied spots
router.get('/spots/occupied/count', async (req, res) => {
    try {
        // Count the number of spots with status 'occupied'
        const occupiedCount = await DockSpotStatus.countDocuments({ status: 'occupied' });

        res.json({ occupiedCount });
    } catch (error) {
        console.error('Error fetching occupied spots count:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
