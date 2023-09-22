import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import JobApply from "../JobApply/JobApply";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      // console.log(jobsApplied, jobs, storedJobIds);
    }
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center p-4">
        Applied Jobs: {appliedJobs.length}
        <div>
          {appliedJobs.map((jobApply) => (
            <JobApply key={jobApply.id} jobApply={jobApply}></JobApply>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default AppliedJobs;
