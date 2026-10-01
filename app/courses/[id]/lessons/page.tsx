const lessons = [
  {
    number: "01",
    title: "Introduction to Digital Assets",
    description:
      "Learn the groundwork with lessons like Understanding Digital Elements and Navigating Design Software. This lays the foundation of digital asset creation.",
  },
  {
    number: "02",
    title: "Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as Color Theory in Digital Design and Typography Essentials.",
  },
  {
    number: "04",
    title: "User-Centric Design Strategies",
    description:
      "Understand Design Thinking in Digital Creation and delve into User Experience (UX) Essentials. Craft digital assets with a focus on user-centric design.",
  },
  {
    number: "05",
    title: "Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like Creating Interactive Presentations and Integrating Multimedia Elements.",
  },
  {
    number: "06",
    title: "Project Showcase and Critique",
    description:
      "Perfect your presentation skills with Effective Presentation Techniques and embrace collaboration with Peer Critique and Collaboration.",
  },
  {
    number: "07",
    title: "Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations to Mobile Platforms and optimize for Social Media. Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const sidebarLessons = [
  {
    number: "01",
    title: "Introduction to Digital Asset Design",
    duration: "12 mins",
  },
  {
    number: "02",
    title: "Design Principles for Impact",
    duration: "21 mins",
  },
  {
    number: "03",
    title: "Advanced Techniques in Digital Creation",
    duration: "16 mins",
  },
];

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================================================= */}
      {/* BLUE HEADER */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#103fe3] text-white">

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "53px 53px",
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">

          {/* Navbar */}
          <nav className="flex h-[52px] items-center justify-between px-8 lg:px-14">

            <a
              href="/"
              className="flex items-center gap-1.5 text-[12px] font-bold"
            >
              <span className="relative h-4 w-5">
                <span className="absolute left-0 top-0 h-3 w-3 rounded-br-lg bg-[#c1ff19]" />
                <span className="absolute left-[7px] top-[6px] h-2.5 w-3 rounded-r-full bg-[#c1ff19]" />
              </span>

              ByteSpace
            </a>

            <div className="hidden items-center gap-7 text-[8px] md:flex">
              <a href="/" className="hover:text-[#c1ff19]">
                Home
              </a>

              <a href="/search" className="hover:text-[#c1ff19]">
                Courses
              </a>

              <a href="/creators" className="hover:text-[#c1ff19]">
                Creators
              </a>
            </div>

            <div className="flex items-center gap-4 text-[8px]">
              <a href="/login">Sign In</a>
              <a href="/register">Join Us</a>
              <span className="text-[12px]">♧</span>
            </div>

          </nav>

          {/* Course title */}
          <div className="px-8 pb-7 pt-6 lg:px-14">

            <div className="flex items-start justify-between gap-5">

              <div>

                <h1 className="text-2xl font-bold tracking-tight">
                  Build Digital Asset: A Comprehensive Guide
                </h1>

                <p className="mt-1 text-[10px]">
                  Unlock the Power of Digital Creation with Expert Guidance
                </p>

                <p className="mt-3 text-[8px]">
                  by purposeful studio
                </p>

              </div>

              <button className="rounded-full bg-[#c1ff19] px-4 py-2 text-[8px] font-semibold text-slate-900">
                ⤴ Share
              </button>

            </div>

            {/* Stats */}
            <div className="mt-4 flex flex-wrap gap-2">

              <span className="rounded-full bg-white px-4 py-1.5 text-[8px] text-slate-800">
                ▥ &nbsp; Intermediate
              </span>

              <span className="rounded-full bg-white px-4 py-1.5 text-[8px] text-slate-800">
                ★ &nbsp; 4.8 (72 reviews)
              </span>

              <span className="rounded-full bg-white px-4 py-1.5 text-[8px] text-slate-800">
                ♟ &nbsp; 199 Students
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <section className="relative">

        <div className="mx-auto max-w-[1280px]">

          <div className="grid gap-7 px-8 py-7 lg:grid-cols-[1fr_290px] lg:px-14">

            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <div>

              {/* Course preview */}
              <div className="relative h-[270px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[330px]">

                <img
                  src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=1200&q=80"
                  alt="Digital Asset Course"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">

                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-lg text-slate-700 shadow-lg">
                    ▶
                  </button>

                </div>

              </div>

              {/* Tabs */}
              <div className="mt-7 flex gap-3">

                <a
                  href="/courses/1"
                  className="rounded-full bg-slate-100 px-4 py-2 text-[8px] text-slate-500"
                >
                  About
                </a>

                <button className="rounded-full bg-[#c1ff19] px-4 py-2 text-[8px] font-medium text-slate-900">
                  Lesson
                </button>

                <a
                  href="/courses/1/reviews"
                  className="rounded-full bg-slate-100 px-4 py-2 text-[8px] text-slate-500"
                >
                  Reviews
                </a>

              </div>

              {/* Explore Modules */}
              <div className="mt-7 max-w-[650px]">

                <h2 className="text-sm font-bold text-slate-900">
                  Explore the Modules
                </h2>

                <p className="mt-3 text-[8px] leading-4 text-slate-500">
                  Immerse yourself in the course content as we break down each
                  module into comprehensive lessons, providing practical
                  insights and hands-on experiences.
                </p>

                <h3 className="mt-5 text-[10px] font-bold text-slate-900">
                  Lesson List
                </h3>

                {/* Lessons */}
                <div className="mt-3 space-y-3">

                  {lessons.map((lesson) => (
                    <article
                      key={lesson.number}
                      className="flex gap-3"
                    >

                      {/* Icon */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c1ff19] text-[12px] text-slate-900">
                        ▣
                      </div>

                      <div>

                        <h4 className="text-[8px] font-medium text-slate-900">
                          Module {lesson.number}: {lesson.title}
                        </h4>

                        <p className="mt-1 max-w-[600px] text-[7px] leading-3.5 text-slate-500">
                          {lesson.description}
                        </p>

                      </div>

                    </article>
                  ))}

                </div>

                {/* Lesson Content */}
                <h3 className="mt-5 text-[10px] font-bold text-slate-900">
                  Lesson Content
                </h3>

                <p className="mt-3 text-[8px] leading-4 text-slate-500">
                  Engage with each lesson through captivating video content,
                  detailed textual explanations, and interactive elements.
                  Download resources, complete assignments, and test your
                  understanding with quizzes.
                </p>

                {/* Progress */}
                <h3 className="mt-5 text-[10px] font-bold text-slate-900">
                  Lesson Progress Tracking
                </h3>

                <p className="mt-3 text-[8px] leading-4 text-slate-500">
                  Witness your growth as you complete lessons, with an
                  intuitive progress tracking feature guiding you through your
                  learning journey.
                </p>

                {/* Progress box */}
                <div className="mt-4 max-w-[265px] rounded-lg border border-slate-200 p-3">

                  <div className="flex items-end justify-between">

                    <div>
                      <p className="text-[6px] text-slate-400">
                        Learning Progress
                      </p>

                      <p className="mt-1 text-lg font-bold text-slate-900">
                        55%
                      </p>
                    </div>

                  </div>

                  <div className="mt-2 h-1 rounded-full bg-slate-200">

                    <div className="h-1 w-[55%] rounded-full bg-[#c1ff19]" />

                  </div>

                </div>

              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT COURSE CARD */}
            {/* ================================================= */}

            <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:-mt-[235px]">

              <h2 className="text-sm font-bold text-slate-900">
                112 Lessons (24 hours)
              </h2>

              {/* Sidebar lessons */}
              <div className="mt-5 space-y-4">

                {sidebarLessons.map((lesson) => (
                  <div
                    key={lesson.number}
                    className="flex items-start gap-3"
                  >

                    <span className="text-[8px] text-slate-500">
                      {lesson.number}
                    </span>

                    <p className="flex-1 text-[8px] leading-3 text-slate-700">
                      {lesson.title}
                    </p>

                    <span className="text-[7px] text-blue-600">
                      {lesson.duration}
                    </span>

                  </div>
                ))}

              </div>

              <p className="mt-4 text-[8px] text-slate-500">
                99 more videos
              </p>

              <p className="mt-5 text-[8px] leading-4 text-slate-500">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>

              <div className="mt-3">

                <span className="text-xl font-bold text-blue-600">
                  $25
                </span>

                <span className="ml-1 text-[7px] text-slate-400">
                  /Lifetime
                </span>

              </div>

              <button className="mt-4 w-full rounded-full bg-[#c1ff19] py-2.5 text-[8px] font-bold text-slate-900">
                Enroll Now
              </button>

              {/* Includes */}
              <h3 className="mt-5 text-[10px] font-bold text-slate-900">
                This course include
              </h3>

              <div className="mt-4 space-y-3">

                <p className="text-[8px] text-slate-500">
                  ▣ &nbsp; Learning Resources
                </p>

                <p className="text-[8px] text-slate-500">
                  ♧ &nbsp; Quality Lesson Videos
                </p>

                <p className="text-[8px] text-slate-500">
                  ♧ &nbsp; Certificate of Completion
                </p>

                <p className="text-[8px] text-slate-500">
                  ♧ &nbsp; Private Consultation
                </p>

              </div>

              {/* Creator */}
              <div className="mt-5 border-t border-slate-200 pt-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-700">
                    PS
                  </div>

                  <div>

                    <p className="text-[8px] font-bold text-slate-900">
                      PurePearl Studio
                    </p>

                    <p className="text-[7px] text-slate-500">
                      Professional Creator
                    </p>

                  </div>

                </div>

                <p className="mt-4 text-[8px] leading-4 text-slate-500">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <button className="mt-3 rounded-full border border-slate-200 px-3 py-1.5 text-[7px] text-slate-600">
                  See Full Profile
                </button>

              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto grid max-w-[1100px] gap-10 px-8 py-10 md:grid-cols-[1.7fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <a
              href="/"
              className="flex items-center gap-1.5 text-[12px] font-bold text-slate-900"
            >

              <span className="relative h-4 w-5">

                <span className="absolute left-0 top-0 h-3 w-3 rounded-br-lg bg-[#c1ff19]" />

                <span className="absolute left-[7px] top-[6px] h-2.5 w-3 rounded-r-full bg-[#c1ff19]" />

              </span>

              ByteSpace

            </a>

            <p className="mt-4 max-w-[250px] text-[7px] leading-4 text-slate-500">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="mt-5 flex max-w-[220px]">

              <input
                type="email"
                placeholder="Enter your email"
                className="h-7 flex-1 rounded-full border border-slate-200 px-3 text-[7px] outline-none"
              />

              <button className="-ml-8 rounded-full bg-[#c1ff19] px-4 text-[7px] font-bold text-slate-900">
                Search
              </button>

            </div>

            <p className="mt-4 max-w-[270px] text-[6px] leading-3 text-slate-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>

          </div>

          {/* Featured */}
          <div>

            <h3 className="text-[7px] font-bold text-slate-900">
              Featured Courses
            </h3>

            <div className="mt-4 space-y-2 text-[7px] text-slate-500">
              <p>Featured Categories</p>
              <p>Business</p>
              <p>IT</p>
              <p>Design</p>
            </div>

          </div>

          {/* Development */}
          <div>

            <h3 className="text-[7px] font-bold text-slate-900">
              Development
            </h3>

            <div className="mt-4 space-y-2 text-[7px] text-slate-500">
              <p>Marketing</p>
              <p>Photography</p>
              <p>Finance</p>
              <p>Sport</p>
            </div>

          </div>

          {/* Creator */}
          <div>

            <h3 className="text-[7px] font-bold text-slate-900">
              Become a Creator
            </h3>

            <div className="mt-4 space-y-2 text-[7px] text-slate-500">
              <p>Affiliate Program</p>
              <p>Contact</p>
              <p>Help</p>
              <p>About</p>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-3 border-t border-slate-200 px-8 py-4 text-[6px] text-slate-400 sm:flex-row">

          <p>
            © 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Settings</span>
          </div>

        </div>

      </footer>

    </main>
  );
}