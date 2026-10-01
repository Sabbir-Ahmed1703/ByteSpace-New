import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-[#F7F8FC] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#173EE5]">
            Learner Stories
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-[-1.5px] text-slate-950 sm:text-5xl">
            Loved by learners
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            See how learners are using ByteSpace to build skills and
            move forward.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <div className="flex gap-1 text-[#F59E0B]">
            ★ ★ ★ ★ ★
          </div>

          <p className="text-sm font-semibold text-slate-500">
            Trusted by learners building real-world skills
          </p>
        </div>
      </div>
    </section>
  );
}