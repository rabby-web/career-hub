import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import auth from "../../firebase/firebase.config";

const Header = () => {
  const { logOutUser, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser(auth)
      .then((result) => {
        console.log("success", result);
      })
      .then((error) => {
        console.error(error);
      });
  };
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
      <li className="text-xl">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/register">Register</NavLink>
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
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
