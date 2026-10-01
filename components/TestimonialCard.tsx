import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group rounded-[24px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)]">
      {/* Quote */}
      <div className="flex items-start justify-between">
        <div className="text-5xl font-black leading-none text-[#173EE5]">
          “
        </div>

        <div className="rounded-full bg-[#F0FFD5] px-3 py-1 text-xs font-extrabold text-slate-700">
          ★ 5.0
        </div>
      </div>

      <p className="mt-5 min-h-[120px] text-sm leading-7 text-slate-600">
        {testimonial.quote}
      </p>

      {/* User */}
      <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#173EE5] text-sm font-black text-white shadow-sm">
          {initials}
        </div>

        <div>
          <h3 className="font-extrabold text-slate-950">
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