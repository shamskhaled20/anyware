const { check } = require('express-validator');
const validatorMiddleware = require('../../middleware/validatorMiddleware');

exports.createQuizValidator = [
    check('title')
        .notEmpty().withMessage('Title is required')
        .isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
    check('description')
        .notEmpty().withMessage('Description is required')
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
    check('questions')
        .isArray().withMessage('Questions must be an array')
        .notEmpty().withMessage('Questions cannot be empty'),
    validatorMiddleware,
];

exports.updateQuizValidator = [
    check('id').isMongoId().withMessage('Invalid ID format'),
    validatorMiddleware,
];

exports.deleteQuizValidator = [
    check('id').isMongoId().withMessage('Invalid ID format'),
    validatorMiddleware,
];
