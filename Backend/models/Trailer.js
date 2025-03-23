// models/Trailer.js
const mongoose = require('mongoose');

const TrailerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    trailerType: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    driverImage: { type: String },
    trailerImage: { type: String }
});

const Trailer = mongoose.model('Trailer', TrailerSchema);

module.exports = Trailer;
