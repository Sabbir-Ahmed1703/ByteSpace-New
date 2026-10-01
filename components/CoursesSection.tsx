import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

const categories = [
  "All",
  "Development",
  "Design",
  "Business",
  "Marketing",
];

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#173EE5]">
            Explore Courses
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-[-1.5px] text-slate-950 sm:text-5xl">
            Discover your passion
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Learn practical skills from experienced creators and discover
            courses designed to help you grow.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-9 flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                index === 0
                  ? "bg-[#173EE5] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#173EE5] hover:text-[#173EE5]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.slice(0, 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-full border-2 border-slate-950 px-7 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-slate-950 hover:text-white">
            View All Courses →
          </button>
        </div>
      </div>
    </section>
  );
}