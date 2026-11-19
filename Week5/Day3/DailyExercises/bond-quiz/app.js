
const express = require('express');
const app = express();

const quizRouter = require('./routes/quiz');

app.use(express.json());

app.use('/quiz', quizRouter);

app.listen(3000, () => {
    console.log('James Bond Quiz running on port 3000');
});
