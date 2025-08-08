const express = require('express');
const { getProfile, updateProfile, getSavedJobs, saveJob } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get current user's profile
router.get('/me', authMiddleware, getProfile);

// Update current user's profile
router.put('/me', authMiddleware, updateProfile);

// Get current user's saved jobs
router.get('/me/saved', authMiddleware, getSavedJobs);

// Save a job to user's saved jobs
router.post('/me/save-job', authMiddleware, saveJob);

module.exports = router;
