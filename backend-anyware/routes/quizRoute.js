const express = require('express');
const router = express.Router();
const quizController = require('../services/quizController');
const { createQuizValidator, updateQuizValidator, deleteQuizValidator } = require('../utits/validator/quizValidator');

// Routes
router.post('/create', createQuizValidator, quizController.createQuiz);
router.get('/list', quizController.getAllQuizzes);
router.get('/:id', quizController.getQuizById);
router.put('/update/:id', updateQuizValidator, quizController.updateQuiz);
router.delete('/delete/:id', deleteQuizValidator, quizController.deleteQuiz);

module.exports = router;
