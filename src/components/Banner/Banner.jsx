import banner from "../../assets/image/3572685-removebg-preview.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col-reverse m-3 text-center md:text-left md:flex-row items-center justify-between md:min-h-[600px]">
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl font-bold ">
            One Step Closer To Your <br />
            <samp className="text-[#4a5fe9]">Dream Job</samp>
          </h1>
          <p className="text-gray-600">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bg-[#4a5fe9] hover:bg-[#374394] text-white py-3 px-6 text-base font-semibold rounded-md mt-2">
            View Details
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
