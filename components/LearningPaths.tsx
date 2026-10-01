import { learningPaths } from "@/data/learningPaths";
import LearningPathCard from "@/components/LearningPathCard";

export default function LearningPaths() {
  return (
    <section
      id="learning-paths"
      className="bg-[#F7F8FC] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#173EE5]">
              Learning Paths
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-1.5px] text-slate-950 sm:text-5xl">
              Follow a path. Build your future.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Choose a structured learning path and develop the skills you
              need step by step.
            </p>
          </div>

          <button className="w-fit rounded-full border-2 border-slate-950 px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-slate-950 hover:text-white">
            Explore All Paths →
          </button>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {learningPaths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
}