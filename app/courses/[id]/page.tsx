const course = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  instructor: "purposeful studio",
  level: "Intermediate",
  rating: "4.8",
  reviews: "72 reviews",
  students: "199 Students",
  lessons: "112 Lessons",
  duration: "24 hours",
  price: "$25",
};

const lessons = [
  {
    number: "01",
    title: "Introduction to Digital Asset",
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

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const sneakPeekImages = [
  "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80",
];

export default function CourseDetailsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================================================= */}
      {/* HERO / COURSE HEADER */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#103fe3] text-white">

        {/* Grid */}
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
              <a href="/login" className="hover:text-[#c1ff19]">
                Sign In
              </a>

              <a href="/register" className="hover:text-[#c1ff19]">
                Join Us
              </a>

              <span className="text-[12px]">♧</span>
            </div>
          </nav>

          {/* Course heading */}
          <div className="px-8 pb-8 pt-8 lg:px-14">

            <div className="flex items-start justify-between gap-6">

              <div>
                <h1 className="max-w-[700px] text-2xl font-bold tracking-tight sm:text-3xl">
                  {course.title}
                </h1>

                <p className="mt-1 text-[11px] font-medium text-white">
                  {course.subtitle}
                </p>

                <p className="mt-3 text-[8px] text-white">
                  by {course.instructor}
                </p>
              </div>

              <button className="mt-1 flex shrink-0 items-center gap-2 rounded-full bg-[#c1ff19] px-4 py-2 text-[8px] font-semibold text-slate-950">
                <span>⌯</span>
                Share
              </button>
            </div>

            {/* Stats */}
            <div className="mt-5 flex flex-wrap gap-2">

              <span className="rounded-full bg-white px-4 py-1.5 text-[8px] font-medium text-slate-800">
                ▥ &nbsp; {course.level}
              </span>

              <span className="rounded-full bg-white px-4 py-1.5 text-[8px] font-medium text-slate-800">
                ★ &nbsp; {course.rating} ({course.reviews})
              </span>

              <span className="rounded-full bg-white px-4 py-1.5 text-[8px] font-medium text-slate-800">
                ♟ &nbsp; {course.students}
              </span>

            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* MAIN COURSE AREA */}
      {/* ================================================= */}

      <section className="relative">

        <div className="mx-auto max-w-[1280px]">

          <div className="grid gap-7 px-8 py-8 lg:grid-cols-[1fr_290px] lg:px-14">

            {/* LEFT VIDEO */}
            <div>

              <div className="relative h-[270px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[330px]">

                <img
                  src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=1200&q=80"
                  alt="Course preview"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/5">

                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-lg text-slate-700 shadow-lg">
                    ▶
                  </button>

                </div>
              </div>

              {/* Tabs */}
              <div className="mt-8 flex gap-3">

                <button className="rounded-full bg-[#c1ff19] px-4 py-2 text-[8px] font-medium text-slate-900">
                  About
                </button>

                <a
                  href="/courses/1/lessons"
                  className="rounded-full bg-slate-100 px-4 py-2 text-[8px] font-medium text-slate-500"
                >
                  Lessons
                </a>

                <a
                  href="/courses/1/reviews"
                  className="rounded-full bg-slate-100 px-4 py-2 text-[8px] font-medium text-slate-500"
                >
                  Reviews
                </a>

              </div>

              {/* Description */}
              <div className="mt-7 max-w-[650px]">

                <h2 className="text-sm font-bold text-slate-950">
                  Description
                </h2>

                <p className="mt-4 text-[9px] leading-5 text-slate-500">
                  Embark on an enlightening exploration into the world of
                  digital creation with our comprehensive course, "Build
                  Digital Assets: A Comprehensive Guide." This transformative
                  learning experience invites you to delve deep into the
                  intricacies of crafting impactful digital content.
                </p>

                <p className="mt-4 text-[9px] leading-5 text-slate-500">
                  In the initial modules, you'll establish a solid foundation
                  by immersing yourself in the foundational concepts that form
                  the backbone of digital asset creation. Understand the
                  fundamental elements that contribute to creating digital
                  content and gain proficiency in leveraging essential tools
                  to communicate effectively.
                </p>

                <p className="mt-4 text-[9px] leading-5 text-slate-500">
                  As you progress through the course, you'll ascend to higher
                  levels of expertise, delving into the nuances of design
                  principles that drive impactful creations.
                </p>

                {/* Sneak Peek */}
                <h3 className="mt-6 text-sm font-bold text-slate-950">
                  Sneak Peek
                </h3>

                <div className="mt-3 grid grid-cols-4 gap-3">

                  {sneakPeekImages.map((image, index) => (
                    <div
                      key={index}
                      className="h-[58px] overflow-hidden rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`Course preview ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}

                </div>

                {/* Key points */}
                <h3 className="mt-7 text-sm font-bold text-slate-950">
                  Key Points
                </h3>

                <ul className="mt-3 space-y-2">

                  {keyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-[8px] text-slate-600"
                    >
                      <span className="flex h-3 w-3 items-center justify-center rounded-full bg-blue-600 text-[7px] text-white">
                        ✓
                      </span>

                      {point}
                    </li>
                  ))}

                </ul>

              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT COURSE CARD */}
            {/* ================================================= */}

            <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:-mt-[238px]">

              <h2 className="text-sm font-bold text-slate-900">
                {course.lessons} ({course.duration})
              </h2>

              {/* Lesson list */}
              <div className="mt-5 space-y-4">

                {lessons.map((lesson) => (
                  <div
                    key={lesson.number}
                    className="flex items-start gap-3"
                  >

                    <span className="text-[8px] font-medium text-slate-500">
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
                  {course.price}
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

      <footer className="border-t-2 border-[#20d66b] bg-white">

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

          {/* Column */}
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

          {/* Column */}
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

          {/* Column */}
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

        <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-3 border-t border-slate-200 px-8 py-4 text-[6px] text-slate-400 sm:flex-row">

          <p>© 2023 ByteSpace. All rights reserved.</p>

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