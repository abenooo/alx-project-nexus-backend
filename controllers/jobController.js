const Job = require('../models/Job');

// @POST /api/jobs
const createJob = async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      createdBy: req.userId
    });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// @GET /api/jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// @GET /api/jobs/:id
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ msg: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// @GET /api/jobs/filter?country=Ethiopia&category=Software&keyword=react
const filterJobs = async (req, res) => {
  try {
    const query = {};

    if (req.query.category) query.category = req.query.category;
    if (req.query.country) query.country = req.query.country;
    if (req.query.region) query.region = req.query.region;
    if (req.query.jobType) query.jobType = req.query.jobType;

    if (req.query.keyword) {
      query.title = { $regex: req.query.keyword, $options: 'i' };
    }

    const jobs = await Job.find(query).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  filterJobs
};
