
const Post = require('../models/postsModel');

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.getAllPosts();
        res.json(posts);
    } catch (err) {
        next(err);
    }
};

const getPostById = async (req, res, next) => {
    try {
        const post = await Post.getPostById(req.params.id);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(post);
    } catch (err) {
        next(err);
    }
};

const createPost = async (req, res, next) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content required' });
        }

        const posts = await Post.createPost({ title, content });
        res.status(201).json(posts[0]);
    } catch (err) {
        next(err);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content required' });
        }

        const posts = await Post.updatePost(req.params.id, { title, content });

        if (posts.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(posts[0]);
    } catch (err) {
        next(err);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const posts = await Post.deletePost(req.params.id);

        if (posts.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json({ message: 'Post deleted', post: posts[0] });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
