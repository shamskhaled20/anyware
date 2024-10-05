const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
      required: [true, 'Question text is required'],
    },
    options: {
      type: [String],
      required: [true, 'Options are required'],
      validate: [arrayLimit, 'A question must have at least 2 options'],
    },
    correctAnswer: {
      type: String,
      required: [true, 'Correct answer is required'],
    },
  },
  { _id: false }
);

function arrayLimit(val) {
  return val.length >= 2 && val.length <= 10;
}

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'Too short quiz title'],
      maxlength: [100, 'Too long quiz title'],
    },
    description: {
      type: String,
      required: [true, 'Quiz description is required'],
      minlength: [10, 'Too short quiz description'],
    },
    questions: [questionSchema],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Quiz', quizSchema);
