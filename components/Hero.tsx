export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-[#173EE5]"
    >
      {/* Decorative shapes */}
      <div className="absolute -left-8 top-36 h-24 w-24 rotate-12 rounded-[24px] bg-[#B8FF3D]" />

      <div className="absolute -right-8 top-28 h-28 w-28 rotate-45 rounded-[28px] bg-[#B8FF3D]" />

      <div className="absolute bottom-16 left-[7%] h-16 w-16 rounded-full border-[14px] border-white/90" />

      <div className="absolute right-[9%] top-[44%] h-20 w-20 rotate-12 rounded-[22px] bg-[#FF3D9A]" />

      <div className="absolute bottom-[-50px] left-[42%] h-32 w-32 rounded-full border-[22px] border-white/10" />

      {/* Main container */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1240px] items-center px-6 pb-16 pt-28 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          
          {/* LEFT */}
          <div className="max-w-[650px]">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="text-sm font-bold text-[#B8FF3D]">
                Learn. Build. Grow.
              </span>
            </div>

            <h1 className="text-[48px] font-black leading-[1.02] tracking-[-2px] text-white sm:text-[60px] lg:text-[72px]">
              Get Access to{" "}
              <span className="text-[#B8FF3D]">Hundreds</span> of Courses
              Available
            </h1>

            <p className="mt-7 max-w-[570px] text-base leading-7 text-blue-100 sm:text-lg">
              Discover practical courses, learn from experienced creators,
              build valuable skills, and take the next step in your
              professional journey.
            </p>

            {/* Search */}
            <div className="mt-9 flex w-full max-w-[590px] items-center gap-2 rounded-2xl bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="flex h-12 flex-1 items-center gap-3 rounded-xl px-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <button className="h-12 rounded-xl bg-[#B8FF3D] px-6 text-sm font-extrabold text-slate-950 transition hover:scale-[1.02] hover:bg-[#C8FF65]">
                Find Course
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <p className="text-2xl font-black text-white">12K+</p>
                <p className="mt-1 text-sm text-blue-100">Students</p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">70+</p>
                <p className="mt-1 text-sm text-blue-100">Courses</p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">55%</p>
                <p className="mt-1 text-sm text-blue-100">Growth</p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto hidden h-[570px] w-full max-w-[500px] lg:block">
            
            {/* Main image container */}
            <div className="absolute right-4 top-8 h-[470px] w-[355px] rotate-[2deg] overflow-hidden rounded-[40px] bg-[#DCE8FF] shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
              
              {/* Temporary visual */}
              <div className="absolute inset-x-0 bottom-0 flex justify-center">
                <div className="h-[390px] w-[260px] rounded-t-[140px] bg-gradient-to-b from-[#FFD5B8] to-[#E89B67]" />
              </div>

              <div className="absolute left-8 top-8 rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-slate-700 backdrop-blur">
                Learn anywhere
              </div>
            </div>

            {/* Popular course card */}
            <div className="absolute left-0 top-[115px] z-20 w-[210px] -rotate-6 rounded-2xl bg-white p-4 shadow-[0_20px_45px_rgba(0,0,0,0.2)]">
              <p className="text-xs font-medium text-slate-500">
                Popular Course
              </p>

              <p className="mt-1 text-sm font-extrabold text-slate-900">
                Web Development
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-[#E7FFB5] px-3 py-1 text-xs font-extrabold text-slate-900">
                  4.9 ★
                </span>

                <span className="text-xs text-slate-400">
                  2.4k students
                </span>
              </div>
            </div>

            {/* Student card */}
            <div className="absolute bottom-14 right-[-8px] z-20 w-[205px] -rotate-3 rounded-2xl bg-white p-5 shadow-[0_20px_45px_rgba(0,0,0,0.2)]">
              <p className="text-xs text-slate-500">
                Students enrolled
              </p>

              <p className="mt-1 text-2xl font-black text-slate-950">
                12,000+
              </p>

              <div className="mt-3 flex -space-x-2">
                <div className="h-7 w-7 rounded-full border-2 border-white bg-blue-300" />
                <div className="h-7 w-7 rounded-full border-2 border-white bg-orange-300" />
                <div className="h-7 w-7 rounded-full border-2 border-white bg-green-300" />
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[9px] font-bold text-white">
                  +
                </div>
              </div>
            </div>

            {/* Decorative pink circle */}
            <div className="absolute bottom-24 left-16 h-10 w-10 rounded-full bg-[#FF3D9A]" />
          </div>
        </div>
      </div>
    </section>
  );
}