const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activity.controller.js');
const auth = require('../middleware/auth.js');

router.get('/activities', auth.verifyToken, activityController.getActivities);

router.post('/activity', auth.verifyToken, activityController.addActivity);

module.exports = router;
