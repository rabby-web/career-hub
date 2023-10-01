import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";
import Blog from "./components/Blog/Blog";
import Jobs from "./components/Jobs/Jobs";
import { HelmetProvider } from "react-helmet-async";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes";
import Profile from "./components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/applied",
        element: (
          <PrivateRoutes>
            <AppliedJobs></AppliedJobs>
          </PrivateRoutes>
        ),
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
