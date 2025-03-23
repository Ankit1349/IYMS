// src/components/DockVisualization.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

// const textCenterClasses = 'text-center'; 

const DockVisualization = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        const fetchSpots = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/dock/spots');
                setSpots(response.data.spots);
            } catch (error) {
                console.error('Failed to fetch dock spots', error);
            }
        };

        fetchSpots();
        // Polling for real-time updates
        const interval = setInterval(fetchSpots, 5000); // Refresh every 5 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <div className="grid-row-4">
        <h3 className="font-semibold text-lg text-center"> Docking Stations </h3>
        <div className="flex flex-wrap justify-center m-5 gap-4">
            {spots.map((spot) => (
                <div key={spot.spotID} className="flex flex-col items-center p-4 rounded-lg shadow-xl w-32 h-40 bg-white">
                    <img
                        src={spot.status === 'empty' ? './black.png' : './green.png'}
                        alt={spot.status === 'empty' ? 'Empty Spot' : 'Occupied Spot'}
                        className="object-scale-down w-24 h-24 mb-2"/>
                <div className="text-center text-gray-700 text-sm">{spot.spotID}</div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default DockVisualization;
