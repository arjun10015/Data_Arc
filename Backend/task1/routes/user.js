const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const users = require('../data/users');

const router = express.Router();

//Login Route
router.post('/login', (req, res) => {
    const { username, password } = req.body || {};

    // Validation check
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Find user
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password.' });
    }

    // Check password
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid username or password.' });
    }

    // Sign JWT
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ token });
});

// ✅ Protected Profile Route
router.get('/profile', auth, (req, res) => {
    const user = users.find(u => u.id === req.user.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    res.json({
        id: user.id,
        username: user.username,
        email: user.email
    });
});

module.exports = router;
