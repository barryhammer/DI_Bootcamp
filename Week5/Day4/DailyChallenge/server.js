
require('dotenv').config();

const express = require('express');
const app = express();

const usersRoutes = require('./server/routes/usersRoutes');

app.use(express.json());

app.use('/', usersRoutes);

// Invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Server errors
app.use((err, req, res, next) => {
    console.error(err);

    if (err.code === '23505') {
        return res.status(409).json({
            error: 'Username or email already exists'
        });
    }

    if (err.code === '22P02') {
        return res.status(400).json({
            error: 'Invalid ID format'
        });
    }

    res.status(500).json({
        error: 'Internal server error'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
