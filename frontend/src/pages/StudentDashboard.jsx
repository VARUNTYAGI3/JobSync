import {
  ArrowRightIcon,
  BriefcaseIcon,
  BookmarkIcon,
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import AIBadge from "../components/common/AIBadge";
import useAuth from "../hooks/useAuth";

const StudentDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      label: "Applications",
      value: "0",
      color: "text-blue-600",
    },
    {
      label: "Saved Jobs",
      value: "0",
      color: "text-green-600",
    },
    {
      label: "Job Matches",
      value: "0",
      color: "text-purple-600",
    },
  ];

  const quickActions = [
    {
      title: "Browse Jobs",
      icon: BriefcaseIcon,
    },
    {
      title: "Saved Jobs",
      icon: BookmarkIcon,
    },
    {
      title: "Applications",
      icon: CheckCircleIcon,
    },
    {
      title: "Career Copilot",
      icon: SparklesIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* HERO */}

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_-35px_rgba(15,23,42,0.25)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-end">
            <div>
              <AIBadge label="Career Copilot" />

              <h1 className="mt-4 text-4xl font-bold text-slate-900">
                Welcome back,
                <span className="text-blue-600">
                  {" "}
                  {user?.name || "Student"}
                </span>
                👋
              </h1>

              <p className="mt-3 max-w-2xl text-slate-600 text-lg">
                Track your applications, discover opportunities and accelerate
                your career with AI-powered assistance.
              </p>
            </div>

            <div className="rounded-2xl border bg-blue-50 px-5 py-4">
              <p className="text-sm text-slate-500">Today's Progress</p>

              <h2 className="mt-2 text-3xl font-bold text-blue-700">0%</h2>

              <p className="text-sm text-slate-500 mt-1">
                Start applying to jobs.
              </p>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS */}

        <div className="rounded-[28px] bg-white border border-slate-200 p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Quick Actions</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {quickActions.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className="rounded-2xl border bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition p-6 flex flex-col items-center gap-4"
                >
                  <Icon className="h-8 w-8 text-blue-600" />

                  <p className="font-semibold">{item.title}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6"
            >
              <p className="text-slate-500">{item.label}</p>

              <h2 className={`mt-3 text-4xl font-bold ${item.color}`}>
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="grid xl:grid-cols-[1.15fr_0.85fr] gap-6">
          {/* LEFT */}

          <div className="space-y-6">
            {/* Latest Jobs */}

            <div className="rounded-[28px] bg-white border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Latest Opportunities</h2>

                <button className="text-blue-600 font-semibold">
                  View All
                </button>
              </div>

              <div className="space-y-4 mt-6">
                {[1, 2, 3].map((job) => (
                  <div
                    key={job}
                    className="rounded-2xl border bg-slate-50 p-5 hover:shadow transition"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Frontend Developer
                        </h3>

                        <p className="text-slate-500">Company Name</p>
                      </div>

                      <button className="text-blue-600">
                        <ArrowRightIcon className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex gap-3 mt-4 text-sm">
                      <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1">
                        Remote
                      </span>

                      <span className="bg-green-100 text-green-700 rounded-full px-3 py-1">
                        ₹12 LPA
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Jobs */}

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Saved Jobs</h2>

                <button className="text-blue-600 font-semibold">
                  View All
                </button>
              </div>

              <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-8 text-center">
                <BookmarkIcon className="h-10 w-10 mx-auto text-slate-400" />

                <p className="mt-3 text-slate-500">No saved jobs yet.</p>
              </div>
            </div>
            {/* AI CAREER COPILOT */}

            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 p-6 text-white shadow-[0_20px_70px_-24px_rgba(139,92,246,0.6)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-100 font-medium">
                    Career Copilot
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    AI Career Assistant
                  </h2>

                  <p className="mt-3 text-purple-100">
                    Improve your chances with AI-powered tools.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/15 p-4">
                  <SparklesIcon className="h-8 w-8" />
                </div>
              </div>

              <div className="grid gap-3 mt-6">
                {[
                  "Resume Match",
                  "Job Summary",
                  "Interview Questions",
                  "Cover Letter",
                ].map((item) => (
                  <button
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 hover:bg-white/20 transition"
                  >
                    <span className="font-medium">{item}</span>

                    <ArrowRightIcon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-6">
            {/* APPLICATIONS */}

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">My Applications</h2>

                <button className="text-blue-600 font-semibold">
                  View All
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-8 text-center">
                <BriefcaseIcon className="mx-auto h-10 w-10 text-slate-400" />

                <p className="mt-4 text-slate-500">
                  You haven't applied to any jobs yet.
                </p>
              </div>
            </div>

            {/* RECENT ACTIVITY */}

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Recent Activity</h2>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  Live
                </span>
              </div>

              <div className="space-y-4 mt-6">
                {[
                  "Saved a Job",
                  "Applied to Frontend Developer",
                  "Profile Updated",
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border bg-slate-50 p-4"
                  >
                    <div className="rounded-xl bg-blue-100 p-2">
                      <ClockIcon className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                      <p className="font-medium">{activity}</p>

                      <p className="text-sm text-slate-500">Just now</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PROFILE */}

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <UserCircleIcon className="h-16 w-16 text-blue-600" />

                <div>
                  <h2 className="text-xl font-semibold">
                    {user?.name || "Student"}
                  </h2>

                  <p className="text-slate-500">{user?.email}</p>

                  <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 capitalize">
                    {user?.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
