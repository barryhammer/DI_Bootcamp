
const express = require('express');
const app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'dummy',
        password: '123456',
        port: 5432,
        database: 'book-api'
    }
});

app.use(express.json());

// GET all books
app.get('/api/books', (req, res) => {
    db('books')
        .select('*')
        .then(books => res.json(books))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to retrieve books' });
        });
});

// GET book by ID
app.get('/api/books/:bookId', (req, res) => {
    db('books')
        .where('id', req.params.bookId)
        .first()
        .then(book => {
            if (!book) {
                return res.status(404).json({ error: 'Book not found' });
            }

            res.status(200).json(book);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to retrieve book' });
        });
});

// POST create a book
app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }

    db('books')
        .insert({ title, author, publishedYear })
        .returning('*')
        .then(books => res.status(201).json(books[0]))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to insert book' });
        });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
});
