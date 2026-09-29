import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Learner Stories
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Loved by learners
          </h2>

          <p className="mt-4 text-slate-500">
            See how learners are using ByteSpace to build skills and
            move forward.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}