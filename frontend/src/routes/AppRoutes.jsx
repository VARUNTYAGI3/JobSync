import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Jobs = lazy(() => import("../pages/Jobs"));
const JobDetails = lazy(() => import("../pages/JobDetails"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const StudentDashboard = lazy(() => import("../pages/StudentDashboard"));
const RecruiterDashboard = lazy(() => import("../pages/RecruiterDashboard"));
const NotFound = lazy(() => import("../pages/NotFound"));
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/jobs" element={<Jobs />} />

      {/* <Route path="/jobs/:id" element={<JobDetails />} /> */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/student/dashboard" element={<StudentDashboard />} />

      <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
