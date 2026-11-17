const express = require('express');
const { fetchPosts } = require('./data/dataService.js');

const app = express();
const PORT = 3000;

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log("Posts retrieved successfully.");
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Unable to retrieve posts." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});