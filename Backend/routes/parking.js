// src/routes/parking.js
const express = require('express');
const router = express.Router();
const ParkingSpaceStatus = require('../models/ParkingSpaceStatus');

// Get all parking spaces
router.get('/spaces', async (req, res) => {
    try {
        const spaces = await ParkingSpaceStatus.find(); // Fetch all spaces
        res.json({ spaces });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch parking spaces' });
    }
});

// Update the status of a specific space by spaceID
router.put('/space/update', async (req, res) => {
    try {
        const { spaceID, status } = req.body;

        // Validate status
        if (!['empty', 'occupied'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status value' });
        }

        // Find the space by spaceID and update its status
        const updatedSpace = await ParkingSpaceStatus.findOneAndUpdate(
            { spaceID },
            { status },
            { new: true, useFindAndModify: false }
        );

        if (!updatedSpace) {
            return res.status(404).json({ message: 'Space not found' });
        }

        res.json(updatedSpace);
    } catch (error) {
        console.error('Error updating space status:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Add a new space
router.post('/addspace', async (req, res) => {
    try {
        const { spaceID, status } = req.body;

        // Validate status
        if (!['empty', 'occupied'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status value' });
        }

        // Check if space already exists
        const existingSpace = await ParkingSpaceStatus.findOne({ spaceID });
        if (existingSpace) {
            return res.status(400).json({ message: 'Space already exists' });
        }

        // Create a new space
        const newParkingSpaceStatus = new ParkingSpaceStatus({
            spaceID,
            status,
        });

        // Save the new space to the database
        await newParkingSpaceStatus.save();

        res.status(201).json(newParkingSpaceStatus);
    } catch (error) {
        console.error('Error adding new space:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get the total number of occupied spaces
router.get('/spaces/occupied/count', async (req, res) => {
    try {
        // Count the number of spaces with status 'occupied'
        const occupiedCount = await ParkingSpaceStatus.countDocuments({ status: 'occupied' });

        res.json({ occupiedCount });
    } catch (error) {
        console.error('Error fetching occupied spaces count:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
