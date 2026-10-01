"use client";

import Link from "next/link";

const reviews = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    time: "a year ago",
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "3 year ago",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    time: "a year ago",
    text: "The project approach and rigorous module setup created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    time: "a year ago",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white text-[#202124]">
      {/* ================= NAVBAR ================= */}
      <header className="absolute left-0 top-0 z-30 w-full border-b border-white/10">
        <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-8">
          <Link
            href="/"
            className="flex items-center gap-1 text-[15px] font-bold text-white"
          >
            <span className="text-xl font-black text-[#c8ff00]">b</span>
            <span>ByteSpace</span>
          </Link>

          <nav className="hidden items-center gap-7 text-[9px] text-white md:flex">
            <Link href="/">Home</Link>
            <Link href="/search">Courses</Link>
            <Link href="/creators">Creators</Link>
          </nav>

          <div className="flex items-center gap-5 text-[9px] text-white">
            <Link href="/login">Sign In</Link>
            <Link href="/register">Join Us</Link>
            <span className="text-sm">♧</span>
          </div>
        </div>
      </header>

      {/* ================= BLUE COURSE HEADER ================= */}
      <section className="relative overflow-hidden bg-[#073be5] pt-[52px]">
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.20]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "53px 53px",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-8 pb-[20px] pt-[24px]">
          <div className="flex items-start justify-between gap-5">
            <div>
              <h1 className="text-[17px] font-semibold leading-tight text-white md:text-[20px]">
                Build Digital Asset: A Comprehensive Guide
              </h1>

              <p className="mt-1 text-[9px] text-white">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              <p className="mt-3 text-[8px] text-white">
                by purposeful studio
              </p>

              {/* badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-4 py-[5px] text-[8px] text-slate-700">
                  ◒ &nbsp;Intermediate
                </span>

                <span className="rounded-full bg-white px-4 py-[5px] text-[8px] text-slate-700">
                  ★ &nbsp;4.8 (72 reviews)
                </span>

                <span className="rounded-full bg-white px-4 py-[5px] text-[8px] text-slate-700">
                  ♧ &nbsp;199 Students
                </span>
              </div>
            </div>

            <button className="mt-1 rounded-full bg-[#c7ff00] px-5 py-2 text-[9px] font-semibold text-slate-900 shadow-sm">
              ↗ &nbsp; Share
            </button>
          </div>

          {/* ================= VIDEO + SIDE CARD ================= */}
          <div className="relative mt-5 grid grid-cols-1 gap-6 pb-0 md:grid-cols-[1fr_315px]">
            {/* video */}
            <div className="relative h-[225px] overflow-hidden rounded-[12px] bg-[#e9e9e9] md:h-[290px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80')",
                }}
              />

              <div className="absolute inset-0 bg-white/10" />

              <button className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#a8a8a8]/90 text-xl text-white shadow-lg">
                ▶
              </button>
            </div>

            {/* course card */}
            <aside className="relative z-10 rounded-[12px] bg-white p-5 shadow-xl md:-mb-[125px]">
              <h2 className="text-[11px] font-bold text-slate-900">
                112 Lessons (24 hours)
              </h2>

              <div className="mt-4 space-y-3 text-[8px]">
                <div className="flex gap-3">
                  <span>01</span>
                  <span className="flex-1">
                    Introduction to Digital
                    <br />
                    Asset
                  </span>
                  <span className="text-blue-600">12 mins</span>
                </div>

                <div className="flex gap-3">
                  <span>02</span>
                  <span className="flex-1">
                    Design Principles for
                    <br />
                    Impact
                  </span>
                  <span className="text-blue-600">21 mins</span>
                </div>

                <div className="flex gap-3">
                  <span>03</span>
                  <span className="flex-1">
                    Advanced Techniques in
                    <br />
                    Digital Creation
                  </span>
                  <span className="text-blue-600">16 mins</span>
                </div>
              </div>

              <p className="mt-3 text-[8px] text-slate-500">
                99 more videos
              </p>

              <p className="mt-4 text-[8px] leading-4 text-slate-500">
                Ready to Dive In? Enroll Now and Start
                <br />
                Building Your Digital Future!
              </p>

              <div className="mt-2">
                <span className="text-[18px] font-bold text-blue-700">
                  $25
                </span>
                <span className="text-[8px] text-slate-400">/Lifetime</span>
              </div>

              <button className="mt-3 w-full rounded-full bg-[#c7ff00] py-2 text-[9px] font-semibold text-slate-900">
                Enroll Now
              </button>

              <h3 className="mt-5 text-[10px] font-bold">
                This course include
              </h3>

              <div className="mt-3 space-y-2 text-[8px] text-slate-500">
                <p>▣ &nbsp; Learning Resources</p>
                <p>▣ &nbsp; Quality Lesson Videos</p>
                <p>♧ &nbsp; Certificate of Completion</p>
                <p>♧ &nbsp; Private Consultation</p>
              </div>

              <div className="my-4 border-t border-slate-200" />

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-200" />
                <div>
                  <p className="text-[8px] font-semibold">
                    PurePearl Studio
                  </p>
                  <p className="text-[7px] text-slate-400">
                    Professional Creator
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[7px] leading-3 text-slate-500">
                Ready to Dive In? Enroll Now and Start
                <br />
                Building Your Digital Future!
              </p>

              <button className="mt-3 rounded-full border border-slate-200 px-3 py-1 text-[7px]">
                See Full Profile
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS CONTENT ================= */}
      <section className="mx-auto max-w-[1200px] px-8 pb-20 pt-7 md:pt-8">
        {/* tabs */}
        <div className="flex gap-2">
          <Link
            href="/courses/1"
            className="rounded-full bg-slate-100 px-4 py-2 text-[8px] text-slate-600"
          >
            About
          </Link>

          <Link
            href="/courses/1/lessons"
            className="rounded-full bg-slate-100 px-4 py-2 text-[8px] text-slate-600"
          >
            Lessons
          </Link>

          <Link
            href="/courses/1/reviews"
            className="rounded-full bg-[#c7ff00] px-4 py-2 text-[8px] font-semibold text-slate-900"
          >
            Reviews
          </Link>
        </div>

        {/* rating heading */}
        <div className="mt-7 max-w-[650px]">
          <h2 className="text-[11px] font-bold text-slate-900">
            What Learners Are Saying
          </h2>

          <p className="mt-2 max-w-[600px] text-[8px] leading-4 text-slate-500">
            Discover what our learners have to say about their experience
            with Build Digital Assets: A Comprehensive Guide! Read stories
            and ratings from individuals who have embarked on the
            transformative journey of mastering digital asset creation.
          </p>

          {/* rating box */}
          <div className="mt-5 flex min-h-[100px] max-w-[520px] items-center gap-6 rounded-[10px] border border-slate-200 p-4">
            <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-[7px] bg-[#c7ff00]">
              <span className="text-[19px] font-bold">4.7</span>
              <span className="text-[7px]">★★★★★</span>
            </div>

            <div className="flex flex-1 flex-col gap-[5px]">
              {[
                ["★★★★★", "720"],
                ["★★★★☆", "120"],
                ["★★★☆☆", "71"],
                ["★★☆☆☆", "12"],
                ["★☆☆☆☆", "6"],
              ].map(([stars, count], index) => (
                <div
                  key={stars}
                  className="flex items-center gap-2 text-[7px]"
                >
                  <span className="w-9">{stars}</span>

                  <div className="h-[4px] flex-1 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-[#c7ff00]"
                      style={{
                        width:
                          index === 0
                            ? "100%"
                            : index === 1
                              ? "70%"
                              : index === 2
                                ? "45%"
                                : index === 3
                                  ? "20%"
                                  : "10%",
                      }}
                    />
                  </div>

                  <span className="w-7 text-right text-slate-500">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* individual reviews */}
        <div className="mt-7 max-w-[650px]">
          <h3 className="text-[10px] font-bold text-slate-900">
            Individual Reviews:
          </h3>

          {/* filters */}
          <div className="mt-3 flex flex-wrap gap-2">
            {["All ratings", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map(
              (item, index) => (
                <button
                  key={item}
                  className={`rounded-full px-3 py-1.5 text-[7px] ${
                    index === 0
                      ? "bg-[#c7ff00] font-semibold text-slate-900"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>

          {/* review cards */}
          <div className="mt-5 space-y-5">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[11px] border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-200" />

                    <div>
                      <h4 className="text-[9px] font-semibold text-slate-900">
                        {review.name}
                      </h4>

                      <p className="text-[7px] text-slate-500">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[7px] text-slate-400">
                    {review.time}
                  </span>
                </div>

                <div className="mt-4 text-[9px] tracking-[2px] text-slate-800">
                  ★ ★ ★ ★ ★
                </div>

                <p className="mt-3 text-[8px] leading-5 text-slate-500">
                  {review.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-[1200px] px-8 py-12">
          <div className="grid gap-10 md:grid-cols-[1.7fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-1 text-[16px] font-bold">
                <span className="text-xl text-[#bfff00]">b</span>
                ByteSpace
              </div>

              <p className="mt-3 max-w-[260px] text-[8px] leading-4 text-slate-500">
                Stay Up to date with our latest features and releases by
                joining our newsletter.
              </p>

              <div className="mt-5 flex max-w-[280px] overflow-hidden rounded-full border border-slate-200">
                <input
                  className="min-w-0 flex-1 px-4 py-2 text-[8px] outline-none"
                  placeholder="Enter your email"
                />
                <button className="m-1 rounded-full bg-[#c7ff00] px-4 text-[8px]">
                  Search
                </button>
              </div>

              <p className="mt-3 max-w-[280px] text-[6px] leading-3 text-slate-400">
                By subscribing, you agree to our Privacy Policy and consent
                to receive updates from our company.
              </p>
            </div>

            <div>
              <h4 className="text-[8px] font-semibold">Featured Courses</h4>
              <p className="mt-3 text-[7px] text-slate-500">
                Featured Categories
              </p>
              <p className="mt-2 text-[7px] text-slate-500">Business</p>
              <p className="mt-2 text-[7px] text-slate-500">IT</p>
              <p className="mt-2 text-[7px] text-slate-500">Design</p>
            </div>

            <div>
              <h4 className="text-[8px] font-semibold">Development</h4>
              <p className="mt-3 text-[7px] text-slate-500">Marketing</p>
              <p className="mt-2 text-[7px] text-slate-500">Photography</p>
              <p className="mt-2 text-[7px] text-slate-500">Finance</p>
              <p className="mt-2 text-[7px] text-slate-500">Sport</p>
            </div>

            <div>
              <h4 className="text-[8px] font-semibold">Become a Creator</h4>
              <p className="mt-3 text-[7px] text-slate-500">
                Affiliate Program
              </p>
              <p className="mt-2 text-[7px] text-slate-500">Contact</p>
              <p className="mt-2 text-[7px] text-slate-500">Help</p>
              <p className="mt-2 text-[7px] text-slate-500">About</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-5 text-[6px] text-slate-400 md:flex-row">
            <p>© 2023 ByteSpace. All rights reserved.</p>

            <div className="flex gap-5">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies Settings</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}