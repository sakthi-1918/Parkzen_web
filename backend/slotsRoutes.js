const express = require('express');
const router = express.Router();
const { getDb } = require('./connect'); // MongoDB connection

// Route to add a new parking slot
router.post('/addSlot', async (req, res) => {
    const { title, image, slots } = req.body; // slots is expected to be an array
    const db = getDb();
    const slotsCollection = db.collection('slots'); // MongoDB collection

    try {
        const totalSlots = slots.length;
        const availableCount = slots.filter(slot => slot.available).length;
        const bookedCount = totalSlots - availableCount;

        // Insert new parking slot
        const newSlot = { 
            title, 
            image, 
            slots, 
            totalSlots, 
            available: availableCount, 
            booked: bookedCount, 
            status: availableCount > 0 ? "Available" : "Fully Booked"
        };

        await slotsCollection.insertOne(newSlot);
        res.status(201).json({ message: 'Parking slot added successfully', slot: newSlot });
    } catch (error) {
        console.error("Error inserting slot:", error); // Log error to console for debugging
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
        console.error("Error retrieving slots:", error); // Log error to console for debugging
        res.status(500).json({ message: error.message });
    }
});
router.get('/testConnection', async (req, res) => {
    const db = getDb();
    const slotsCollection = db.collection('slots');

    try {
        const result = await slotsCollection.findOne(); // Fetch one document
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Database connection error", error });
    }
});
module.exports = router;
