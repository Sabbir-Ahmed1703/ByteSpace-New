export default function CTASection() {
  return (
    <section
      id="start-learning"
      className="bg-white px-6 py-24 lg:px-10"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#0B1228] px-8 py-16 text-center sm:px-12 lg:px-20 lg:py-20">
        {/* Decorative shapes */}
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#173EE5]/40" />

        <div className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full border-[30px] border-[#B8FF3D]/10" />

        <div className="absolute right-[18%] top-10 h-8 w-8 rotate-12 rounded-lg bg-[#B8FF3D]/70" />

        <div className="relative z-10">
          <div className="mx-auto inline-flex rounded-full border border-[#B8FF3D]/30 bg-[#B8FF3D]/10 px-4 py-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B8FF3D]">
              Start Your Journey
            </span>
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-1.5px] text-white sm:text-5xl lg:text-6xl">
            Ready to build skills that shape your future?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore practical courses, follow structured learning paths,
            and start building skills that matter.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#B8FF3D] px-8 py-4 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#C8FF65]">
              Start Learning →
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 text-sm font-extrabold text-white transition hover:bg-white/10">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}