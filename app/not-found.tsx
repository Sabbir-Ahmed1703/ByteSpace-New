import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ================= HERO / 404 SECTION ================= */}
      <section className="relative overflow-hidden bg-[#1239d8] text-white">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Navbar */}
        <nav className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between border-b border-white/10 px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-lime-300">b</span>
            <span className="text-sm font-bold text-white">
              ByteSpace
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-xs text-white transition hover:text-lime-300"
            >
              Home
            </Link>

            <Link
              href="/search"
              className="text-xs text-white transition hover:text-lime-300"
            >
              Courses
            </Link>

            <Link
              href="/creators"
              className="text-xs text-white transition hover:text-lime-300"
            >
              Creators
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-5">
            <Link
              href="/login"
              className="text-xs text-white transition hover:text-lime-300"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="text-xs text-white transition hover:text-lime-300"
            >
              Join Us
            </Link>

            <span className="text-sm text-white">♧</span>
          </div>
        </nav>

        {/* 404 Content */}
        <div className="relative z-10 flex min-h-[560px] flex-col items-center justify-center px-6 text-center">
          <p className="text-8xl font-black tracking-tight text-lime-300 sm:text-9xl">
            404
          </p>

          <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
            The page you are looking
            <br />
            for doesn’t exist
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-blue-100 sm:text-base">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            href="/"
            className="mt-8 rounded-full bg-lime-300 px-8 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-lime-200"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
          {/* Brand / Newsletter */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-lime-400">
                b
              </span>

              <span className="text-sm font-bold text-slate-900">
                ByteSpace
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              Stay up to date with our latest features and releases by
              joining our newsletter.
            </p>

            <div className="mt-6 flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-slate-200 px-4 py-3 text-xs outline-none focus:border-blue-500"
              />

              <button className="rounded-full bg-lime-300 px-6 py-3 text-xs font-bold text-slate-950 transition hover:bg-lime-200">
                Search
              </button>
            </div>

            <p className="mt-4 max-w-md text-[10px] leading-5 text-slate-400">
              By subscribing, you agree to our Privacy Policy and consent
              to receive updates from our company.
            </p>
          </div>

          {/* Featured Courses */}
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Featured Courses
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/search"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Featured Categories
              </Link>

              <Link
                href="/search"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Business
              </Link>

              <Link
                href="/search"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                IT
              </Link>

              <Link
                href="/search"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Design
              </Link>
            </div>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Development
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/search"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Marketing
              </Link>

              <Link
                href="/search"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Photography
              </Link>

              <Link
                href="/search"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Finance
              </Link>

              <Link
                href="/search"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Sport
              </Link>
            </div>
          </div>

          {/* Become a Creator */}
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Become a Creator
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/register"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Affiliate Program
              </Link>

              <Link
                href="/"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Contact
              </Link>

              <Link
                href="/"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Help
              </Link>

              <Link
                href="/"
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-slate-200 px-6 py-6 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© 2023 ByteSpace. All rights reserved.</span>

          <div className="flex gap-5">
            <Link href="/" className="hover:text-slate-700">
              Privacy Policy
            </Link>

            <Link href="/" className="hover:text-slate-700">
              Terms of Service
            </Link>

            <Link href="/" className="hover:text-slate-700">
              Cookie Settings
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}