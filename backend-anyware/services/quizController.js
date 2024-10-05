const Quiz = require('../models/quizModel');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utits/api_error');

exports.createQuiz = asyncHandler(async (req, res) => {
    const { title, description, questions } = req.body;
    const quiz = await Quiz.create({ title, description, questions });
    res.status(201).json({ data: quiz });
});

exports.getAllQuizzes = asyncHandler(async (req, res) => {
    const quizzes = await Quiz.find();
    res.status(200).json({ results: quizzes.length, data: quizzes });
});

exports.getQuizById = asyncHandler(async (req, res, next) => {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
        return next(new ApiError(`No quiz found with ID ${req.params.id}`, 404));
    }
    res.status(200).json({ data: quiz });
});

exports.updateQuiz = asyncHandler(async (req, res, next) => {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!quiz) {
        return next(new ApiError(`No quiz found with ID ${req.params.id}`, 404));
    }
    res.status(200).json({ data: quiz });
});

exports.deleteQuiz = asyncHandler(async (req, res, next) => {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
        return next(new ApiError(`No quiz found with ID ${req.params.id}`, 404));
    }
    res.status(204).send();
});
