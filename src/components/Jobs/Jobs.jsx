import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { Helmet } from "react-helmet";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Career Hub || Jobs</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-4xl font-semibold">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-3">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className={dataLength === jobs.length ? "hidden" : "flex"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="bg-[#4a5fe9] hover:bg-[#374394] text-white py-3 px-6 text-base font-semibold rounded-md mt-2"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
