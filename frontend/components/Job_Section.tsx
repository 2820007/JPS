import JobCard from "@/components/Job_Card";
import { jobs } from "@/lib/data";

export default function JobsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-4 sm:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}