import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
function Navbar() {
  const { user, login, logout } = useAuth();
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">Job Portal</h1>
        <p className="text-sm">{user ? `Hi, ${user.name}` : "Guest"}</p>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>

          <Link to="/jobs" className="hover:text-gray-200 transition">
            Jobs
          </Link>

          <Link
            to="/student-dashboard"
            className="hover:text-gray-200 transition"
          >
            Student
          </Link>

          <Link
            to="/recruiter-dashboard"
            className="hover:text-gray-200 transition"
          >
            Recruiter
          </Link>

          <Link to="/login" className="hover:text-gray-200 transition">
            {user ? (
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={login}
                className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Login
              </button>
            )}
          </Link>

          {/* <Link to="/register" className="hover:text-gray-200 transition">
            {user ? (
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={login}
                className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Login
              </button>
            )}
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
