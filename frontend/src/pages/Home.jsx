import React from "react";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  CheckCircleIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  const stats = [
    { value: "12k+", label: "Qualified candidates" },
    { value: "3.2x", label: "Faster hiring" },
    { value: "98%", label: "Satisfaction" },
  ];

  const companies = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

  const features = [
    {
      icon: SparklesIcon,
      title: "AI-assisted discovery",
      text: "Surface the best-fit roles faster with curated recommendations.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Trusted opportunities",
      text: "Review verified listings backed by clear company signals.",
    },
    {
      icon: ChartBarIcon,
      title: "Hiring intelligence",
      text: "Track candidate engagement and funnel health from one place.",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),_transparent_40%),linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)] text-slate-900">
      <section className="border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
              <SparklesIcon className="h-4 w-4" />
              Premium hiring for modern teams
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find your next move with clarity.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A refined job platform designed for ambitious professionals and hiring teams that value quality over noise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore jobs
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="/recruiter/dashboard"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
              >
                Hire talent
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_24px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Weekly pulse</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900">+24% engagement</p>
                </div>
                <div className="rounded-2xl bg-purple-50 p-3 text-purple-700">
                  <CpuChipIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {stats.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <span className="text-sm font-medium text-slate-600">{item.label}</span>
                    <span className="text-base font-semibold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  Trusted by leading product teams
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {companies.map((company) => (
                    <span key={company} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_-30px_rgba(15,23,42,0.2)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600">
                <UserGroupIcon className="h-4 w-4" />
                Built for people-first hiring
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Move from search to shortlist in one clean flow.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Keep the experience focused with thoughtful layouts, polished cards, and modern controls that feel calm and premium.
              </p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <BuildingOffice2Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Open roles this week</p>
                  <p className="text-xl font-semibold text-slate-900">84 high-signal listings</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  "Senior Product Designer",
                  "Frontend Engineer",
                  "Growth Operations Lead",
                ].map((role) => (
                  <div key={role} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <span className="text-sm font-medium text-slate-700">{role}</span>
                    <span className="text-sm font-semibold text-blue-600">View</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>JobSync © 2026. Crafted for modern hiring teams.</p>
          <div className="flex gap-4">
            <a href="/jobs" className="transition hover:text-blue-600">Jobs</a>
            <a href="/recruiter/dashboard" className="transition hover:text-blue-600">Recruiter</a>
            <a href="/login" className="transition hover:text-blue-600">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
