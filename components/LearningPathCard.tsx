import type { LearningPath } from "@/data/learningPaths";

type LearningPathCardProps = {
  path: LearningPath;
};

const pathStyles = [
  {
    number: "01",
    bg: "bg-[#E8F0FF]",
    accent: "bg-[#173EE5]",
    text: "text-[#173EE5]",
  },
  {
    number: "02",
    bg: "bg-[#F0FFD5]",
    accent: "bg-[#8CCB00]",
    text: "text-[#5D8B00]",
  },
  {
    number: "03",
    bg: "bg-[#FFE8F3]",
    accent: "bg-[#FF3D9A]",
    text: "text-[#E91E78]",
  },
  {
    number: "04",
    bg: "bg-[#FFF1DB]",
    accent: "bg-[#F59E0B]",
    text: "text-[#D97706]",
  },
];

export default function LearningPathCard({
  path,
}: LearningPathCardProps) {
  const style = pathStyles[(path.id - 1) % pathStyles.length];

  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)]">
      {/* Decorative shape */}
      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${style.bg}`}
      />

      {/* Number */}
      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${style.bg}`}
      >
        <span className={`text-lg font-black ${style.text}`}>
          {String(path.id).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <h3 className="relative mt-7 text-xl font-black tracking-tight text-slate-950">
        {path.title}
      </h3>

      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
        {path.description}
      </p>

      {/* Details */}
      <div className="mt-7 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
            Courses
          </p>

          <p className="mt-1 text-base font-black text-slate-950">
            {path.courses}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
            Level
          </p>

          <p className="mt-1 text-sm font-bold text-slate-950">
            {path.level}
          </p>
        </div>
      </div>

      {/* CTA */}
      <button
        className={`mt-6 flex items-center gap-2 text-sm font-extrabold ${style.text} transition group-hover:gap-3`}
      >
        Explore Path
        <span>→</span>
      </button>

      {/* Bottom accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-0 ${style.accent} transition-all duration-300 group-hover:w-full`}
      />
    </article>
  );
}