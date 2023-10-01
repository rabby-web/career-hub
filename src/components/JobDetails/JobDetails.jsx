import { useLoaderData, useParams } from "react-router-dom";
import mony from "../../assets/icons/money.png";
import jobCalendar from "../../assets/icons/calendar.png";
import location2 from "../../assets/icons/location2.png";
import call from "../../assets/icons/phone.png";
import mail from "../../assets/icons/email.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";
import { Helmet } from "react-helmet";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(id, job);
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You Have Applied Successfully");
  };
  return (
    <div>
      <Helmet>
        <title>Career Hub || Job Details</title>
      </Helmet>
      <h2 className="text-center text-3xl font-semibold m-2 p-3">
        Job Details
      </h2>
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

          <h2 className="text-xl font-semibold">Experiences:</h2>
          <p>{job.experiences}</p>
        </div>
        {/* ------------ */}
        <div className="rounded-md md:col-span-1 space-y-5 p-2 m-2 bg-slate-50">
          <h2 className="text-xl font-semibold">Job Details</h2>
          <hr />
          <div className="space-y-3">
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
            <h3 className="text-xl font-semibold mt-2 py-1">
              Contract Information
            </h3>
            <hr />
            <div className="flex gap-2">
              <img src={call} alt="" />
              <h2 className="text-lg font-semibold">
                Phone:{" "}
                <span className="text-base font-medium">
                  {job.contact_information.phone}
                </span>
              </h2>
            </div>
            <div className="flex gap-2">
              <img src={mail} alt="" />
              <h2 className="text-lg font-semibold">
                Email:{" "}
                <span className="text-base font-medium">
                  {job.contact_information.email}
                </span>
              </h2>
            </div>
            <div className="flex gap-2">
              <img src={location2} alt="" />
              <h2 className="text-lg font-semibold">Address: </h2>
            </div>
            <span className="text-base font-medium">
              {job.contact_information.address}
            </span>
          </div>
          <button
            onClick={handleApplyJob}
            className="bg-[#4a5fe9] hover:bg-[#374394] text-white py-3 px-6 text-base font-semibold rounded-md mt-2 w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
