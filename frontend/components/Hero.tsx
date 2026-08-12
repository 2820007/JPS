import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
        Discover jobs that
        <br />
        match your skills, not resume
      </h1>

      <p className="mx-auto mt-4 max-w-lg text-sm text-white/60">
        We match you with roles based on what you can actually do — skip the
        keyword games and apply to work you&apos;re genuinely a fit for.
      </p>

      <form className="mx-auto mt-8 flex max-w-xl items-center overflow-hidden rounded-lg bg-white">
        <input
          type="text"
          placeholder="Search jobs"
          className="w-full bg-transparent px-4 py-3 text-sm text-black outline-none placeholder:text-black/40"
        />
        <div className="h-6 w-px bg-black/10" />
        <input
          type="text"
          placeholder="Location"
          className="w-40 bg-transparent px-4 py-3 text-sm text-black outline-none placeholder:text-black/40"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white"
        >
          <Search size={16} />
        </button>
      </form>
    </section>
  );
}