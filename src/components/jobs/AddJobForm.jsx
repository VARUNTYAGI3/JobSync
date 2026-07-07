import React from "react";

const AddJobForm = ({
  title,
  setTitle,
  company,
  setCompany,
  location,
  setLocation,
  salary,
  setSalary,
  saveJob,
  editingId,
  cancelEdit,
}) => {
  return (
    <div className="mb-10">
      <h1 className="text-5xl font-bold text-gray-800">
        Welcome to Job Portal
      </h1>

      <p className="text-gray-500 mt-3 text-lg">
        Find your dream job or hire talented developers.
      </p>
      

      <div className="bg-white shadow-lg rounded-xl p-8 mt-8">
        <h2 className="text-3xl font-bold mb-6">
          {editingId !== null ? "Update Job" : "Add New Job"}
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={saveJob}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            {editingId !== null ? "Update Job" : "Add Job"}
          </button>

          {editingId !== null && (
            <button
              onClick={cancelEdit}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddJobForm;
