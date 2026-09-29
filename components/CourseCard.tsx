import type { Course } from "@/data/courses";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="flex h-52 items-center justify-center bg-slate-100">
        <span className="text-sm font-medium text-slate-400">
          Course Image
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
          {course.category}
        </span>

        <h3 className="mt-2 min-h-14 text-lg font-bold leading-6 text-slate-900">
          {course.title}
        </h3>

        <p className="mt-3 text-sm text-slate-500">
          {course.instructor}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm">
            <span className="font-bold text-slate-900">
              ★ {course.rating}
            </span>

            <span className="ml-2 text-slate-400">
              ({course.students})
            </span>
          </div>

          <span className="text-lg font-black text-slate-900">
            {course.price}
          </span>
        </div>

        <button className="mt-5 w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
          View Course
        </button>
      </div>
    </article>
  );
}