const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  country: String,
  region: String,
  jobType: String, // e.g., full-time, part-time
  category: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
