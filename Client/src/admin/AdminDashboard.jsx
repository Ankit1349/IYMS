// import React from 'react';
import NavBar from './components/NavBarAdmin';
import ReportSection from './components/ActivityBoardAdmin';
import SearchBar from './components/SearchBar';
import DockVisualization from '../components/DockVisualization';
import ParkingVisualization from '../components/ParkingVisualization';

const AdminDashboard = () => (
    <div className="p-6 bg-background text-foreground">
        <NavBar />
        <ReportSection />
        <SearchBar />
        <div className="grid grid-cols-1 gap-4">
            <DockVisualization />
            <ParkingVisualization />
        </div>
    </div>
);

export default AdminDashboard;
