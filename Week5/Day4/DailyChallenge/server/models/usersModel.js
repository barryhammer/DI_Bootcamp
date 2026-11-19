
const db = require('../config/db');

const getAllUsers = () => {
    return db('users').select('*');
};

const getUserById = (id) => {
    return db('users').where('id', id).first();
};

const getUserByUsername = (username) => {
    return db('users').where('username', username).first();
};

const getPassword = (username) => {
    return db('hashpwd').where('username', username).first();
};

const createUser = async (user, hashedPassword) => {
    return db.transaction(async trx => {
        const [newUser] = await trx('users')
            .insert(user)
            .returning('*');

        await trx('hashpwd').insert({
            username: newUser.username,
            password: hashedPassword
        });

        return newUser;
    });
};

const updateUser = (id, user) => {
    return db('users')
        .where('id', id)
        .update(user)
        .returning('*');
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    getPassword,
    createUser,
    updateUser
};
