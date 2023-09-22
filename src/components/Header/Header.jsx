import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className="text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:px-7 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-7 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-semibold">
          CareerHub
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/applied">
          <button className="bg-[#4a5fe9] hover:bg-[#374394] text-white py-3 px-3 md:px-6 text-base font-semibold rounded-md mt-2">
            Star Applying
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
