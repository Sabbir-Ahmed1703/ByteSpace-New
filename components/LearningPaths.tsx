import { learningPaths } from "@/data/learningPaths";
import LearningPathCard from "@/components/LearningPathCard";

export default function LearningPaths() {
  return (
    <section
      id="learning-paths"
      className="bg-slate-50 px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Learning Paths
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Follow a path. Build your future.
          </h2>

          <p className="mt-4 text-slate-500">
            Choose a structured learning path and develop the skills you
            need step by step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {learningPaths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
}