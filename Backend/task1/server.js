require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user');
const path = require('path'); 
const app = express();

//  Use built-in body parser for JSON
app.use(express.json());

//  API routes
app.use('/api', userRoutes);

//  Serve static files from /public (frontend)
app.use(express.static(path.join(__dirname, 'public')));

//  Base route (optional)
app.get('/', (req, res) => {
    res.send('✅ API is running. Use POST /api/login or GET /api/profile');
});

// Ignore favicon 404
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
