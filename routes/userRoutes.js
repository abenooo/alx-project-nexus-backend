const express = require('express');
const { getProfile, updateProfile, getSavedJobs } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/me', authMiddleware, getProfile);
router.put('/me', authMiddleware, updateProfile);
router.get('/me/saved', authMiddleware, getSavedJobs); // ✅ NEW
module.exports = router;
