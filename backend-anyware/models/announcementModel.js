const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'Too short announcement title'],
      maxlength: [100, 'Too long announcement title'],
    },
    content: {
      type: String,
      required: [true, 'Announcement content is required'],
      minlength: [10, 'Too short announcement content'],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Announcement must have an author'],
    },
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

module.exports = mongoose.model('Announcement', announcementSchema);
