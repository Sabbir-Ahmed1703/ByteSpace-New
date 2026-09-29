import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-3xl font-black text-blue-600">
        “
      </div>

      <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">
        {testimonial.quote}
      </p>

      <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
          {testimonial.name
            .split(" ")
            .map((name) => name[0])
            .join("")}
        </div>

        <div>
          <h3 className="font-bold text-slate-950">
            {testimonial.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}