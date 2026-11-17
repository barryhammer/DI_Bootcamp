const express = require('express');
const app = express();

app.use(express.json());

const data = [
    { id: 1, title: "The Andromeda Strain", author: "Michael Crichton", publishedYear: 1969 },
    { id: 2, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", publishedYear: 1979 },
    { id: 3, title: "Murder on the Orient Express", author: "Agatha Christie", publishedYear: 1934 }
];

// GET - Retrieve all posts
app.get('/books', (req, res) => {
    res.json(data);
});

// GET - Retrieve a post by ID
app.get('/books/:bookId', (req, res) => {
    const id = Number(req.params.id);
    const postData = data.find((e) => e.id === id);

    if (postData === undefined) {
        return res.status(404).send("The post is not found.");
    }

    res.json(postData);
});

// POST - Create a new post
app.post('/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !content) {
        return res.status(400).send("Title and content are required.");
    }

    const newBook = {
        id: Math.max(0, ...data.map(post => post.id)) + 1,
        title: title,
        author: author,
        publishedYear: publishedYear
    };

    data.push(newBook);

    res.status(201).json(newPost);
});

app.listen(3000, () => {
    console.log("Book API server is running on port 3000");
});