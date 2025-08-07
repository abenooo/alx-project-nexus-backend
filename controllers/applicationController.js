const Application = require('../models/Application');
const Job = require('../models/Job');

// @POST /api/applications
const applyToJob = async (req, res) => {
  const { jobId, coverLetter } = req.body;

  if (!jobId) return res.status(400).json({ msg: 'Job ID is required' });

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ msg: 'Job not found' });

    const application = await Application.create({
      user: req.userId,
      job: jobId,
      coverLetter
    });

    res.status(201).json(application);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ msg: 'Already applied to this job' });
    }
    res.status(500).json({ msg: err.message });
  }
};

// @GET /api/applications
const getUserApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.userId })
      .populate('job');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ msg: 'Application not found' });
    }

    // Make sure user owns the application
    if (application.user.toString() !== req.userId) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await application.deleteOne();

    res.json({ msg: 'Application removed' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { applyToJob, getUserApplications, deleteApplication };
