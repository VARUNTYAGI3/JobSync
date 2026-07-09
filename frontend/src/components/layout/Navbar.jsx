import {
  BriefcaseIcon,
  HomeIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { user, login, logout } = useAuth();

  return (
    <nav className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <BriefcaseIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">JobSync</p>
            <p className="text-xs text-slate-500">Premium hiring workspace</p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full px-3 py-2 transition duration-300 hover:bg-slate-100 hover:text-slate-900"
          >
            <HomeIcon className="h-4 w-4" />
            Home
          </Link>
          <Link
            to="/jobs"
            className="flex items-center gap-2 rounded-full px-3 py-2 transition duration-300 hover:bg-slate-100 hover:text-slate-900"
          >
            <BriefcaseIcon className="h-4 w-4" />
            Jobs
          </Link>
          <Link
            to="/student/dashboard"
            className="rounded-full px-3 py-2 transition duration-300 hover:bg-slate-100 hover:text-slate-900"
          >
            Student
          </Link>
          <Link
            to="/recruiter/dashboard"
            className="rounded-full px-3 py-2 transition duration-300 hover:bg-slate-100 hover:text-slate-900"
          >
            Recruiter
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 sm:flex">
            <UserCircleIcon className="h-4 w-4" />
            {user ? `Hi, ${user.name}` : "Guest"}
          </div>
          <Link to="/login" className="transition duration-300">
            {user ? (
              <button
                onClick={logout}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={login}
                className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-700"
              >
                Login
              </button>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
