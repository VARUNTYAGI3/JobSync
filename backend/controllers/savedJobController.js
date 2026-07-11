const SavedJob = require("../models/SavedJob");
const asyncHandler = require("../utils/asyncHandler");

// Save Job
const saveJob = asyncHandler(async (req, res) => {
  const { jobId } = req.body;

  const exists = await SavedJob.findOne({
    student: req.user._id,
    job: jobId,
  });

  if (exists) {
    res.status(400);
    throw new Error("Job already saved");
  }

  const saved = await SavedJob.create({
    student: req.user._id,
    job: jobId,
  });

  res.status(201).json(saved);
});

// Get Saved Jobs
const getSavedJobs = asyncHandler(async (req, res) => {
  const jobs = await SavedJob.find({
    student: req.user._id,
  }).populate("job");

  res.status(200).json(jobs);
});

// Remove Saved Job
const removeSavedJob = asyncHandler(async (req, res) => {
  await SavedJob.findByIdAndDelete(req.params.id);

  res.json({
    message: "Job removed",
  });
});

module.exports = {
  saveJob,
  getSavedJobs,
  removeSavedJob,
};