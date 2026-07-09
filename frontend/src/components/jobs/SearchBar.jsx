import { MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";

function SearchBar({ search, setSearch, resultCount }) {
  return (
    <div className="sticky top-4 z-10 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.16)] backdrop-blur sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">Discover roles</p>
          <h2 className="text-xl font-semibold text-slate-900">Search the market</h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-2 text-sm font-medium text-purple-700">
          <SparklesIcon className="h-4 w-4" />
          AI-powered matching
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by title, company, or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:ring-0"
          />
        </div>
        <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
          {resultCount} match{resultCount !== 1 ? "es" : ""}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
