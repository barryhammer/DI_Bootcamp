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