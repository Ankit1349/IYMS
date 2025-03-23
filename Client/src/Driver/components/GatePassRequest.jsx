// src/components/GatePassRequest.jsx
import  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const GatePassRequest = ({ email, onGatePassCreated }) => {
    const [intendedOperation, setIntendedOperation] = useState('Drop');
    const [incomingLocation, setIncomingLocation] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/gatepass/create', {
                email,
                intendedOperation,
                incomingLocation,
            });
            console.log('Response Data:', response.data);

            onGatePassCreated(response.data.gatePass);
            setMessage('Gate pass created successfully!');
            console.log(response.data.gatePass);

        } catch (error) {
            setMessage('Failed to create gate pass');
            console.error("Registration error:", error.response ? error.response.data : error.message); // utilized for debugging the code in case of error
            console.error(error);
        }
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-4">Request Gate Pass</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="block text-gray-700">Intended Operation</label>
                    <select value={intendedOperation} onChange={(e) => setIntendedOperation(e.target.value)} 
                    className="w-full px-3 py-2 border rounded" >
                        <option value="Drop">Drop</option>
                        <option value="Pick Up">Pick UP</option>
                        <option value="Both">Both</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Incoming Location</label>
                    <input type="text" value={incomingLocation} onChange={(e) => setIncomingLocation(e.target.value)} 
                    className="w-full px-3 py-2 border rounded" required />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Request Gate Pass</button>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
};

GatePassRequest.propTypes = {
    email: PropTypes.string.isRequired,
    onGatePassCreated: PropTypes.func.isRequired,
};

export default GatePassRequest;
