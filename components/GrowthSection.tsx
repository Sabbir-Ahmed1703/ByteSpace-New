import { growthFeatures } from "@/data/growthFeatures";
import GrowthFeature from "@/components/GrowthFeature";

export default function GrowthSection() {
  return (
    <section
      id="growth"
      className="overflow-hidden bg-[#1239d8] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
            Professional Growth
          </p>

          <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Turn learning into real professional growth.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-blue-100">
            Learn practical skills, create meaningful projects, and build
            the confidence to take the next step in your career.
          </p>

          <button className="mt-8 rounded-full bg-lime-300 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-lime-200">
            Start Learning →
          </button>
        </div>

        {/* Right */}
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:p-10">
          {growthFeatures.map((feature) => (
            <GrowthFeature
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}