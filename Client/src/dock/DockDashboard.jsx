// import React from 'react';
import NavBar from './components/NavBar';
import ActivityBoard from './components/ActivityBoard';
import DockVisualization from '../components/DockVisualization';

const DockDashboard = () => {
    return (
        <div className="p-6 bg-background text-foreground">
            <NavBar />
            <div className="grid grid-cols-2 gap-4">
                <ActivityBoard />
                <DockVisualization />
            </div>
        </div>
    );
};

export default DockDashboard;
