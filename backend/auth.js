const express = require('express');
const bcrypt = require('bcrypt');
const { getDb } = require('./connect'); // Your MongoDB connection module
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const { name, email, phone, freqParking, recentParking, rollNumber, password } = req.body;
    const db = getDb();
    const usersCollection = db.collection('users');

    try {
        const existingUser = await usersCollection.findOne({ email, rollNumber });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { name, email, phone, freqParking, recentParking, rollNumber, password: hashedPassword };

        await usersCollection.insertOne(newUser); 
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const db = getDb();
    const usersCollection = db.collection('users');

    try {
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Profile Retrieval by Email
router.post('/profile', async (req, res) => {
    const { email } = req.body; 
    const db = getDb();
    const usersCollection = db.collection('users');

    try {
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { password, ...userData } = user; // Omit password for security
        res.json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
