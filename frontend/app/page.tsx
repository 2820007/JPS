"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, Clock, SlidersHorizontal, ArrowUpRight, X } from "lucide-react";

/**
 * Open roles — job listings page
 *
 * Design notes:
 * - Ledger/roster layout: each row is a line item with an index, a status rail
 *   (color = how fresh the posting is), and the essentials in a scannable line.
 * - Mono numerals for anything quantitative (index, salary, day count) so the
 *   eye can compare rows at a glance; a grotesk display face for role titles.
 * - Swap MOCK_JOBS for a fetch to your API / DB (see bottom of file for the shape).
 */

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: "Remote" | "Hybrid" | "On-site";
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  category: string;
  salaryMin: number;
  salaryMax: number;
  postedDaysAgo: number;
};

const MOCK_JOBS: Job[] = [
  { id: "1", title: "Senior Product Designer", company: "Northwind Labs", location: "Kathmandu, NP", remote: "Hybrid", type: "Full-time", category: "Design", salaryMin: 90000, salaryMax: 120000, postedDaysAgo: 1 },
  { id: "2", title: "Backend Engineer, Payments", company: "Rivet", location: "Remote", remote: "Remote", type: "Full-time", category: "Engineering", salaryMin: 110000, salaryMax: 145000, postedDaysAgo: 2 },
  { id: "3", title: "Growth Marketing Lead", company: "Fernwood", location: "Singapore", remote: "On-site", type: "Full-time", category: "Marketing", salaryMin: 80000, salaryMax: 100000, postedDaysAgo: 4 },
  { id: "4", title: "Data Analyst Intern", company: "Coalmine", location: "Remote", remote: "Remote", type: "Internship", category: "Data", salaryMin: 20000, salaryMax: 28000, postedDaysAgo: 6 },
  { id: "5", title: "Frontend Engineer (React)", company: "Northwind Labs", location: "Kathmandu, NP", remote: "Hybrid", type: "Full-time", category: "Engineering", salaryMin: 95000, salaryMax: 125000, postedDaysAgo: 0 },
  { id: "6", title: "Customer Support Specialist", company: "Harborline", location: "Manila, PH", remote: "On-site", type: "Contract", category: "Support", salaryMin: 30000, salaryMax: 40000, postedDaysAgo: 9 },
  { id: "7", title: "Staff Engineer, Platform", company: "Rivet", location: "Remote", remote: "Remote", type: "Full-time", category: "Engineering", salaryMin: 150000, salaryMax: 190000, postedDaysAgo: 3 },
  { id: "8", title: "Brand Designer", company: "Fernwood", location: "Singapore", remote: "Hybrid", type: "Part-time", category: "Design", salaryMin: 45000, salaryMax: 60000, postedDaysAgo: 12 },
];

const CATEGORIES = ["All", "Engineering", "Design", "Marketing", "Data", "Support"] as const;

function formatSalary(min: number, max: number) {
  const fmt = (n: number) => `$${Math.round(n / 1000)}k`;
  return `${fmt(min)}–${fmt(max)}`;
}

function freshness(days: number): { label: string; rail: string; dot: string } {
  if (days === 0) return { label: "New today", rail: "bg-emerald-500", dot: "text-emerald-700 bg-emerald-50 ring-emerald-200" };
  if (days <= 3) return { label: `${days}d ago`, rail: "bg-amber-400", dot: "text-amber-700 bg-amber-50 ring-amber-200" };
  return { label: `${days}d ago`, rail: "bg-slate-300", dot: "text-slate-500 bg-slate-50 ring-slate-200" };
}

export default function JobListingsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const matchesQuery =
        query.trim() === "" ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || job.category === category;
      const matchesRemote = !remoteOnly || job.remote === "Remote";
      return matchesQuery && matchesCategory && matchesRemote;
    }).sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);
  }, [query, category, remoteOnly]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10">
        {/* Header */}
        <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
              Job board
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Open roles
            </h1>
          </div>
          <div className="flex items-baseline gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 sm:self-auto">
            <span className="font-mono text-2xl font-semibold tabular-nums text-slate-900">
              {String(filtered.length).padStart(2, "0")}
            </span>
            <span className="text-sm text-slate-500">
              {filtered.length === 1 ? "position" : "positions"} listed
            </span>
          </div>
        </header>

        {/* Search + filter bar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by role or company"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
            />
          </div>
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:border-slate-300 sm:w-auto"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        {filtersOpen && (
          <div className="mb-8 flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white p-4">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  category === c
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
            <span className="mx-1 h-4 w-px bg-slate-200" />
            <button
              onClick={() => setRemoteOnly((v) => !v)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                remoteOnly
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Remote only
            </button>
            {(category !== "All" || remoteOnly || query) && (
              <button
                onClick={() => {
                  setCategory("All");
                  setRemoteOnly(false);
                  setQuery("");
                }}
                className="ml-auto flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
                Clear
              </button>
            )}
          </div>
        )}

        {/* Listing */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {filtered.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-sm font-medium text-slate-700">No roles match those filters.</p>
              <p className="mt-1 text-sm text-slate-400">Try a different search term or clear your filters.</p>
            </div>
          ) : (
            filtered.map((job, i) => {
              const fresh = freshness(job.postedDaysAgo);
              return (
                <a
                  key={job.id}
                  href={`/jobs/${job.id}`}
                  className="group relative flex items-center gap-5 border-b border-slate-100 py-5 pl-6 pr-6 transition-colors last:border-b-0 hover:bg-slate-50"
                >
                  <span className={`absolute left-0 top-0 h-full w-[3px] ${fresh.rail}`} />
                  <span className="hidden w-8 shrink-0 font-mono text-sm tabular-nums text-slate-300 sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h2 className="truncate text-[15px] font-semibold text-slate-900">
                        {job.title}
                      </h2>
                      <span className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset sm:inline-block ${fresh.dot}`}>
                        {fresh.label}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                      <span className="font-medium text-slate-700">{job.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="hidden shrink-0 flex-col items-end sm:flex">
                    <span className="font-mono text-sm font-medium tabular-nums text-slate-900">
                      {formatSalary(job.salaryMin, job.salaryMax)}
                    </span>
                    <span className="text-xs text-slate-400">{job.remote}</span>
                  </div>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-600" />
                </a>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Swap-in for real data — shape to match when you wire up an API route
 * (e.g. GET /api/jobs) or a server-side fetch in a parent server component:
 *
 * type Job = {
 *   id: string; title: string; company: string; location: string;
 *   remote: "Remote" | "Hybrid" | "On-site";
 *   type: "Full-time" | "Part-time" | "Contract" | "Internship";
 *   category: string; salaryMin: number; salaryMax: number; postedDaysAgo: number;
 * };
 */