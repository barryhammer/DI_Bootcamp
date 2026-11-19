const express = require('express');
const app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'dummy',
        password: '123456',
        database: 'Hollywood',
        port: 5432
    }
});

app.use(express.json());

app.set("db", db);

app.get('/', (req, res) => {
    db
    .select('first_name', 'last_name').from('actors')
    .then(actors =>
            res.send(actors)
    )

})

app.listen(3000, () => console.log('Example app listening on port 3000!'));