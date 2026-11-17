const express = require('express');
const app = express();

// localhost:3000
app.listen(3000, () => {
    console.log("The server is running.")
})

// Home page
app.get('/', (req, res) => {
    res.json([
        { firstName: "Barry", lastName: "Hammer"}
    ])
});

const users = [
        { id: 1, firstName: "Shoshanna", lastName: "Hammer", age: 45},
        { id: 2, firstName: "Elishewa", lastName: "Hammer", age: 17},
        { id: 3, firstName: "Awigail", lastName: "Hammer", age: 15}
]

app.get('/users', (req, res) => {
    res.json(users)
});

app.get('/users/search', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    const userData = users.filter((e) => // .filter() returns an array of all matching objects, or an empty array if none match.
        (!firstName || e.firstName === firstName) && // If firstName was not provided, !firstName evaluates to true.
        (!lastName || e.lastName === lastName)
    );

    if (userData.length === 0) {
        return res.status(404).send("The user is not found.");
    } else {
        res.json(userData);
    }
});

app.get('/users/:userID', (req, res) => {
    const id = req.params.userID;
    const userData = users.find((e) => e.id == id);
    if (userData === undefined) {
        return res.status(404).send("The user is not found.")
        // res.json([{msg: "The ID is incorrect."}])
    } else {
        res.json(userData)
    }
});