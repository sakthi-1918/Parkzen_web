const express = require('express');
const cors = require('cors');
const path = require('path'); 
const connect = require('./connect');
const authRoutes = require('./auth'); // Auth routes
const slotsRoutes = require('./slotsRoutes'); // Import slots routes

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json()); // Parse incoming JSON requests
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Use the auth routes
app.use('/api', authRoutes);


// Use the slots routes
app.use('/api', slotsRoutes); 

app.listen(PORT, async () => {
    await connect.connectToServer();
    console.log(`Server is running on port ${PORT}`);
});
