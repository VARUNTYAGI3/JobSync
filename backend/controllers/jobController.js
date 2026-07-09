const Job = require("../models/Job");
const asyncHandler = require("../utils/asyncHandler");
// GET /jobs
const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find();

  res.status(200).json(jobs);
});

// GET /jobs/:id
const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  res.status(200).json(job);
});

// POST /jobs
const createJob = asyncHandler(async (req, res) => {
  const job = await Job.create(req.body);

  res.status(201).json(job);
});

// PUT /jobs/:id
const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  res.status(200).json(job);
});

// DELETE /jobs/:id
const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  res.status(200).json({
    message: "Job deleted successfully",
  });
});

module.exports = {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};