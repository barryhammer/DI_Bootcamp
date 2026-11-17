const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const emojis = [
    { emoji: "😀", name: "Smile" },
    { emoji: "🐶", name: "Dog" },
    { emoji: "🌮", name: "Taco" },
    { emoji: "🐱", name: "Cat" },
    { emoji: "🍕", name: "Pizza" },
    { emoji: "🚗", name: "Car" },
    { emoji: "🌞", name: "Sun" },
    { emoji: "⚽", name: "Soccer" },
    { emoji: "🎸", name: "Guitar" },
    { emoji: "🚀", name: "Rocket" },
    { emoji: "🍎", name: "Apple" },
    { emoji: "🐘", name: "Elephant" }
];

let score = 0;
let currentQuestion = null;
let answered = false;
let questionId = 0;
const leaderboard = [];

// Generate a random question
app.get("/api/question", (req, res) => {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];

    const incorrect = emojis
        .filter(item => item.name !== correct.name)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const options = [correct, ...incorrect]
        .map(item => item.name)
        .sort(() => Math.random() - 0.5);

    questionId++;

    currentQuestion = {
        id: questionId,
        answer: correct.name
    };

    answered = false;

    res.json({
        id: questionId,
        emoji: correct.emoji,
        options: options,
        score: score
    });
});

// Check the player's guess
app.post("/api/guess", (req, res) => {
    const { id, guess } = req.body;

    if (
        !currentQuestion ||
        answered ||
        id !== currentQuestion.id
    ) {
        return res.status(400).json({
            message: "Invalid or already answered question."
        });
    }

    const correct = guess === currentQuestion.answer;

    if (correct) {
        score++;
    }

    answered = true;

    res.json({
        correct: correct,
        answer: currentQuestion.answer,
        score: score
    });
});

// Return the leaderboard
app.get("/api/leaderboard", (req, res) => {
    const topScores = [...leaderboard]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

    res.json(topScores);
});

// Save a player's score
app.post("/api/save-score", (req, res) => {
    const { name } = req.body;

    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({
            message: "Please enter your name."
        });
    }

    leaderboard.push({
        name: name.trim(),
        score: score
    });

    score = 0;
    currentQuestion = null;
    answered = false;

    res.json({
        message: "Score saved successfully!"
    });
});

app.listen(PORT, () => {
    console.log(`Emoji game running at http://localhost:${PORT}`);
});