const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Balancing Productivity and...",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Learn Figma from Basic",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Build Digital Asset",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "the Power of Big Data",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Balancing Productivity an...",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Mastering Money Manage...",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "From Idea to Startup Succ...",
    instructor: "purposeful studio",
    rating: "4.5",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-[155px] overflow-hidden bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />

        {/* Image overlay information */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full bg-black/55 px-3 py-1.5 text-[8px] text-white backdrop-blur-sm">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-3 pt-2.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-[11px] font-bold text-slate-950">
              {course.title}
            </h3>

            <p className="mt-0.5 text-[7px] text-blue-600">
              by {course.instructor}
            </p>
          </div>

          <span className="shrink-0 text-[9px] text-slate-500">
            {course.rating} ★
          </span>
        </div>

        {/* Level + students */}
        <div className="mt-2 flex items-center justify-between">
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[7px] text-slate-500">
            ◒ Beginner
          </span>

          <div className="flex -space-x-1.5">
            <span className="h-5 w-5 rounded-full border border-white bg-orange-300" />
            <span className="h-5 w-5 rounded-full border border-white bg-blue-300" />
            <span className="h-5 w-5 rounded-full border border-white bg-pink-300" />
            <span className="h-5 w-5 rounded-full border border-white bg-purple-300" />
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white bg-[#c1ff19] text-[5px] font-bold text-slate-900">
              26+
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-3">
          <span className="text-[11px] font-bold text-blue-600">
            {course.price}
          </span>

          <span className="ml-0.5 text-[6px] text-slate-400">
            /Lifetime
          </span>
        </div>
      </div>
    </article>
  );
}

function FilterButton({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: string;
}) {
  return (
    <button className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-[8px] font-medium text-slate-600 transition hover:border-slate-400">
      <span>{icon}</span>
      {children}
    </button>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================================================= */}
      {/* HEADER / SEARCH HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#103fe3]">

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
            `,
            backgroundSize: "43px 34px",
          }}
        />

        <div className="relative mx-auto max-w-[1280px]">

          {/* Navbar */}
          <nav className="flex h-[34px] items-center justify-between px-8 text-white lg:px-12">

            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-1.5 text-[11px] font-bold"
            >
              <span className="relative h-4 w-5">
                <span className="absolute left-0 top-0 h-3 w-3 rounded-br-lg bg-[#c1ff19]" />
                <span className="absolute left-[7px] top-[6px] h-2.5 w-3 rounded-r-full bg-[#c1ff19]" />
              </span>

              ByteSpace
            </a>

            {/* Navigation */}
            <div className="hidden items-center gap-5 text-[8px] md:flex">
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

            {/* Right */}
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

          {/* Hero title */}
          <div className="flex flex-col items-center px-6 pb-7 pt-7">

            <h1 className="text-[20px] font-bold tracking-tight text-white">
              Find Your Next Course
            </h1>

            {/* Search bar */}
            <div className="mt-4 flex w-full max-w-[255px] items-center gap-2">

              <div className="flex h-[22px] flex-1 items-center rounded-full bg-white px-3 shadow-sm">
                <span className="mr-2 text-[9px] text-slate-400">
                  ⌕
                </span>

                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent text-[8px] text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>

              <button className="flex h-[22px] items-center gap-2 rounded-full bg-[#c1ff19] px-3 text-[8px] font-bold text-slate-900">
                Courses
                <span className="text-[7px]">⌄</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FILTERS + COURSES */}
      {/* ================================================= */}

      <section className="mx-auto max-w-[1050px] px-8 py-7">

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3">

          <div className="flex flex-wrap gap-2">
            <FilterButton icon="▽">
              Filter
            </FilterButton>

            <FilterButton icon="▥">
              Level
            </FilterButton>

            <FilterButton icon="♧">
              Category
            </FilterButton>
          </div>

          <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[8px] text-slate-600">
            ☷ Most relevant
          </button>
        </div>

        {/* Categories */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-3 py-1.5 text-[7px] font-medium ${
                index === 0
                  ? "bg-[#c1ff19] text-slate-950"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <a
              key={course.id}
              href={`/courses/${course.id}`}
              className="block"
            >
              <CourseCard course={course} />
            </a>
          ))}
        </div>

        {/* ================================================= */}
        {/* PAGINATION */}
        {/* ================================================= */}

        <div className="flex items-center justify-center gap-5 py-12">

          <button className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-500 hover:bg-slate-50">
            ‹
          </button>

          <div className="flex items-center gap-5 text-[9px]">
            <button className="text-slate-400">1</button>

            <button className="font-bold text-slate-900">2</button>

            <button className="font-bold text-slate-900">3</button>

            <button className="font-bold text-slate-900">4</button>

            <button className="font-bold text-slate-900">5</button>
          </div>

          <button className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-500 hover:bg-slate-50">
            ›
          </button>
        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto grid max-w-[1050px] gap-10 px-8 py-10 md:grid-cols-[1.8fr_1fr_1fr_1fr]">

          {/* Newsletter */}
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

            <p className="mt-4 max-w-[260px] text-[7px] leading-4 text-slate-500">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="mt-5 flex max-w-[220px] gap-2">

              <input
                type="email"
                placeholder="Enter your email"
                className="h-7 flex-1 rounded-full border border-slate-200 px-3 text-[7px] outline-none"
              />

              <button className="rounded-full bg-[#c1ff19] px-4 text-[7px] font-bold text-slate-900">
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

          {/* Categories */}
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

          {/* Company */}
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

        {/* Bottom footer */}
        <div className="mx-auto flex max-w-[1050px] flex-col justify-between gap-3 border-t border-slate-200 px-8 py-4 text-[6px] text-slate-400 sm:flex-row">
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