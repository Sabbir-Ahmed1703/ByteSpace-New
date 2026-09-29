import type { LearningPath } from "@/data/learningPaths";

type LearningPathCardProps = {
  path: LearningPath;
};

export default function LearningPathCard({
  path,
}: LearningPathCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
        {path.id}
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-950">
        {path.title}
      </h3>

      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-500">
        {path.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <div>
          <p className="text-xs text-slate-400">Courses</p>
          <p className="mt-1 font-bold text-slate-900">
            {path.courses}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-400">Level</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            {path.level}
          </p>
        </div>
      </div>

      <button className="mt-6 text-sm font-bold text-blue-600 transition group-hover:text-blue-800">
        Explore Path →
      </button>
    </article>
  );
}