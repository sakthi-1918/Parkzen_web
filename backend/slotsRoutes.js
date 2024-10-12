const express = require('express');
const router = express.Router();
const { getDb } = require('./connect'); // MongoDB connection

// Route to add a new parking slot
router.post('/addSlot', async (req, res) => {
    const { title, image, slots, available, booked, status } = req.body;
    const db = getDb();
    const slotsCollection = db.collection('slots'); // MongoDB collection

    try {
        // Insert new parking slot
        const newSlot = { title, image, slots, available, booked, status };
        await slotsCollection.insertOne(newSlot);
        res.status(201).json({ message: 'Parking slot added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get all parking slots
router.get('/slots', async (req, res) => {
    const db = getDb();
    const slotsCollection = db.collection('slots'); // MongoDB collection

    try {
        // Retrieve all parking slots
        const slots = await slotsCollection.find().toArray();
        res.status(200).json(slots);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
