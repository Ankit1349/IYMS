const mongoose = require('mongoose');

const gatePassSchema = new mongoose.Schema({
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trailer', required: true },
    name: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    trailerType: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    driverImage: { type: String, required: true },
    trailerImage: { type: String, required: true },
    intendedOperation: { type: String, enum: ['Drop', 'Pick Up', 'Both'], required: true },
    incomingLocation: { type: String, required: true },
    status: { type: String, enum:['Active', 'Expired'], default: 'Active' }, // 'active' or 'expired'
    createdAt: { type: Date, default: Date.now }
});

const GatePass = mongoose.model('GatePass', gatePassSchema);

module.exports = GatePass;
