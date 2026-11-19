
const express = require('express');
const app = express();

const postsRoutes = require('./server/routes/postsRoutes');

app.use(express.json());

app.use('/posts', postsRoutes);

// Invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Server errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
