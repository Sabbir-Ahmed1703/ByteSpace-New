import type { Creator } from "@/data/creators";

type CreatorCardProps = {
  creator: Creator;
};

export default function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-64 items-center justify-center bg-gradient-to-br from-blue-100 to-lime-100">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-3xl font-black text-white">
          {creator.name
            .split(" ")
            .map((name) => name[0])
            .join("")}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-950">
          {creator.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-blue-600">
          {creator.role}
        </p>

        <div className="mt-5 flex items-center gap-6 border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs text-slate-400">Courses</p>
            <p className="mt-1 font-bold text-slate-900">
              {creator.courses}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Students</p>
            <p className="mt-1 font-bold text-slate-900">
              {creator.students}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}