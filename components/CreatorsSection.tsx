import { creators } from "@/data/creators";
import CreatorCard from "@/components/CreatorCard";

export default function CreatorsSection() {
  return (
    <section id="creators" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#173EE5]">
              Learn From Creators
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-1.5px] text-slate-950 sm:text-5xl">
              Learn from people who build.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Discover experienced creators sharing practical knowledge,
              real-world experience, and valuable skills.
            </p>
          </div>

          <button className="w-fit rounded-full border-2 border-slate-950 px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-slate-950 hover:text-white">
            Meet All Creators →
          </button>
        </div>

        {/* Creator cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </div>
    </section>
  );
}