const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activity.controller.js');

router.get('/activities', activityController.getActivities);

router.post('/activity', activityController.addActivity);

module.exports = router;
