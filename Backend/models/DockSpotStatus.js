// src/models/Spot.js
const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
    spotID: { type: String, required: true },
    status: { type: String, enum: ['empty', 'occupied'], required: true },
    type: {type: String, enum:['Refrigerated', 'Long', 'Normal'], required: true},
});

module.exports = mongoose.model('DockSpotStatus', spotSchema);
