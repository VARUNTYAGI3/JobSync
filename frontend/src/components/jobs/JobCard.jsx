import { memo } from "react";
import {
  BuildingOffice2Icon,
  MapPinIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  ClockIcon,
  SparklesIcon,
  CheckBadgeIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import useAuth from "../../hooks/useAuth";
import { formatPostedDate } from "../../utils/formatPostedDate";
import { formatSalary } from "../../utils/formatSalary";

function JobCard({
  id,
  title,
  company,
  location,
  salary,
  experience,
  workMode,
  type,
  skills,
  createdAt,
  verified,
  deleteJob,
  editJob,
}) {
  const initials =
    company
      ?.split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "J";
  const { user } = useAuth();
  const skillList = Array.isArray(skills) ? skills : [skills].filter(Boolean);

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-20px_rgba(37,99,235,0.25)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-sm font-semibold text-white">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold text-slate-900">
                {title}
              </h2>
              {verified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                  <CheckBadgeIcon className="h-3.5 w-3.5" />
                  Verified
                </span>
              )}
            </div>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-600">
              <BuildingOffice2Icon className="h-4 w-4" />
              {company}
            </p>
          </div>
        </div>
        <button className="rounded-full border border-slate-200 p-2 text-slate-500 transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
          <HeartIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
          {type || "Full-Time"}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
          {workMode || "On-site"}
        </span>
        <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700">
          {experience || "0-1 Years"}
        </span>
      </div>

      <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
        <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
          <MapPinIcon className="h-4 w-4 text-slate-400" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
          <CurrencyDollarIcon className="h-4 w-4 text-slate-400" />
          <span>{formatSalary(salary)}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skillList.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4" />
          {formatPostedDate(createdAt)}
        </div>
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="h-4 w-4" />
          {type || "Full-Time"}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        {user?.role === "student" && (
          <>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Apply
            </button>

            <button className="border px-4 py-2 rounded-lg">Save</button>
          </>
        )}

        {user?.role === "recruiter" && (
          <>
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
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>

            <button
              onClick={() => deleteJob(id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </article>
  );
}

export default memo(JobCard);
