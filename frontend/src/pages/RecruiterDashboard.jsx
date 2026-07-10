import { useState } from "react";
import AddJobForm from "../components/jobs/AddJobForm";
import { createJob } from "../services/jobService";

const RecruiterDashboard = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const [workMode, setWorkMode] = useState("On-site");
  const [experience, setExperience] = useState("0-1 Years");
  const [type, setType] = useState("Full-Time");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");

  async function saveJob() {
    try {
      await createJob({
        title,
        company,
        location,
        salary,
        workMode,
        experience,
        type,
        skills: skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
        description,
      });

      alert("Job Posted Successfully!");

      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");
      setSkills("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Recruiter Dashboard
      </h1>
 <aside className="lg:sticky lg:top-6 lg:self-start">
      <AddJobForm
        title={title}
        setTitle={setTitle}
        company={company}
        setCompany={setCompany}
        location={location}
        setLocation={setLocation}
        salary={salary}
        setSalary={setSalary}
        workMode={workMode}
        setWorkMode={setWorkMode}
        experience={experience}
        setExperience={setExperience}
        type={type}
        setType={setType}
        skills={skills}
        setSkills={setSkills}
        description={description}
        setDescription={setDescription}
        saveJob={saveJob}
        editingId={null}
      />
      </aside>
    </div>
  );
};

export default RecruiterDashboard;