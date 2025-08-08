const express = require('express');
const { 
  getProfile, 
  updateProfile, 
  getSavedJobs, 
  saveJob,
  unsaveJob 
} = require('../controllers/userController');
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

// Remove a job from user's saved jobs
router.delete('/me/saved/:jobId', authMiddleware, unsaveJob);

module.exports = router;
