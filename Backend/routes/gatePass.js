// routes/gatePass.js
const express = require('express');
const router = express.Router();
const Trailer = require('../models/Trailer');
const GatePass = require('../models/GatePass');

router.post('/create', async (req, res) => {
    const { email, intendedOperation, incomingLocation } = req.body;

    try {
    // Fetch trailer details using email
        const trailerData = await Trailer.findOne({ email });

        if (!trailerData) {
            return res.status(404).json({ message: 'Trailer not found' });
        }

    // Create the gate pass using the fetched trailer data and user inputs
        const gatePass = new GatePass({
            driverId: trailerData._id,
            name: trailerData.name,
            vehicleNumber: trailerData.vehicleNumber,
            trailerType: trailerData.trailerType,
            mobileNumber: trailerData.mobileNumber,
            licenseNumber: trailerData.licenseNumber,
            driverImage: trailerData.driverImage,
            trailerImage: trailerData.trailerImage,
            intendedOperation,
            incomingLocation,
        });

        await gatePass.save();
            res.status(201).json({ message: 'Gate pass created successfully', gatePass });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Route to check for existing gate pass
router.get('/check', async (req, res) => {
    const { email } = req.query;

    try {
        // Fetch trailer details using email
        const trailerData = await Trailer.findOne({ email });

        if (!trailerData) {
            return res.status(404).json({ message: 'Trailer not found' });
        }

        // Check if a gate pass already exists for this driver
        const existingGatePass = await GatePass.findOne({ driverId: trailerData._id, status: { $ne: 'expire' } });

        if (existingGatePass) {
            return res.status(200).json({ gatePass: existingGatePass });
        } else {
            return res.status(200).json({ gatePass: null });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});


// Route to check for existing gate pass based on vehicle number
router.get('/checkByVehicle', async (req, res) => {
    const { vehicleNumber } = req.query;

    try {
        // Fetch gate pass details using vehicle number
        const existingGatePass = await GatePass.findOne({ vehicleNumber, status: { $ne: 'expire' } });

        if (existingGatePass) {
            return res.status(200).json({ gatePass: existingGatePass });
        } else {
            return res.status(404).json({ message: 'No active gate pass found for this vehicle' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});


router.patch('/checkout', async (req, res) => {
    const { vehicleNumber } = req.body;

    try {
        // Find the gate pass by vehicle number and update its status to 'expire'
        const gatePass = await GatePass.findOneAndUpdate(
            { vehicleNumber, status: { $ne: 'Expire' } },
            { status: 'Expire' },
            { new: true }
        );

        if (gatePass) {
            return res.status(200).json({ message: 'Gate pass status updated to expired', gatePass });
        } else {
            return res.status(404).json({ message: 'No active gate pass found for this vehicle' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
