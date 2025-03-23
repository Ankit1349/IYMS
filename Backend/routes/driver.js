const express = require('express');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const path = require('path');
const User = require('../models/User');
const Trailer = require('../models/Trailer'); // Define a Trailer model similar to User model

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// @route   POST /api/trailer
// @desc    Register a new trailer
router.post('/', upload.fields([{ name: 'driverImage' }, { name: 'trailerImage' }]), async (req, res) => {
    const { name, vehicleNumber, trailerType, mobileNumber, licenseNumber, email, password } = req.body;
    const role = 'Driver';
    const driverImage = req.files['driverImage'][0].path;
    const trailerImage = req.files['trailerImage'][0].path;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user = new User({
            email,
            password: hashedPassword,
            role,
        });
        await user.save();

        const trailer = new Trailer({
            name,
            vehicleNumber,
            trailerType,
            mobileNumber,
            licenseNumber,
            email,
            driverImage,
            trailerImage,
        });

    await trailer.save();
    res.status(201).json({ msg: 'Trailer registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET /api/trailer/:id
// @desc    Get trailer by ID and serve images
router.get('/:id', async (req, res) => {
    try {
        const trailer = await Trailer.findById(req.params.id);
        if (!trailer) {
            return res.status(404).json({ msg: 'Trailer not found' });
        }

        res.status(200).json({
            name: trailer.name,
            vehicleNumber: trailer.vehicleNumber,
            trailerType: trailer.trailerType,
            mobileNumber: trailer.mobileNumber,
            licenseNumber: trailer.licenseNumber,
            email: trailer.email,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// To serve static files like images
router.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

module.exports = router;


module.exports = router;