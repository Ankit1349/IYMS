const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const driverRoutes = require('./routes/driver');
const gatePassRoutes = require('./routes/gatePass');
const dockRoutes = require('./routes/dock');
const parkingRoutes = require('./routes/parking');
require('dotenv').config();

const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api', authRoutes);
app.use('/api/driver', driverRoutes);
app.use('/api/gatepass', gatePassRoutes);
app.use('/api/dock', dockRoutes);
app.use('/api/parking', parkingRoutes);

// io.on('connection', (socket) => {
//     console.log('A user connected');
//     // Handle spot updates
//     // This is an example; you'll need to adjust this part based on your actual database and schema
//     const DockSpotStatus = require('./models/DockSpotStatus'); // Adjust the path accordingly
//     DockSpotStatus.watch().on('change', async () => {
//         const occupiedCount = await DockSpotStatus.countDocuments({ status: 'occupied' });
//         io.emit('update:occupiedCount', { occupiedCount });
//     });

//     socket.on('disconnect', () => {
//         console.log('User disconnected');
//     });
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

