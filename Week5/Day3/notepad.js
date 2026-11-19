const express = require('express');
const app = express();

app.use(express.json());

const users = [
        { id: 1, firstName: "Shoshanna", lastName: "Hammer", age: 45},
        { id: 2, firstName: "Elishewa", lastName: "Hammer", age: 17},
        { id: 3, firstName: "Awigail", lastName: "Hammer", age: 15}
]

const getUsers = (_, res) => { // Underscore shows variable is not being used.
    res.json(users)
}

const getUserByName = (req, res) => {

}

const getUserById = (req, res) = {

}

const createUser = (req, res) = {
    const newUser
}


// GET - Retrieve all posts
app.get('/posts', (req, res) => {
    res.json(data);
});

// GET - Retrieve a post by ID
app.get('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const postData = data.find((e) => e.id === id);

    if (postData === undefined) {
        return res.status(404).send("The post is not found.");
    }

    res.json(postData);
});

// POST - Create a new post
app.post('/post', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send("Title and content are required.");
    }

    const newPost = {
        id: Math.max(0, ...data.map(post => post.id)) + 1,
        title: title,
        content: content
    };

    data.push(newPost);

    res.status(201).json(newPost);
});

// PUT - Update an existing post
app.put('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const postData = data.find((e) => e.id === id);

    if (postData === undefined) {
        return res.status(404).send("The post is not found.");
    }

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send("Title and content are required.");
    }

    postData.title = title;
    postData.content = content;

    res.json(postData);
});

// DELETE - Remove a post
app.delete('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = data.findIndex((e) => e.id === id);

    if (index === -1) {
        return res.status(404).send("The post is not found.");
    }

    const deletedPost = data.splice(index, 1);

    res.json({
        message: "Post deleted successfully.",
        post: deletedPost[0]
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Handle server errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
});