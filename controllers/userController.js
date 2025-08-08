const User = require('../models/User');
const Job = require('../models/Job');
// @route GET /api/users/me
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// @route PUT /api/users/me
const updateProfile = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.userId, req.body, { new: true }).select('-password');
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


const getSavedJobs = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('savedJobs');
    res.json(user.savedJobs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// @route POST /api/me/save-job
const saveJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    
    if (!jobId) {
      return res.status(400).json({ msg: 'Job ID is required' });
    }

    // Check if job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    // Add job to user's saved jobs if not already saved
    const user = await User.findById(req.userId);
    if (user.savedJobs.includes(jobId)) {
      return res.status(400).json({ msg: 'Job already saved' });
    }

    user.savedJobs.push(jobId);
    await user.save();

    res.json({ msg: 'Job saved successfully' });
  } catch (err) {
    console.error('Error saving job:', err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getProfile, updateProfile, getSavedJobs, saveJob };
