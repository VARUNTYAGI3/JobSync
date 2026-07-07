function SearchBar({ search, setSearch ,resultCount }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-4">
        Search Jobs
      </h2>

      <input
        type="text"
        placeholder="Search by title, company, location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="text-gray-500 mt-3">
    {resultCount} job{resultCount !== 1 ? "s" : ""} found
</p>

    </div>
  );
}

export default SearchBar;