// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Landing/Landing';
// import DriverRegistration from './Landing/components/DriverRegistration';
import DriverDashboard from './Driver/DriverDashboard';
import AdminDashboard from './admin/AdminDashboard';
import DockDashboard from './dock/DockDashboard';
import GateDashboard from './gate/GateDashboard';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<DriverRegistration />} /> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        <Route path="/dock-dashboard" element={<DockDashboard />} />
        <Route path="/gate-dashboard" element={<GateDashboard />} />
      </Routes>
    </Router>
  )
}

export default App;