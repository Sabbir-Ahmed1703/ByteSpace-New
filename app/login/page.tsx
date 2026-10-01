export default function LoginPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#103fe3]">
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      >
        <div className="mx-auto grid min-h-screen max-w-[1280px] grid-cols-1 px-8 py-5 lg:grid-cols-[1fr_1fr] lg:px-16">

          {/* ================= LEFT SIDE ================= */}

          <section className="relative min-h-[520px]">

            {/* Logo */}
            <div className="absolute left-0 top-0">
              <div className="relative h-5 w-7">
                <div className="absolute left-0 top-0 h-4 w-4 rounded-br-[9px] rounded-tl-[2px] bg-[#c1ff19]" />
                <div className="absolute left-[8px] top-[7px] h-3 w-4 rounded-r-full bg-[#c1ff19]" />
              </div>
            </div>

            {/* Intro */}
            <div className="absolute left-0 top-[50px] w-[285px]">
              <h1 className="text-[12px] font-bold text-white">
                Sign in with ease
              </h1>

              <p className="mt-3 text-[9px] leading-[1.75] text-white/75">
                Experience a seamless and efficient sign-in process that
                grants you instant access to a world of knowledge.
              </p>
            </div>

            {/* ================= COURSE VISUAL ================= */}

            <div className="absolute left-0 top-[155px] h-[315px] w-[355px]">

              {/* Back course card */}
              <div className="absolute left-0 top-[50px] z-10 h-[190px] w-[185px] rounded-[12px] bg-white p-2 shadow-[0_15px_35px_rgba(0,0,0,0.22)]">

                <div className="h-[85px] rounded-[7px] bg-[#dfe3ea]">
                  <div className="flex h-full items-center justify-center text-[8px] font-bold text-slate-500">
                    DIGITAL SKILLS
                  </div>
                </div>

                <p className="mt-2 text-[9px] font-bold text-slate-900">
                  Build Digital Skills
                </p>

                <p className="mt-1 text-[6px] text-blue-600">
                  by purposeful studio
                </p>

                <div className="mt-2 flex gap-1">
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[6px] text-slate-500">
                    17 Lessons
                  </span>

                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[6px] text-slate-500">
                    Beginner
                  </span>
                </div>

                <p className="mt-4 text-[10px] font-black text-blue-600">
                  $25
                  <span className="font-normal text-slate-400">
                    /Lifetime
                  </span>
                </p>
              </div>

              {/* Main course card */}
              <div className="absolute left-[58px] top-0 z-20 h-[245px] w-[195px] rounded-[12px] bg-white p-2 shadow-[0_18px_40px_rgba(0,0,0,0.25)]">

                {/* Image */}
                <div className="relative h-[102px] overflow-hidden rounded-[7px] bg-[#101820]">

                  <div className="absolute left-3 top-3 text-[7px] font-bold text-white">
                    DATA ANALYTICS
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-end gap-[3px]">
                    <span className="h-7 w-[4px] bg-cyan-400" />
                    <span className="h-12 w-[4px] bg-cyan-300" />
                    <span className="h-9 w-[4px] bg-cyan-500" />
                    <span className="h-16 w-[4px] bg-teal-300" />
                    <span className="h-10 w-[4px] bg-cyan-400" />
                    <span className="h-20 w-[4px] bg-teal-400" />
                    <span className="h-14 w-[4px] bg-cyan-300" />
                  </div>

                  <div className="absolute right-3 top-5 h-8 w-8 rounded-full border-2 border-cyan-400 opacity-60" />
                </div>

                {/* Meta */}
                <div className="mt-2 flex items-center justify-between text-[6px] text-slate-500">
                  <span className="rounded-full bg-slate-100 px-2 py-1">
                    17 Lessons
                  </span>

                  <span>2 hours 16 mins</span>

                  <span>59 Comments</span>
                </div>

                <p className="mt-2 text-[9px] font-bold text-slate-900">
                  The Power of Big Data
                </p>

                <p className="mt-1 text-[6px] text-blue-600">
                  by purposeful studio
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[6px]">
                    Beginner
                  </span>

                  <span className="text-[8px] font-bold text-slate-800">
                    4.5 ⭐
                  </span>
                </div>

                {/* Avatars */}
                <div className="mt-2 flex -space-x-2">
                  <span className="h-5 w-5 rounded-full border-2 border-white bg-orange-300" />
                  <span className="h-5 w-5 rounded-full border-2 border-white bg-blue-300" />
                  <span className="h-5 w-5 rounded-full border-2 border-white bg-pink-300" />
                  <span className="h-5 w-5 rounded-full border-2 border-white bg-green-300" />

                  <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[5px] text-white">
                    26+
                  </span>
                </div>
              </div>

              {/* Lime circle */}
              <div className="absolute left-[38px] top-[23px] z-30 h-[48px] w-[48px] rotate-[-25deg] rounded-full border-[12px] border-[#c1ff19]" />

              {/* White squiggle */}
              <div className="absolute left-[210px] top-[190px] z-40 rotate-[-25deg]">
                <div className="h-7 w-5 rounded-full border-[5px] border-white" />
                <div className="ml-1 h-7 w-5 rounded-full border-[5px] border-white" />
                <div className="ml-[-3px] h-7 w-5 rounded-full border-[5px] border-white" />
              </div>

              {/* Triangle */}
              <div
                className="absolute bottom-0 left-0 z-40"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "38px solid transparent",
                  borderRight: "38px solid transparent",
                  borderTop: "68px solid #c1ff19",
                  transform: "rotate(8deg)",
                }}
              />

              {/* Happy Students */}
              <div className="absolute bottom-0 right-[10px] z-50 w-[136px] rounded-[10px] bg-[#c1ff19] px-3 py-2 shadow-lg">

                <p className="text-[7px] font-bold text-slate-900">
                  Happy Students
                </p>

                <p className="mt-1 text-[6px] text-slate-700">
                  4.5/5 ★
                </p>

                <div className="mt-1 flex -space-x-2">
                  <span className="h-5 w-5 rounded-full border-2 border-[#c1ff19] bg-orange-300" />
                  <span className="h-5 w-5 rounded-full border-2 border-[#c1ff19] bg-blue-300" />
                  <span className="h-5 w-5 rounded-full border-2 border-[#c1ff19] bg-pink-300" />
                  <span className="h-5 w-5 rounded-full border-2 border-[#c1ff19] bg-purple-300" />

                  <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#c1ff19] bg-slate-900 text-[5px] text-white">
                    2k+
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ================= LOGIN CARD ================= */}

          <section className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[315px] rounded-[13px] bg-white px-9 py-9 shadow-[0_20px_45px_rgba(0,0,0,0.18)]">

              {/* Small title */}
              <p className="text-[9px] font-medium text-blue-600">
                Sign In
              </p>

              {/* Heading */}
              <h2 className="mt-1 text-[27px] font-black leading-[1.05] tracking-tight text-[#252525]">
                Welcome Back
              </h2>

              {/* Form */}
              <form className="mt-7">

                {/* Email */}
                <label className="block">
                  <span className="text-[8px] text-slate-700">
                    Email
                  </span>

                  <input
                    type="email"
                    placeholder="designer@example.com"
                    className="mt-1 h-[29px] w-full rounded-[6px] border border-[#e5e5e5] px-3 text-[8px] text-slate-700 outline-none focus:border-blue-500"
                  />
                </label>

                {/* Password */}
                <label className="mt-4 block">
                  <span className="text-[8px] text-slate-700">
                    Password
                  </span>

                  <input
                    type="password"
                    placeholder="********"
                    className="mt-1 h-[29px] w-full rounded-[6px] border border-[#e5e5e5] px-3 text-[8px] text-slate-700 outline-none focus:border-blue-500"
                  />
                </label>

                {/* Sign In */}
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-full bg-[#c1ff19] px-4 py-[7px] text-[9px] font-bold text-slate-950 transition hover:bg-[#b4f20c]"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="mt-11 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-[8px] text-slate-400">
                  or
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Social Buttons */}
              <div className="mt-7 flex justify-center gap-3">

                <button
                  type="button"
                  aria-label="Continue with Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[19px] font-bold text-black transition hover:bg-slate-50"
                >
                  f
                </button>

                <button
                  type="button"
                  aria-label="Continue with Google"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[18px] font-bold text-black transition hover:bg-slate-50"
                >
                  G
                </button>

              </div>

              {/* Register */}
              <p className="mt-11 text-center text-[8px] text-slate-500">
                New user?{" "}
                <a
                  href="/register"
                  className="text-blue-600 hover:underline"
                >
                  Create an account
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}