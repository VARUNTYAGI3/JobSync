import { useEffect, useState } from "react";
import { fetchRecruiterJobs } from "../services/jobService";

const useRecruiterJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await fetchRecruiterJobs();
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadJobs();
  }, []);

  return {
    jobs,
    setJobs,
  };
};

export default useRecruiterJobs;