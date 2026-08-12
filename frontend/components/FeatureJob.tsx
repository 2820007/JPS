interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Product Designer",
    company: "Nimbus Labs",
    location: "Remote",
    type: "Full time",
    tags: ["Figma", "Design systems"],
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "Fieldstone",
    location: "Kathmandu, Nepal",
    type: "Full time",
    tags: ["Node.js", "PostgreSQL"],
  },
  {
    id: "3",
    title: "Growth Marketer",
    company: "Loop & Co",
    location: "Hybrid",
    type: "Contract",
    tags: ["SEO", "Content"],
  },
];

export default function FeatureJob() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
        <h1>Feature Jobs</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-lg border border-white/10 p-5 transition-colors hover:border-white/30"
          >
            <p className="text-xs text-white/40">{job.type}</p>
            <h3 className="mt-2 text-base font-semibold text-white">
              {job.title}
            </h3>
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
        ))}
      </div>
    </section>
  );
}