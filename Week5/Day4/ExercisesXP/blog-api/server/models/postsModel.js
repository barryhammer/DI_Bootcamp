
const db = require('../config/db');

const getAllPosts = () => {
    return db('posts').select('*');
};

const getPostById = (id) => {
    return db('posts').where('id', id).first();
};

const createPost = (post) => {
    return db('posts').insert(post).returning('*');
};

const updatePost = (id, post) => {
    return db('posts')
        .where('id', id)
        .update(post)
        .returning('*');
};

const deletePost = (id) => {
    return db('posts')
        .where('id', id)
        .del()
        .returning('*');
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
