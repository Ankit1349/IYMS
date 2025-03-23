// import React from 'react';

const cardClasses = 'bg-card p-4 rounded shadow';

const ActivityBoard = () => (
    <div className="grid grid-cols-3 gap-4 mb-4">
        <div className={cardClasses}>
            <h2 className="font-semibold">---</h2>
            <p>Dock Allocated</p>
        </div>
        <div className={cardClasses}>
            <h2 className="font-semibold">---</h2>
            <p>Dock In Time</p>
        </div>
        <div className={cardClasses}>
            <h2 className="font-semibold">1.5 Hrs</h2>
            <p>Estimated Operations Time</p>
        </div>
        <div className={cardClasses}>
            <h2 className="font-semibold">---</h2>
            <p>Parking Allocated</p>
        </div>
        <div className={cardClasses}>
            <h2 className="font-semibold">00:45</h2>
            <p>Avg. Dock TAT</p>
        </div>
        <div className={cardClasses}>
            <h2 className="font-semibold">01:15</h2>
            <p>Avg. Gate TAT</p>
        </div>
    </div>
);

export default ActivityBoard;
