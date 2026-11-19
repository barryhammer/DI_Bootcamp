const express = require('express');
const app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1', // localhost
        user: 'dummy',
        password: '123456',
        port: 5432, // Right-click server, Properties --> Connection
        database: 'school'
    }
});

app.use(express.json());

const users = [
]

app.set("db",  db);

app.get('/users', (req, res) => {
    // SELECT * FROM students
    db
    .select('*')
    .from('students')
    .where('country', 'Israel')
    //.andWhere('age', '>', 21)
    .orderBy('last_name', 'asc')
    .then(users => res.json(users)); 
});

app.listen(3002, () => {
    console.log("Server is running on port 3002.");
});

app.get('/update', (req, res) => {
    // SELECT * FROM students
    db
    .table('students')
    .where('last_name', 'Doe')
    .update({
    first_name: 'Barry',
    last_name: 'Hammer'
  })
    .then(users => res.json(users))
    .catch((err) => console.log(err)); 
});

// Use Postman to complete this part.
app.post('/post', (req, res) => {
    db('students')
        .insert([
            { first_name: 'Elishewa', last_name: 'Hammer', age: 17, country: 'Israel' },
            { first_name: 'Awigail', last_name: 'Hammer', age: 15, country: 'Israel' }
        ])
        .returning('*')
        .then(users => res.status(201).json(users))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to insert students' });
        });
});


/*
const pgp = require('pg-promise')();
const db = ('postgres://postgres@localhost:5432/dvdrental');

const query = "SELECT * FROM actor WHERE first_name = $1";
const values = "Mary";

db.any(query, values)
    .then(data =>
        )
*/