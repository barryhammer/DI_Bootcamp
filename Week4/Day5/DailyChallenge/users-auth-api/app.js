
const express = require('express');
const path = require('path');

const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);

app.get('/', (req, res) => {
    res.redirect('/register.html');
});

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
