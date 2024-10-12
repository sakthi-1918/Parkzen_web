const express = require('express');
const bcrypt = require('bcrypt');
const { getDb } = require('./connect'); // Make sure to adjust the path accordingly
const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    const db = getDb();
    const usersCollection = db.collection('users'); // Assuming your collection is named 'users'

    try {
        // Find user by email
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Login successful
        res.json({ message: 'Login successful', userId: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
