const express = require('express');
const { getDb } = require('./connect'); // Import getDb correctly

const router = express.Router();

// Endpoint to create a booking
router.post('/book', async (req, res) => {
    console.log('Request Body:', req.body); // Log request body to check for title

    const { vehicleNumber, date, startTime, endTime, slotNumber, email, title } = req.body;

    if (!vehicleNumber || !date || !startTime || !endTime || !slotNumber || !email || !title) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const db = getDb();
        const bookingsCollection = db.collection('bookings');
        const slotsCollection = db.collection('slots');

        const booking = { vehicleNumber, date, startTime, endTime, slotNumber, email, title };

        await bookingsCollection.insertOne(booking);
        
        await slotsCollection.updateOne(
            { slotNumber: slotNumber },
            { $set: { status: 'booked' } }
        );

        res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
        console.error('Error booking:', error);
        res.status(500).json({ message: 'Booking failed' });
    }
});

// Endpoint to fetch bookings by user email
router.get('/bookings', async (req, res) => {
    const { email } = req.query;

    try {
        const db = getDb();
        const bookingsCollection = db.collection('bookings');

        // Fetch bookings with the provided email
        const bookings = await bookingsCollection.find({ email }).toArray();
        res.json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Error fetching bookings' });
    }
});

module.exports = router;
