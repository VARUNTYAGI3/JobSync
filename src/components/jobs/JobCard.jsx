import { memo } from "react";
function JobCard({ id, title, company, location, salary, deleteJob, editJob }) {
  // console.log(title, "Rendered");
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border">
      <h2 className="text-2xl font-bold text-gray-800">💼 {title}</h2>

      <p className="mt-3 text-gray-600">
        🏢 <span className="font-semibold">{company}</span>
      </p>

      <p className="text-gray-600">📍 {location}</p>

      <p className="text-green-600 font-bold mt-2">💰 {salary}</p>
      <p className="text-sm text-gray-500 mt-2">📅 Posted 2 Days Ago</p>
      <div className="flex gap-3 mt-5">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          Apply
        </button>

        <button
          onClick={() =>
            editJob({
              id,
              title,
              company,
              location,
              salary,
            })
          }
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          Edit
        </button>

        <button
          onClick={() => deleteJob(id)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default memo(JobCard);
