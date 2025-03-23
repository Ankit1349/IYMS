import { useState, useEffect } from 'react';
import axios from 'axios';
const ActivityBoard = () => {
    const [DockOccupied, setDockOccupied] = useState(0); 
    const [ParkingOccupied, setParkingOccupied] = useState(0);

    useEffect(() => {
        // Function to fetch the occupied spots count
        const fetchDockCount = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/dock/spots/occupied/count');
                console.log('API response:', response.data); 
                setDockOccupied(response.data.occupiedCount);
            } catch (error) {
                console.error('Error fetching occupied spots count:', error);
            }
        };

        const fetchParkingCount = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/parking/spaces/occupied/count');
                console.log('API response:', response.data); 
                setParkingOccupied(response.data.occupiedCount);
            } catch (error) {
                console.error('Error fetching occupied spots count:', error);
            }
        };

        fetchDockCount(); 
        fetchParkingCount();
    }, []);

const cardClasses = 'card p-4 mb-4 flex flex-col items-center justify-center p-4 rounded-lg shadow-xl w-120 h-40 bg-white';
const parentCardClasses = 'card p-6 mb-4';
const h2Classes = 'font-semibold text-3xl ';
const pClasses = 'text-2xl ';

return (
    <div className={parentCardClasses}>
            <div className="grid grid-cols-3 gap-4">
                <div className={cardClasses}>
                    <h2 className={h2Classes}>17</h2>
                    <p className={pClasses}>Total Trailers</p>
                </div>
                <div className={cardClasses}>
                    <h2 className={h2Classes}>{DockOccupied}</h2>
                    <p className={pClasses}>Trailers at Docks</p>
                </div>
                <div className={cardClasses}>
                    <h2 className={h2Classes}>04</h2>
                    <p className={pClasses}>Trailers Incoming</p>
                </div>
                <div className={cardClasses}>
                    <h2 className={h2Classes}>{ParkingOccupied}</h2>
                    <p className={pClasses}>Trailer at Parking</p>
                </div>
                <div className={cardClasses}>
                    <h2 className={h2Classes}>00:45</h2>
                    <p className={pClasses}>Avg. Dock TAT</p>
                </div>
                <div className={cardClasses}>
                    <h2 className={h2Classes}>01:15</h2>
                    <p className={pClasses}>Avg. Gate TAT</p>
                </div>
            </div>
        </div>
);
};

export default ActivityBoard;
