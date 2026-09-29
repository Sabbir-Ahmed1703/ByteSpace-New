import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Explore Courses
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Learn skills that move you forward
            </h2>

            <p className="mt-4 max-w-xl text-slate-500">
              Explore practical courses designed to help you build useful
              skills and grow professionally.
            </p>
          </div>

          <button className="w-fit rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-950">
            View All Courses →
          </button>
        </div>

        {/* Course Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}