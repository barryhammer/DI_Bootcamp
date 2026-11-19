
const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../users.json');

// Read users from JSON file
const readUsers = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(data);

    if (!Array.isArray(users)) {
        throw new Error('Invalid users file');
    }

    return users;
};

// Save users to JSON file
const writeUsers = async (users) => {
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
};

// Remove passwords from responses
const safeUser = ({ password, ...user }) => user;

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, email, username, password } = req.body;

        if (
            typeof first_name !== 'string' || !first_name.trim() ||
            typeof last_name !== 'string' || !last_name.trim() ||
            typeof email !== 'string' || !email.trim() ||
            typeof username !== 'string' || !username.trim() ||
            typeof password !== 'string' || !password
        ) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const users = await readUsers();

        const usernameExists = users.some(user =>
            user.username.toLowerCase() === username.trim().toLowerCase()
        );

        const emailExists = users.some(user =>
            user.email.toLowerCase() === email.trim().toLowerCase()
        );

        if (usernameExists || emailExists) {
            return res.status(409).json({
                message: 'Username or email already exists'
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: users.length > 0
                ? Math.max(...users.map(user => user.id)) + 1
                : 1,
            first_name: first_name.trim(),
            last_name: last_name.trim(),
            email: email.trim(),
            username: username.trim(),
            password: hashedPassword
        };

        users.push(newUser);

        await writeUsers(users);

        res.status(201).json({
            message: 'Registration successful!',
            user: safeUser(newUser)
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed to register user'
        });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (typeof username !== 'string' || !username.trim() ||
            typeof password !== 'string' || !password) {
            return res.status(400).json({
                message: 'Username and password are required'
            });
        }

        const users = await readUsers();

        const user = users.find(user =>
            user.username.toLowerCase() === username.trim().toLowerCase()
        );

        if (!user) {
            return res.status(401).json({
                message: 'Invalid username or password'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid username or password'
            });
        }

        res.json({
            message: `Welcome back, ${user.first_name}!`,
            user: safeUser(user)
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed to log in'
        });
    }
});

// GET ALL USERS
router.get('/users', async (req, res) => {
    try {
        const users = await readUsers();
        res.json(users.map(safeUser));
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed to retrieve users'
        });
    }
});

// GET USER BY ID
router.get('/users/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const users = await readUsers();
        const user = users.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json(safeUser(user));

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed to retrieve user'
        });
    }
});

// UPDATE USER
router.put('/users/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const users = await readUsers();
        const user = users.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const allowedFields = ['first_name', 'last_name', 'email', 'username'];
        const updates = Object.keys(req.body);

        if (updates.length === 0 ||
            updates.some(field => !allowedFields.includes(field))) {
            return res.status(400).json({
                message: 'Provide valid user fields'
            });
        }

        for (const field of updates) {
            if (typeof req.body[field] !== 'string' ||
                !req.body[field].trim()) {
                return res.status(400).json({
                    message: `${field} must be a non-empty string`
                });
            }
        }

        const duplicate = users.some(other =>
            other.id !== id && (
                (req.body.username &&
                    other.username.toLowerCase() === req.body.username.trim().toLowerCase()) ||
                (req.body.email &&
                    other.email.toLowerCase() === req.body.email.trim().toLowerCase())
            )
        );

        if (duplicate) {
            return res.status(409).json({
                message: 'Username or email already exists'
            });
        }

        for (const field of updates) {
            user[field] = req.body[field].trim();
        }

        await writeUsers(users);

        res.json({
            message: 'User updated successfully',
            user: safeUser(user)
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed to update user'
        });
    }
});

module.exports = router;
