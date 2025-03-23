import { useState, useEffect } from 'react';
import axios from 'axios';

const textCenterClasses = 'text-center'; 

const ParkingVisualization = () => {
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        const fetchSpaces = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/parking/spaces');
                setSpaces(response.data.spaces);
            } catch (error) {
                console.error('Failed to fetch parking spaces', error);
            }
        };

        fetchSpaces();
        // Polling for real-time updates
        const interval = setInterval(fetchSpaces, 5000); // Refresh every 5 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <div className="grid-row-4">
            <h3 className="font-semibold text-lg text-center"> Parking Spaces </h3>
            <div className="flex flex-wrap justify-center m-5 gap-4">
                {spaces.map((space) => (
                    <div key={space.spaceID} className="flex flex-col items-center p-4 rounded-lg shadow-xl w-32 h-40 bg-white">
                        <img 
                            src={space.status === 'empty' ? './black.png' : './green.png'}
                            alt={space.status === 'empty' ? 'Empty Space' : 'Occupied Space'} 
                            className="object-scale-down w-20 h-20" />
                        <div className={textCenterClasses}>{space.spaceID}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParkingVisualization;