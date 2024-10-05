const express = require('express');
const router = express.Router();
const announcementController = require('../services/announcementController');
const { createAnnouncementValidator, updateAnnouncementValidator, deleteAnnouncementValidator } = require('../utits/validator/announcementValidator');

// Routes
router.post('/create', createAnnouncementValidator, announcementController.createAnnouncement);
router.get('/list', announcementController.getAllAnnouncements);
router.get('/:id', announcementController.getAnnouncementById);
router.put('/update/:id', updateAnnouncementValidator, announcementController.updateAnnouncement);
router.delete('/delete/:id', deleteAnnouncementValidator, announcementController.deleteAnnouncement);

module.exports = router;
