import { Link } from "react-router-dom";
import location2 from "../../assets/icons/location2.png";
import mony from "../../assets/icons/money.png";

const JobApply = ({ jobApply }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
    id,
  } = jobApply;
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center text-left border p-5 rounded bg-slate-100 my-3">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold mt-2">{job_title}</h1>
            <h2 className="text-base font-medium">{company_name}</h2>
            <div className="flex gap-3 text-indigo-500 text-base">
              <button className="border border-indigo-400 py-2 px-4 font-medium rounded">
                {remote_or_onsite}
              </button>
              <button className="border border-indigo-400 py-2 px-4 font-medium rounded">
                {job_type}
              </button>
            </div>
            <div className="flex gap-2 text-base">
              <div className="flex gap-1">
                <img src={location2} alt="" />
                <p>{location}</p>
              </div>
              <div className="flex gap-1">
                <img src={mony} alt="" />
                <p>{salary}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/job/${id}`}>
            <button className="bg-[#4a5fe9] hover:bg-[#374394] text-white py-3 px-6 text-base font-semibold rounded-md mt-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
