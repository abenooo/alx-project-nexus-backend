
const express = require('express');
const {
  applyToJob,
  getUserApplications,
  deleteApplication
} = require('../controllers/applicationController');

const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, applyToJob);       // Apply to job
router.get('/', authMiddleware, getUserApplications); // Get user’s applications
router.delete('/:id', authMiddleware, deleteApplication); // Delete application

module.exports = router;
