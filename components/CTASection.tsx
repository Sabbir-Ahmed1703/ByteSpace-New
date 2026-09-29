export default function CTASection() {
  return (
    <section
      id="start-learning"
      className="px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-16 text-center sm:px-12 lg:px-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
          Start Your Journey
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ready to build skills that shape your future?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300">
          Explore practical courses, follow structured learning paths,
          and start building skills that matter.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-lime-300 px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-lime-200">
            Start Learning →
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}