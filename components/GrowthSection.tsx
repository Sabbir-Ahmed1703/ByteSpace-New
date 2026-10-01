import { growthFeatures } from "@/data/growthFeatures";
import GrowthFeature from "@/components/GrowthFeature";

export default function GrowthSection() {
  return (
    <section
      id="growth"
      className="relative overflow-hidden bg-[#173EE5] px-6 py-24 lg:px-10"
    >
      {/* Decorative shapes */}
      <div className="absolute -left-16 top-20 h-40 w-40 rounded-full bg-[#B8FF3D]/10" />

      <div className="absolute -right-20 bottom-[-40px] h-64 w-64 rounded-full border-[35px] border-white/5" />

      <div className="absolute right-[45%] top-[-30px] h-20 w-20 rotate-12 rounded-3xl bg-[#B8FF3D]/10" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex rounded-full border border-[#B8FF3D]/30 bg-[#B8FF3D]/10 px-4 py-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#B8FF3D]">
              Professional Growth
            </span>
          </div>

          <h2 className="mt-6 max-w-xl text-4xl font-black leading-[1.05] tracking-[-1.5px] text-white sm:text-5xl lg:text-6xl">
            Turn learning into{" "}
            <span className="text-[#B8FF3D]">
              real professional growth.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
            Learn practical skills, create meaningful projects, and build
            the confidence to take the next step in your career.
          </p>

          <button className="mt-9 rounded-full bg-[#B8FF3D] px-7 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#C8FF65]">
            Start Learning →
          </button>

          {/* Small stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-black text-white">12K+</p>
              <p className="mt-1 text-xs text-blue-200">
                Active learners
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">70+</p>
              <p className="mt-1 text-xs text-blue-200">
                Practical courses
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">4.9/5</p>
              <p className="mt-1 text-xs text-blue-200">
                Average rating
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Background card */}
          <div className="absolute -inset-3 rounded-[34px] bg-white/5" />

          <div className="relative rounded-[30px] border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200">
                  Why ByteSpace
                </p>

                <p className="mt-1 text-xl font-black text-white">
                  Learn with purpose
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B8FF3D] text-lg font-black text-slate-950">
                ✓
              </div>
            </div>

            <div className="space-y-6">
              {growthFeatures.map((feature) => (
                <GrowthFeature
                  key={feature.id}
                  feature={feature}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}