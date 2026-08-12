import { testimonials } from "@/lib/data";

export default function Testimonials() {
  // Duplicate the list once so the CSS animation can loop seamlessly.
  const track = [...testimonials, ...testimonials];

  return (
    <section className="border-y border-white/10 py-16">
      <h2 className="mb-10 text-center text-2xl font-bold text-white">
        What job seekers say
      </h2>

      <div className="group overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {track.map((testimonial, i) => (
            <div
              key={`${testimonial.id}-${i}`}
              className="w-80 shrink-0 rounded-lg border border-white/10 p-6"
            >
              <p className="text-sm text-white/70">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-white">
                {testimonial.name}
              </p>
              <p className="text-xs text-white/40">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}