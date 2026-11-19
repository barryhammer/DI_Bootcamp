
const express = require('express');
const router = express.Router();

const books = [];
let nextId = 1;

// GET - Retrieve all books
router.get('/', (req, res) => {
    res.json(books);
});

// POST - Add a new book
router.post('/', (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            error: 'Title and author are required'
        });
    }

    const newBook = {
        id: nextId++,
        title: title,
        author: author,
        publishedYear: publishedYear
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// PUT - Update a book
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(item => item.id === id);

    if (!book) {
        return res.status(404).json({
            error: 'Book not found'
        });
    }

    const { title, author, publishedYear } = req.body;

    if (title !== undefined) {
        book.title = title;
    }

    if (author !== undefined) {
        book.author = author;
    }

    if (publishedYear !== undefined) {
        book.publishedYear = publishedYear;
    }

    res.json(book);
});

// DELETE - Remove a book
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = books.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Book not found'
        });
    }

    const deletedBook = books.splice(index, 1);

    res.json({
        message: 'Book deleted successfully',
        book: deletedBook[0]
    });
});

module.exports = router;
