import {
  BriefcaseIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav className="border-b border-slate-200/80 bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <BriefcaseIcon className="h-5 w-5" />
          </div>

          <div>
            <p className="text-base font-semibold text-slate-900">
              JobSync
            </p>

            <p className="text-xs text-slate-500">
              Premium Hiring Workspace
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <HomeIcon className="h-4 w-4" />
            Home
          </Link>

          <Link
            to="/jobs"
            className="flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <BriefcaseIcon className="h-4 w-4" />
            Jobs
          </Link>

          {user?.role === "student" && (
            <Link
              to="/student/dashboard"
              className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Dashboard
            </Link>
          )}

          {user?.role === "recruiter" && (
            <Link
              to="/recruiter/dashboard"
              className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 sm:flex">
            <UserCircleIcon className="h-5 w-5" />

            <span>
              {user ? `Hi, ${user.name}` : "Guest"}
            </span>
          </div>

          {user ? (
            <button
              onClick={handleLogout}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;