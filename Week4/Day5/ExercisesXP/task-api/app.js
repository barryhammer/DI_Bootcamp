
const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks');

app.use(express.json());

app.use('/tasks', tasksRouter);

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(3000, () => {
    console.log('Task API running on port 3000');
});
