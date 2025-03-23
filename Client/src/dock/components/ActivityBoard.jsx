// import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const ActivityBoard = () => {
    const [totalOccupied, setTotalOccupied] = useState(0); 

    useEffect(() => {
        // Function to fetch the occupied spots count
        const fetchOccupiedCount = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/dock/spots/occupied/count');
                console.log('API response:', response.data); 
                setTotalOccupied(response.data.occupiedCount);
            } catch (error) {
                console.error('Error fetching occupied spots count:', error);
            }
        };

        fetchOccupiedCount(); // Call the function to fetch data
    }, []);


    return (
        <div className="card p-4 mb-4">
            <h2 className="text-lg font-semibold mb-4">Dock Activity Board</h2>
            <div className="grid grid-rows-2 gap-4">
                <div className="card">
                    <h3 className="font-semibold">Total Trailers in Dock</h3>
                    <p className="text-2xl">{totalOccupied}</p>
                </div>
                <div className="card">
                    <h3 className="font-semibold">Avg. Turnaround Time</h3>
                    <p className="text-2xl">00:50</p>
                </div>
            </div>
        </div>
    );
};

export default ActivityBoard;
