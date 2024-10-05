const Announcement = require('../models/announcementModel');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utits/api_error');

exports.createAnnouncement = asyncHandler(async (req, res) => {
    const { title, content, author } = req.body;
    const announcement = await Announcement.create({ title, content, author });
    res.status(201).json({ data: announcement });
});

exports.getAllAnnouncements = asyncHandler(async (req, res) => {
    const announcements = await Announcement.find();
    res.status(200).json({ results: announcements.length, data: announcements });
});

exports.getAnnouncementById = asyncHandler(async (req, res, next) => {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
        return next(new ApiError(`No announcement found with ID ${req.params.id}`, 404));
    }
    res.status(200).json({ data: announcement });
});

exports.updateAnnouncement = asyncHandler(async (req, res, next) => {
    const announcement = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!announcement) {
        return next(new ApiError(`No announcement found with ID ${req.params.id}`, 404));
    }
    res.status(200).json({ data: announcement });
});

exports.deleteAnnouncement = asyncHandler(async (req, res, next) => {
    const announcement = await Announcement.findByIdAndDelete(req.params.id);
    if (!announcement) {
        return next(new ApiError(`No announcement found with ID ${req.params.id}`, 404));
    }
    res.status(204).send();
});
