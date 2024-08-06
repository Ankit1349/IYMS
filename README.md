## Problem statement
Inefficiencies in yard management can lead to delays, increased operational costs, and lower overall productivity. Traditional methods often rely on manual processes, which are prone to errors and lack real-time visibility. This can result in trailers being misplaced, underutilized, or causing congestion, leading to a constraint in the supply chain.

## Proposed Solution: 
Intelligent Yard Management System (IYMS) with Real-Time Tracking and AI Optimization. The Intelligent Yard Management System (IYMS) leverages AI, IoT, and real-time data analytics to optimize the movement and management of trailers within Walmart warehouses and store premises. The system ensures efficient trailer utilization, reduces operational costs, and enhances overall productivity by providing real-time visibility and intelligent decision-making capabilities.
## Features
    1.	Real-Time Yard Visualization
    2.  Automated and Optimized Trailer Dispatch
    3.  Increased Efficiency
    4.  Easy profile tracking and Registration
    5.  Enhanced Decision making
    6.  Integrated AI and IoT System for Yard Management
    7.  Dock Management 
    8.  Gate Management
    9.  Several other intented




## Technology Stack
- Backend: Node.js with Express.js for handling API requests and real-time data.
- Database: MongoDB for storing real-time tracking data.
- Frontend: React.js for the real-time tracking dashboard.
- Real-Time Communication: MQTT/WebSocket for real-time data transfer from IoT devices.
- Mapping API: Google Maps API or Map box for vehicle tracking visualization.

## Installation

Install project with npm or download 

```bash
  npm install **project name**
  cd my-project
```
Run frontend make sure you are in client directory
```bash
  npm start
```
To install backend dependencies

```bash
  npm init -y
  npm install express mongoose cors body-parser multer
```
Run backend server
(Make sure MongoDB database is running I have used MongoDB compass)
```bash
  node server.js
```