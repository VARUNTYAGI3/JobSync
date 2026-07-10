import React from "react";
import { useState } from "react";
import AddJobForm from "../components/jobs/AddJobForm";
import SearchBar from "../components/jobs/SearchBar";
import JobList from "../components/jobs/JobList";
import Loading from "../components/common/Loading";
import useJobs from "../hooks/useJobs";
import {
  createJob,
  updateJob,
  deleteJob as deleteJobAPI,
} from "../services/jobService";
import { useMemo } from "react";
import { useCallback } from "react";
import useAuth from "../hooks/useAuth";
const Jobs = () => {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [editingId, setEditingId] = useState(null);
  const { jobs, setJobs, loading, error } = useJobs();
  const [workMode, setWorkMode] = useState("On-site");
  const [experience, setExperience] = useState("0-1 Years");
  const [type, setType] = useState("Full-Time");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuth();
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
    async (id) => {
      try {
        await deleteJobAPI(id);

        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      } catch (error) {
        console.error(error);
      }
    },
    [setJobs],
  );
  const saveJob = async () => {
    if (!title || !company || !location || !salary) {
      return;
    }

    if (editingId !== null) {
      try {
        const updatedJob = await updateJob(editingId, {
          title,
          company,
          location,
          salary: Number(salary) * 100000,
          description: `${title} position at ${company}`,
          type: "Full-Time",
        });

        setJobs((prevJobs) =>
          prevJobs.map((job) => (job.id === editingId ? updatedJob : job)),
        );

        setEditingId(null);
      } catch (error) {
        console.error(error);
      }
    } else {
      const newJob = await createJob({
        title,
        company,
        location,
        salary: Number(salary) * 100000,
        description: `${title} position at ${company}`,
        type: "Full-Time",
      });

      setJobs((prevJobs) => [...prevJobs, newJob]);
    }

    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
  };
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
        <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            We could not load the jobs
          </h2>
          <p className="mt-2 text-sm text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
  
          <main className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.16)] sm:p-6">
            <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div>
                <p className="text-sm font-medium text-blue-600">
                  Discover fresh roles
                </p>
                <h2 className="text-xl font-semibold text-slate-900">
                  {filteredJobs.length} opportunity
                  {filteredJobs.length === 1 ? "" : "s"} ready to explore
                </h2>
              </div>
              <div className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm">
                Total jobs: {jobs.length}
              </div>
            </div>

            <div className="mt-5">
              <SearchBar
                search={search}
                setSearch={setSearch}
                resultCount={filteredJobs.length}
              />
            </div>

            <JobList
              jobs={filteredJobs}
              deleteJob={deleteJob}
              editJob={editJob}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
