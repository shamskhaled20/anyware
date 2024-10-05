const { check } = require('express-validator');
const validatorMiddleware = require('../../middleware/validatorMiddleware');

exports.createAnnouncementValidator = [
    check('title')
        .notEmpty().withMessage('Title is required')
        .isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
    check('content')
        .notEmpty().withMessage('Content is required')
        .isLength({ min: 10 }).withMessage('Content must be at least 10 characters'),
    check('author')
        .notEmpty().withMessage('Author ID is required')
        .isMongoId().withMessage('Invalid Author ID format'),
    validatorMiddleware,
];

exports.updateAnnouncementValidator = [
    check('id').isMongoId().withMessage('Invalid ID format'),
    check('title')
        .optional()
        .isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
    check('content')
        .optional()
        .isLength({ min: 10 }).withMessage('Content must be at least 10 characters'),
    check('author')
        .optional()
        .isMongoId().withMessage('Invalid Author ID format'),
    validatorMiddleware,
];


exports.deleteAnnouncementValidator = [
    check('id').isMongoId().withMessage('Invalid ID format'),
    validatorMiddleware,
];
