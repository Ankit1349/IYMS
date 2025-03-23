// import React from 'react';
import GateCheckIn from './components/GateCheckIn';
import GateCheckOut from './components/gateCheckOut';
import NavBar from './components/NavBar';
const GateDashboard = () => {
    return (
        <div className="gate-dashboard">
            <NavBar />
            <div className="content grid grid-cols-2 gap-4">
                <div className="gate-check-in p-4">
                    <GateCheckIn />
                </div>
                <div className="gate-check-out p-4">
                    <GateCheckOut />
                </div>
            </div>
        </div>
    );
};

export default GateDashboard;
