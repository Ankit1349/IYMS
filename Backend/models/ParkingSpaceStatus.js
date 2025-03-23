// src/models/ParkingSpaceStatus.js
const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
    spaceID: { type: String, required: true },
    status: { type: String, enum: ['empty', 'occupied'], required: true },
});

module.exports = mongoose.model('ParkingSpaceStatus', spaceSchema);
