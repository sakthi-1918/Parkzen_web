const express = require('express');
const router = express.Router();
const { getDb } = require('./connect'); // Adjust the path if needed

// POST Route to Insert Slot Data
router.post('/addSlot', async (req, res) => {
    const { title, slots, available, booked, status, image } = req.body;
    const db = getDb();
    const slotCollection = db.collection('slots');

    try {
        const newSlot = { title, slots, available, booked, status, image };
        await slotCollection.insertOne(newSlot);
        res.status(201).json({ message: 'Slot added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding slot', error });
    }
});

// GET Route to Retrieve Slot Data
router.get('/slots', async (req, res) => {
    const db = getDb();
    const slotsCollection = db.collection('slots');

    try {
        const slots = await slotsCollection.find().toArray();
        res.json(slots);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching slots' });
    }
});

module.exports = router;
