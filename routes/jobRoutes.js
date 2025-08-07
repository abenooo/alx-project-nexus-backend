const express = require('express');
const {
  createJob,
  getAllJobs,
  getJobById,
  filterJobs
} = require('../controllers/jobController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const { saveJob, unsaveJob } = require('../controllers/jobController');
// Save/Unsave
router.post('/:id/save', authMiddleware, saveJob);
router.delete('/:id/save', authMiddleware, unsaveJob);
// Public
router.get('/', getAllJobs);         // List all jobs
router.get('/filter', filterJobs);   // Filter jobs
router.get('/:id', getJobById);      // Single job by ID

// Protected
router.post('/', authMiddleware, createJob);  // Create job

module.exports = router;
