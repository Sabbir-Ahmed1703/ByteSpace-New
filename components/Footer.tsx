export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-14 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black">
              Byte<span className="text-lime-300">Space</span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Learn practical skills, follow structured learning paths,
              and build the future you want.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-bold">Platform</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#courses" className="transition hover:text-white">
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="#learning-paths"
                  className="transition hover:text-white"
                >
                  Learning Paths
                </a>
              </li>

              <li>
                <a
                  href="#creators"
                  className="transition hover:text-white"
                >
                  Creators
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold">Company</h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>

          <p>
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}