// src/pages/DriverDashboard.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import GatePassRequest from './components/GatePassRequest';
import GatePassDisplay from './components/GatePassDisplay';
import ActivityBoard from './components/ActivityBoardDriver';
import ParkingPlot from '../components/ParkingVisualization';
import NavBar from './components/NavBar';

const DriverDashboard = () => {
    const [gatePass, setGatePass] = useState(null);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Fetch user details from an API or context
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/details', {
                    headers: {
                      'x-auth-token': localStorage.getItem('token') // taking token from localStorage to send as an 
                    }
                });
                setUserEmail(response.data.email || '');

            } catch (error) {
            console.error('Failed to fetch user details', error);
            }
        };

        const fetchGatePass = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/gatepass/check', {
                    params: { email: userEmail },
                    headers: {
                        'x-auth-token': localStorage.getItem('token')
                    }
                });
                setGatePass(response.data.gatePass || null);
            } catch (error) {
                console.error('Failed to fetch gate pass', error);
            }
        };

        fetchUserDetails().then(() => {
            if (userEmail) {
                fetchGatePass();
            }
        });
    }, [userEmail]);

    const handleGatePassCreated = (newGatePass) => {
        setGatePass(newGatePass);
    };

    return (<>
        <NavBar/>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upper section - two components */}
            <div className="flex flex-col gap-6 md:col-span-2">
                <div className="bg-white p-4 rounded shadow">
                    <h1 className="text-2xl font-bold mb-6">Gate Pass</h1>
                    {gatePass ? (
                        <GatePassDisplay gatePass={gatePass} />
                    ) : (
                        <GatePassRequest email={userEmail} onGatePassCreated={handleGatePassCreated} />
                    )}
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h1 className="text-2xl font-bold mb-6">Activity Board</h1>
                    <ActivityBoard /> 
                </div>
            </div>
            {/* Lower section - one component */}
            <div className="bg-white p-4 rounded shadow md:col-span-2">
                <h1 className="text-2xl font-bold mb-6">Parking Plot</h1>
                <ParkingPlot /> 
            </div>
        </div></>
    );
};

export default DriverDashboard;
