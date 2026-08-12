import type { Job } from "@/lib/data.ts";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="rounded-lg border border-white/10 p-5 transition-colors hover:border-white/30">
      <p className="text-xs text-white/40">{job.type}</p>
      <h3 className="mt-2 text-base font-semibold text-white">{job.title}</h3>
      <p className="mt-1 text-sm text-white/60">
        {job.company} · {job.location}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}