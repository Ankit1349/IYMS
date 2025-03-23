// src/components/GatePassDisplay.jsx
// import React from 'react';
import PropTypes from 'prop-types';

const GatePassDisplay = ({ gatePass }) => {
    return (
        <div className="p-4 bg-green-100 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Gate Pass Details</h2>
            <p><strong>Driver Name:</strong> {gatePass.name}</p>
            <p><strong>Vehicle Number:</strong> {gatePass.vehicleNumber}</p>
            <p><strong>Trailer Type:</strong> {gatePass.trailerType}</p>
            <p><strong>Mobile Number:</strong> {gatePass.mobileNumber}</p>
            <p><strong>License Number:</strong> {gatePass.licenseNumber}</p>
            <p><strong>Intended Operation:</strong> {gatePass.intendedOperation}</p>
            <p><strong>Incoming Location:</strong> {gatePass.incomingLocation}</p>
            <p><strong>Status:</strong> {gatePass.status}</p>
            <p><strong>Created At:</strong> {new Date(gatePass.createdAt).toLocaleString()}</p>
        </div>
    );
};

GatePassDisplay.propTypes = {
    gatePass: PropTypes.shape({
        name: PropTypes.string.isRequired,    
        vehicleNumber: PropTypes.string.isRequired,
        trailerType: PropTypes.string.isRequired,
        mobileNumber: PropTypes.string.isRequired,
        licenseNumber: PropTypes.string.isRequired,
        driverImage: PropTypes.string,
        trailerImage: PropTypes.string,
        intendedOperation: PropTypes.string.isRequired,
        incomingLocation: PropTypes.string,
        status: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
};

export default GatePassDisplay;
