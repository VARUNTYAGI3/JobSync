import React from "react";
import JobCard from "./JobCard";
const JobList = ({ jobs, deleteJob , editJob }) => {
  return (
    <div>
      {jobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                deleteJob={deleteJob}
                editJob={editJob}
              />
            ))}
          </div>
      ) : (
        <p>No Jobs Found.</p>
      )}
    </div>
  );
};

export default JobList;
