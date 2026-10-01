import type { Creator } from "@/data/creators";

type CreatorCardProps = {
  creator: Creator;
};

export default function CreatorCard({ creator }: CreatorCardProps) {
  const initials = creator.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
      {/* Creator visual */}
      <div className="relative flex h-60 items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8F0FF] via-white to-[#F0FFD5]">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#B8FF3D]/70 transition duration-500 group-hover:scale-125" />

        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#173EE5]/10" />

        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-8 border-white bg-[#173EE5] text-3xl font-black text-white shadow-xl transition duration-300 group-hover:scale-105">
          {initials}
        </div>

        <div className="absolute bottom-4 right-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-slate-600 shadow-sm">
          Creator
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-black tracking-tight text-slate-950">
          {creator.name}
        </h3>

        <p className="mt-1 text-sm font-bold text-[#173EE5]">
          {creator.role}
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
              Courses
            </p>

            <p className="mt-1 text-lg font-black text-slate-950">
              {creator.courses}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
              Students
            </p>

            <p className="mt-1 text-lg font-black text-slate-950">
              {creator.students}
            </p>
          </div>
        </div>

        <button className="mt-5 text-sm font-extrabold text-[#173EE5] transition group-hover:text-blue-800">
          View Profile →
        </button>
      </div>
    </article>
  );
}