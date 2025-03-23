import { useState } from 'react';
import axios from 'axios';

const GateCheckOut = () => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [gatePass, setGatePass] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleCheckOut = async () => {
        try {
            // First, fetch the existing gate pass
            const response = await axios.get('http://localhost:5000/api/gatepass/checkByVehicle', {
                params: { vehicleNumber },
            });

            if (response.data.gatePass) {
                // Update the gate pass status to 'expire'
                await axios.patch('http://localhost:5000/api/gatepass/checkout', {
                    vehicleNumber,
                });

                setGatePass(response.data.gatePass);
                setError('');
                setSuccess('checked out successfully');
            } else {
                setGatePass(null);
                setError('No active gate pass found for this vehicle');
                setSuccess('');
            }
        } catch (err) {
            setGatePass(null);
            setError(err.response?.data?.message || 'Error during check-out');
            setSuccess('');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Gate Check-Out</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Vehicle Number:</label>
                    <input
                        type="text"
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        placeholder="Enter vehicle number"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    onClick={handleCheckOut}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Check-Out Gate Pass
                </button>
                
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">{success}</p>}

                {gatePass && (
                    <div className="mt-6 bg-gray-50 p-4 border border-gray-200 rounded-md">
                        <h3 className="text-xl font-semibold mb-2">Gate Pass Details</h3>
                        <p><strong>Name:</strong> {gatePass.name}</p>
                        <p><strong>Vehicle Number:</strong> {gatePass.vehicleNumber}</p>
                        <p><strong>Trailer Type:</strong> {gatePass.trailerType}</p>
                        <p><strong>Mobile Number:</strong> {gatePass.mobileNumber}</p>
                        <p><strong>License Number:</strong> {gatePass.licenseNumber}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GateCheckOut;
