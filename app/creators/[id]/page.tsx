"use client";

import { useState } from "react";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  image: string;
  price: string;
  rating: string;
  reviews: number;
  hours: string;
  skills: string[];
};

const projects: Project[] = [
  {
    title: "Learn Figma from Basic",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=85",
    price: "$25",
    rating: "4.6",
    reviews: 18,
    hours: "4 hours",
    skills: ["Figma", "UI/UX", "Design"],
  },
  {
    title: "Build Digital Asset",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    price: "$35",
    rating: "4.4",
    reviews: 22,
    hours: "3 hours",
    skills: ["Branding", "Web", "Assets"],
  },
  {
    title: "The Power of Big Data",
    category: "Data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    price: "$28",
    rating: "4.5",
    reviews: 16,
    hours: "5 hours",
    skills: ["Python", "Analytics", "SQL"],
  },
  {
    title: "Balancing Productivity and Focus",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    price: "$20",
    rating: "4.5",
    reviews: 12,
    hours: "2 hours",
    skills: ["Productivity", "Planning", "Focus"],
  },
  {
    title: "Mastering Money Management",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
    price: "$30",
    rating: "4.5",
    reviews: 19,
    hours: "4 hours",
    skills: ["Finance", "Planning", "Business"],
  },
  {
    title: "From Idea to Startup Success",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    price: "$35",
    rating: "4.6",
    reviews: 24,
    hours: "6 hours",
    skills: ["Startup", "Strategy", "Growth"],
  },
];

const categories = [
  "All",
  "Design",
  "Development",
  "Data",
  "Productivity",
  "Finance",
  "Business",
];

function AvatarStack() {
  return (
    <div className="flex items-center -space-x-2">
      {["A", "B", "C", "D"].map((letter, index) => (
        <span
          key={letter}
          className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold text-white ${
            [
              "bg-blue-500",
              "bg-pink-500",
              "bg-orange-500",
              "bg-purple-500",
            ][index]
          }`}
        >
          {letter}
        </span>
      ))}

      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#c7ff00] text-[8px] font-bold text-slate-900">
        +8
      </span>
    </div>
  );
}

export default function CreatorProfilePage() {
  const [category, setCategory] = useState("All");
  const [followed, setFollowed] = useState(false);
  const [sortNewest, setSortNewest] = useState(false);

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  const displayedProjects = sortNewest
    ? [...filteredProjects].reverse()
    : filteredProjects;

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#073be5] text-white">

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "53px 53px",
          }}
        />

        {/* ================= NAVBAR ================= */}

        <nav className="relative z-10 border-b border-white/10">
          <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-6">

            <Link
              href="/"
              className="flex items-center gap-1 text-sm font-bold"
            >
              <span className="text-xl font-black text-[#c7ff00]">
                b
              </span>
              ByteSpace
            </Link>

            <div className="hidden items-center gap-8 text-[10px] md:flex">
              <Link href="/" className="hover:text-[#c7ff00]">
                Home
              </Link>

              <Link href="/search" className="hover:text-[#c7ff00]">
                Courses
              </Link>

              <Link
                href="/creators"
                className="text-[#c7ff00]"
              >
                Creators
              </Link>
            </div>

            <div className="flex items-center gap-5 text-[10px]">
              <Link href="/login">Sign In</Link>
              <Link href="/register">Join Us</Link>
              <span>♧</span>
            </div>

          </div>
        </nav>

        {/* ================= PROFILE ================= */}

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-12">

          <div className="flex flex-col gap-7 md:flex-row md:items-start">

            {/* Profile Picture */}

            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-white/20 bg-gradient-to-br from-pink-300 via-purple-400 to-blue-500 text-3xl font-black shadow-xl">
              PP
            </div>

            {/* Profile Info */}

            <div className="flex-1">

              <div className="flex flex-wrap items-center gap-3">

                <h1 className="text-3xl font-bold">
                  PurePearl Studio
                </h1>

                <span className="rounded-full bg-[#c7ff00] px-3 py-1 text-[9px] font-bold text-slate-900">
                  Creator
                </span>

              </div>

              <p className="mt-2 text-sm text-blue-100">
                Freelance UI/UX & Web designer
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-blue-50">
                Welcome to the creative world of Creator&apos;s
                Haven! Here, you&apos;ll discover the passion,
                expertise, and inspiration that drive my creative
                journey. Let&apos;s explore and learn together.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50">
                Join my creative portfolio, showcasing a glimpse
                of my artistic endeavors. From digital designs to
                multimedia projects, each piece tells a unique story.
              </p>

              <p className="mt-3 text-sm text-blue-50">
                Enjoy the world of creativity with me.
              </p>

              {/* Stats */}

              <div className="mt-7 flex flex-wrap items-center gap-4">

                <div className="rounded-full bg-white/10 px-5 py-2 text-xs">
                  ♙ <strong>8</strong> Projects
                </div>

                <div className="rounded-full bg-white/10 px-5 py-2 text-xs">
                  ♧ <strong>12</strong> Followers
                </div>

                <button
                  onClick={() => setFollowed(!followed)}
                  className="rounded-full bg-[#c7ff00] px-7 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-[#d8ff50]"
                >
                  {followed ? "Following" : "Follow"}
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <section className="mx-auto max-w-[1200px] px-6 py-10">

        {/* Toolbar */}

        <div className="flex flex-col justify-between gap-4 md:flex-row">

          <div className="flex flex-wrap gap-3">

            <button className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-600 hover:border-slate-400">
              ☰ Filter
            </button>

            <button className="rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-600">
              ♧ Level
            </button>

            <button className="rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-600">
              ▦ Category
            </button>

          </div>

          <button
            onClick={() => setSortNewest(!sortNewest)}
            className="rounded-full border border-slate-200 px-5 py-2 text-xs text-slate-600"
          >
            ↕ {sortNewest ? "Newest" : "Most relevant"}
          </button>

        </div>

        {/* Categories */}

        <div className="mt-6 flex flex-wrap gap-2">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-xs transition ${
                category === item
                  ? "bg-[#c7ff00] font-semibold text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {displayedProjects.map((project) => (

            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}

              <div className="relative h-[190px] overflow-hidden bg-slate-100">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 flex gap-1.5">

                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[8px] text-slate-700">
                    {project.hours}
                  </span>

                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[8px] text-slate-700">
                    {project.skills.length} Skills
                  </span>

                </div>

              </div>

              {/* Card */}

              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <h2 className="line-clamp-2 text-base font-bold text-slate-900">
                    {project.title}
                  </h2>

                  <span className="shrink-0 text-xs text-slate-500">
                    ★ {project.rating}
                  </span>

                </div>

                <p className="mt-2 text-[10px] text-slate-500">
                  by{" "}
                  <span className="font-semibold text-blue-600">
                    PurePearl Studio
                  </span>
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-xs text-slate-500">
                    ◒ {project.hours}
                  </span>

                  <AvatarStack />

                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                  <div>
                    <span className="text-lg font-bold text-blue-600">
                      {project.price}
                    </span>

                    <span className="ml-1 text-[9px] text-slate-400">
                      /Lifetime
                    </span>
                  </div>

                  <span className="text-[9px] text-slate-400">
                    {project.reviews} reviews
                  </span>

                </div>

              </div>
            </article>

          ))}

        </div>

        {displayedProjects.length === 0 && (
          <div className="py-20 text-center text-sm text-slate-500">
            No projects found.
          </div>
        )}

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

          <div>

            <Link
              href="/"
              className="flex items-center gap-1 text-lg font-bold"
            >
              <span className="text-2xl text-[#c7ff00]">
                b
              </span>
              ByteSpace
            </Link>

            <p className="mt-3 max-w-xs text-xs leading-5 text-slate-500">
              Stay up to date with our latest features and
              releases by joining our newsletter.
            </p>

            <div className="mt-5 flex max-w-xs overflow-hidden rounded-full border border-slate-200">

              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 px-4 py-2 text-xs outline-none"
              />

              <button className="m-1 rounded-full bg-[#c7ff00] px-5 py-2 text-xs font-semibold">
                Search
              </button>

            </div>

          </div>

          <div>
            <h3 className="text-xs font-bold">
              Featured Courses
            </h3>

            <div className="mt-4 space-y-3 text-xs text-slate-500">
              <p>Featured Categories</p>
              <p>Business</p>
              <p>IT</p>
              <p>Design</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold">
              Development
            </h3>

            <div className="mt-4 space-y-3 text-xs text-slate-500">
              <p>Marketing</p>
              <p>Photography</p>
              <p>Finance</p>
              <p>Sport</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold">
              Become a Creator
            </h3>

            <div className="mt-4 space-y-3 text-xs text-slate-500">
              <p>Affiliate Program</p>
              <p>Contact</p>
              <p>Help</p>
              <p>About</p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200">

          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 px-6 py-5 text-[9px] text-slate-400 md:flex-row">

            <span>
              © 2026 ByteSpace. All rights reserved.
            </span>

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