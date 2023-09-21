import { useLoaderData, useParams } from "react-router-dom";
import mony from "../../assets/icons/money.png";
import jobCalendar from "../../assets/icons/calendar.png";
import location2 from "../../assets/icons/location2.png";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(id, job);
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold p-3">Job Details</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3 space-y-4 p-3">
          <h1 className="text-xl font-semibold">
            Job Description:
            <span className="text-base font-normal">{job.job_description}</span>
          </h1>
          <h1 className="text-xl font-semibold">
            Job Responsibility:
            <span className="text-base font-normal ms-1">
              {job.job_responsibility}
            </span>
          </h1>
          <h2 className="text-xl font-semibold">Educational Requirements:</h2>
          <p>{job.educational_requirements}</p>

          <h2 className="text-xl font-semibold">Experiences::</h2>
          <p>{job.experiences}</p>
        </div>
        <div className="border md:col-span-1">
          <h2>Job Details</h2>
          <hr />
          <div>
            <div className="flex gap-2">
              <img src={mony} alt="" />
              <h2 className="text-lg font-semibold">
                Salary:{" "}
                <span className="text-base font-medium">{job.salary}</span>
              </h2>
            </div>
            <div className="flex gap-2">
              <img src={jobCalendar} alt="" />
              <h2 className="text-lg font-semibold">
                Job Title:{" "}
                <span className="text-base font-medium">{job.job_title}</span>
              </h2>
            </div>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
