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

module.exports = { getProfile, updateProfile, getSavedJobs };
