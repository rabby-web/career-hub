import mony from "../../assets/icons/money.png";
import location2 from "../../assets/icons/location2.png";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
    id,
  } = job;
  return (
    <div className="border p-5 rounded">
      <img src={logo} alt="" />
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold mt-2">{job_title}</h1>
        <h2 className="text-base font-medium">{company_name}</h2>
        <div className="flex gap-4 text-indigo-500">
          <button className="border border-indigo-400 py-3 px-5 font-medium rounded">
            {remote_or_onsite}
          </button>
          <button className="border border-indigo-400 py-3 px-5 font-medium rounded">
            {job_type}
          </button>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-3">
            <img src={location2} alt="" />
            <p>{location}</p>
          </div>
          <div className="flex gap-3">
            <img src={mony} alt="" />
            <p>{salary}</p>
          </div>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="bg-[#4a5fe9] hover:bg-[#374394] text-white py-3 px-6 text-base font-semibold rounded-md mt-2">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
