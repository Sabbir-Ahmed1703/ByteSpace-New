import type { Course } from "@/data/courses";

type CourseCardProps = {
  course: Course;
};

const categoryStyles: Record<string, string> = {
  Development: "bg-blue-100 text-blue-700",
  Design: "bg-pink-100 text-pink-700",
  Business: "bg-lime-100 text-lime-700",
  Marketing: "bg-orange-100 text-orange-700",
};

export default function CourseCard({ course }: CourseCardProps) {
  const categoryStyle =
    categoryStyles[course.category] ?? "bg-slate-100 text-slate-700";

  return (
    <article className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
      {/* Course visual */}
      <div className="relative h-[190px] overflow-hidden bg-[#eef2ff]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-lime-100" />

        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#B8FF3D]" />

        <div className="absolute bottom-[-30px] left-[-20px] h-28 w-28 rounded-full bg-[#173EE5]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl bg-white/80 px-6 py-5 text-center shadow-lg backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              ByteSpace
            </p>

            <p className="mt-1 text-xl font-black text-slate-900">
              {course.category}
            </p>
          </div>
        </div>

        {/* Category badge */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-extrabold ${categoryStyle}`}
        >
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="min-h-[52px] text-lg font-extrabold leading-6 tracking-tight text-slate-950">
          {course.title}
        </h3>

        <p className="mt-3 text-sm text-slate-500">
          {course.instructor}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm font-extrabold text-slate-950">
            ★ {course.rating}
          </span>

          <span className="text-xs text-slate-400">
            ({course.students})
          </span>
        </div>

        {/* Price + action */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-xl font-black text-slate-950">
            {course.price}
          </span>

          <button className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#173EE5]">
            View Course
          </button>
        </div>
      </div>
    </article>
  );
}