
const bcrypt = require('bcrypt');
const User = require('../models/usersModel');

// REGISTER
const register = async (req, res, next) => {
    try {
        const { email, username, first_name, last_name, password } = req.body;

        if (!email || !username || !password) {
            return res.status(400).json({
                error: 'Email, username and password are required'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.createUser(
            { email, username, first_name, last_name },
            hashedPassword
        );

        res.status(201).json({
            message: 'User registered successfully',
            user: newUser
        });
    } catch (err) {
        next(err);
    }
};

// LOGIN
const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                error: 'Username and password are required'
            });
        }

        const user = await User.getUserByUsername(username);
        const storedPassword = await User.getPassword(username);

        if (!user || !storedPassword) {
            return res.status(401).json({
                error: 'Invalid username or password'
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            storedPassword.password
        );

        if (!isMatch) {
            return res.status(401).json({
                error: 'Invalid username or password'
            });
        }

        res.json({
            message: 'Login successful',
            user
        });
    } catch (err) {
        next(err);
    }
};

// GET ALL USERS
const getAllUsers = (req, res, next) => {
    User.getAllUsers()
        .then(users => res.json(users))
        .catch(next);
};

// GET USER BY ID
const getUserById = (req, res, next) => {
    User.getUserById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    error: 'User not found'
                });
            }

            res.json(user);
        })
        .catch(next);
};

// UPDATE USER
const updateUser = (req, res, next) => {
    const { email, username, first_name, last_name } = req.body;

    const changes = {};

    if (email !== undefined) changes.email = email;
    if (username !== undefined) changes.username = username;
    if (first_name !== undefined) changes.first_name = first_name;
    if (last_name !== undefined) changes.last_name = last_name;

    if (Object.keys(changes).length === 0) {
        return res.status(400).json({
            error: 'No valid fields provided'
        });
    }

    User.updateUser(req.params.id, changes)
        .then(users => {
            if (users.length === 0) {
                return res.status(404).json({
                    error: 'User not found'
                });
            }

            res.json(users[0]);
        })
        .catch(next);
};

module.exports = {
    register,
    login,
    getAllUsers,
    getUserById,
    updateUser
};
