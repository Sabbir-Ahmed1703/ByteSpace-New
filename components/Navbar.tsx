"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tight text-white">
          Byte<span className="text-lime-300">Space</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-white transition hover:text-lime-300">
            Home
          </a>

          <a href="#courses" className="text-sm font-medium text-white transition hover:text-lime-300">
            Courses
          </a>

          <a href="#creators" className="text-sm font-medium text-white transition hover:text-lime-300">
            Creators
          </a>

          <a href="#about" className="text-sm font-medium text-white transition hover:text-lime-300">
            About
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
            Login
          </button>

          <button className="rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-lime-200">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/20 px-3 py-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-blue-950/95 p-5 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#home" className="text-white">
              Home
            </a>
            <a href="#courses" className="text-white">
              Courses
            </a>
            <a href="#creators" className="text-white">
              Creators
            </a>
            <a href="#about" className="text-white">
              About
            </a>

            <div className="mt-2 flex gap-3">
              <button className="rounded-full border border-white/20 px-5 py-2 text-white">
                Login
              </button>

              <button className="rounded-full bg-lime-300 px-5 py-2 font-semibold text-slate-950">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}