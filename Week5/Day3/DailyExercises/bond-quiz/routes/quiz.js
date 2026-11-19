
const express = require('express');
const router = express.Router();

const triviaQuestions = require('../models/quizModel');

let currentQuestion = 0;
let score = 0;

// GET /quiz - Start the quiz
router.get('/', (req, res) => {
    currentQuestion = 0;
    score = 0;

    res.json({
        message: 'Welcome to the James Bond Trivia Quiz!',
        questionNumber: currentQuestion + 1,
        question: triviaQuestions[currentQuestion].question
    });
});

// POST /quiz - Submit an answer
router.post('/', (req, res) => {
    const { answer } = req.body;

    if (currentQuestion >= triviaQuestions.length) {
        return res.status(400).json({
            message: 'Quiz finished. Check /quiz/score'
        });
    }

    if (typeof answer !== 'string' || !answer.trim()) {
        return res.status(400).json({
            message: 'Please provide an answer'
        });
    }

    const correctAnswer = triviaQuestions[currentQuestion].answer;

    let feedback;

    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        feedback = 'Correct answer!';
    } else {
        feedback = `Incorrect! The correct answer is ${correctAnswer}`;
    }

    currentQuestion++;

    if (currentQuestion < triviaQuestions.length) {
        res.json({
            feedback: feedback,
            score: score,
            nextQuestionNumber: currentQuestion + 1,
            nextQuestion: triviaQuestions[currentQuestion].question
        });
    } else {
        res.json({
            feedback: feedback,
            message: 'Quiz completed!',
            score: score,
            totalQuestions: triviaQuestions.length,
            next: 'Visit GET /quiz/score to see your final score'
        });
    }
});

// GET /quiz/score - Final score
router.get('/score', (req, res) => {
    if (currentQuestion < triviaQuestions.length) {
        return res.json({
            message: 'Quiz is not finished yet',
            score: score,
            questionsAnswered: currentQuestion
        });
    }

    res.json({
        message: 'Your final James Bond trivia score!',
        score: score,
        totalQuestions: triviaQuestions.length
    });
});

module.exports = router;
