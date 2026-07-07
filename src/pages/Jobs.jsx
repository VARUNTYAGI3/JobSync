import React from "react";
import { useState, useEffect } from "react";
import AddJobForm from "../components/jobs/AddJobForm";
import SearchBar from "../components/jobs/SearchBar";
import JobList from "../components/jobs/JobList";
import { fetchJobs } from "../services/jobService";
import Loading from "../components/common/Loading";
import { useMemo } from "react";
import { useCallback } from "react";
const Jobs = () => {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await fetchJobs();

        const formattedJobs = data.map((user) => ({
          id: user.id,
          title: "Software Engineer",
          company: user.company.name,
          location: user.address.city,
          salary: "15 LPA",
        }));
        setJobs(formattedJobs);
      } catch (error) {
        setError("Failed to fetch jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);
  const filteredJobs = useMemo(() => {
    console.log("Filtering Jobs...");

    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase()),
    );
  }, [jobs, search]);
  const editJob = useCallback((job) => {
    setTitle(job.title);
    setCompany(job.company);
    setLocation(job.location);
    setSalary(job.salary);

    setEditingId(job.id);
  }, []);
  const cancelEdit = useCallback(() => {
    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
    setEditingId(null);
  }, []);
  const deleteJob = useCallback(
    (id) => {
      const updatedJobs = jobs.filter((job) => job.id !== id);

      setJobs(updatedJobs);
    },
    [jobs],
  );
  function saveJob() {
    if (!title || !company || !location || !salary) {
      return;
    }

    if (editingId !== null) {
      const updatedJobs = jobs.map((job) =>
        job.id === editingId
          ? {
              ...job,
              title,
              company,
              location,
              salary,
            }
          : job,
      );

      setJobs(updatedJobs);

      setEditingId(null);
    } else {
      const newJob = {
        id: Date.now(),
        title,
        company,
        location,
        salary,
      };

      setJobs([...jobs, newJob]);
    }

    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
  }
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-8">
        <AddJobForm
          title={title}
          setTitle={setTitle}
          company={company}
          setCompany={setCompany}
          location={location}
          setLocation={setLocation}
          salary={salary}
          setSalary={setSalary}
          saveJob={saveJob}
          editingId={editingId}
          cancelEdit={cancelEdit}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
          resultCount={filteredJobs.length}
        />

        <h2>Total Jobs : {jobs.length}</h2>

        <JobList jobs={filteredJobs} deleteJob={deleteJob} editJob={editJob} />
      </div>
    </div>
  );
};

export default Jobs;
