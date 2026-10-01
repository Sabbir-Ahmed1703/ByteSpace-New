"use client";
import React, { useState } from "react";
import {
  Search,
  Share2,
  Play,
  Star,
  Users,
  Clock3,
  Check,
  BookOpen,
  Award,
  LockKeyhole,
  Mail,
  ChevronDown,
} from "lucide-react";

import "./CourseDetails.css";

const CourseDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [email, setEmail] = useState("");

  const sneakPeekImages = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=500&q=80",
  ];

  const keyPoints = [
    "Fundamental Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  return (
    <div className="course-page">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">

          <div className="brand">
            <div className="brand-icon">
              <span></span>
            </div>
            <span className="brand-name">ByteSpace</span>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#creators">Creators</a>
          </nav>

          <div className="nav-right">
            <a href="#signin">Sign In</a>
            <a href="#join">Join Us</a>

            <button className="bag-button" aria-label="Shopping bag">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 8h12l1 13H5L6 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
            </button>
          </div>

        </div>
      </header>


      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">

        <div className="hero-container">

          <div className="course-heading">

            <div className="heading-left">

              <h1>
                Build Digital Asset: A Comprehensive Guide
              </h1>

              <p className="subtitle">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              <p className="creator-name">
                by <strong>purepearl studio</strong>
              </p>

              <div className="course-meta">

                <span className="meta-pill level-pill">
                  <span className="level-dot"></span>
                  Intermediate
                </span>

                <span className="meta-pill">
                  <Star size={12} fill="currentColor" />
                  4.8 (72 reviews)
                </span>

                <span className="meta-pill">
                  <Users size={12} />
                  199 Students
                </span>

              </div>

            </div>

            <button className="share-btn">
              <Share2 size={13} />
              Share
            </button>

          </div>


          {/* ================= VIDEO + COURSE CARD ================= */}
          <div className="hero-content">

            <div className="video-wrapper">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=85"
                alt="Course preview"
              />

              <div className="video-overlay"></div>

              <button className="play-button">
                <Play size={20} fill="white" />
              </button>

            </div>


            {/* COURSE PURCHASE CARD */}
            <aside className="course-card">

              <div className="course-card-top">

                <h3>112 Lessons (24 hours)</h3>

                <div className="lesson-list">

                  <div className="lesson-row">
                    <span>
                      <b>01</b>
                      Introduction to Digital Asset
                    </span>
                    <small>12 mins</small>
                  </div>

                  <div className="lesson-row">
                    <span>
                      <b>02</b>
                      Design Principles for Impact
                    </span>
                    <small>21 mins</small>
                  </div>

                  <div className="lesson-row">
                    <span>
                      <b>03</b>
                      Advanced Techniques in Digital Creation
                    </span>
                    <small>16 mins</small>
                  </div>

                </div>

                <p className="more-videos">
                  +99 more videos
                </p>

                <p className="ready-text">
                  Ready to Dive In? Enroll Now and Start
                  Building Your Digital Future!
                </p>

                <div className="price">
                  $25
                  <span>/Lifetime</span>
                </div>

                <button className="enroll-btn">
                  Enroll Now
                </button>

              </div>


              <div className="includes-section">

                <h4>This course include</h4>

                <div className="include-item">
                  <BookOpen size={13} />
                  Learning Resources
                </div>

                <div className="include-item">
                  <Play size={13} />
                  Quality Lesson Videos
                </div>

                <div className="include-item">
                  <Award size={13} />
                  Certificate of Completion
                </div>

                <div className="include-item">
                  <LockKeyhole size={13} />
                  Private Consultation
                </div>

              </div>


              <div className="instructor-mini">

                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                  alt="PurePearl Studio"
                />

                <div>
                  <strong>PurePearl Studio</strong>
                  <span>Professional Creator</span>
                </div>

              </div>

              <p className="mini-description">
                Ready to Dive In? Enroll Now and Start
                Building Your Digital Future!
              </p>

            </aside>

          </div>

        </div>

      </section>


      {/* ================= MAIN DETAILS ================= */}
      <main className="details-section">

        <div className="details-container">

          {/* LEFT CONTENT */}
          <div className="details-main">

            {/* TABS */}
            <div className="tabs">

              {["About", "Lessons", "Reviews"].map((tab) => (
                <button
                  key={tab}
                  className={
                    activeTab === tab
                      ? "tab active"
                      : "tab"
                  }
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}

            </div>


            {/* ABOUT CONTENT */}
            {activeTab === "About" && (
              <div className="about-content">

                <h2>Description</h2>

                <p>
                  Embark on an enlightening exploration into the world
                  of digital creation with our comprehensive course,
                  "Build Digital Assets: A Comprehensive Guide."
                  This transformative learning experience invites you
                  to delve deep into the intricacies of crafting
                  impactful digital content.
                </p>

                <p>
                  From foundational concepts to mastering advanced
                  techniques, this guide is meticulously curated to
                  empower you with the skills essential for navigating
                  the dynamic landscape of digital asset creation.
                </p>

                <p>
                  In the initial modules, you'll establish a solid
                  foundation by immersing yourself in the foundational
                  concepts that form the backbone of digital asset
                  creation. Understand the fundamental elements that
                  contribute to compelling digital content and gain
                  proficiency in leveraging these elements to
                  communicate effectively in the digital realm.
                </p>

                <p>
                  As you progress through the course, you'll ascend
                  to higher levels of expertise, delving into the
                  nuances of design principles that drive impactful
                  creations. Uncover the secrets behind effective
                  visual communication, exploring color theory,
                  typography, and layout strategies that elevate your
                  digital assets to new heights.
                </p>

                <p>
                  Engage in hands-on exercises that reinforce your
                  understanding, allowing you to apply these principles
                  in practical scenarios.
                </p>


                {/* SNEAK PEEK */}
                <section className="sneak-section">

                  <h3>Sneak Peek</h3>

                  <div className="sneak-grid">

                    {sneakPeekImages.map((image, index) => (
                      <div
                        className="sneak-image"
                        key={index}
                      >
                        <img
                          src={image}
                          alt={`Sneak peek ${index + 1}`}
                        />
                      </div>
                    ))}

                  </div>

                </section>


                {/* KEY POINTS */}
                <section className="key-section">

                  <h3>Key Points</h3>

                  <div className="key-list">

                    {keyPoints.map((point, index) => (
                      <div
                        className="key-item"
                        key={index}
                      >
                        <span className="check-circle">
                          <Check size={10} strokeWidth={3} />
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}

                  </div>

                </section>

              </div>
            )}


            {/* LESSONS */}
            {activeTab === "Lessons" && (
              <div className="tab-content">

                <h2>Course Lessons</h2>

                <div className="lesson-card">

                  <div>
                    <span className="lesson-number">01</span>
                    <div>
                      <strong>
                        Introduction to Digital Asset
                      </strong>
                      <p>
                        Understanding the fundamentals of digital
                        creation.
                      </p>
                    </div>
                  </div>

                  <span>12 mins</span>

                </div>

                <div className="lesson-card">

                  <div>
                    <span className="lesson-number">02</span>
                    <div>
                      <strong>
                        Design Principles for Impact
                      </strong>
                      <p>
                        Learn the principles behind effective design.
                      </p>
                    </div>
                  </div>

                  <span>21 mins</span>

                </div>

                <div className="lesson-card">

                  <div>
                    <span className="lesson-number">03</span>
                    <div>
                      <strong>
                        Advanced Digital Creation
                      </strong>
                      <p>
                        Move beyond the basics with advanced
                        techniques.
                      </p>
                    </div>
                  </div>

                  <span>16 mins</span>

                </div>

              </div>
            )}


            {/* REVIEWS */}
            {activeTab === "Reviews" && (
              <div className="tab-content reviews-content">

                <h2>Student Reviews</h2>

                <div className="review-summary">

                  <div className="rating-big">
                    4.8
                  </div>

                  <div>
                    <div className="stars">
                      ★★★★★
                    </div>

                    <p>
                      Based on 72 reviews
                    </p>
                  </div>

                </div>

                <div className="review-item">
                  <strong>Excellent course</strong>
                  <p>
                    Very clear explanations and practical examples.
                  </p>
                </div>

                <div className="review-item">
                  <strong>Very helpful</strong>
                  <p>
                    The lessons helped me improve my digital
                    design skills.
                  </p>
                </div>

              </div>
            )}

          </div>


          {/* RIGHT INSTRUCTOR CARD */}
          <aside className="creator-card">

            <div className="creator-image-wrapper">

              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                alt="Creator"
              />

            </div>

            <div className="creator-info">

              <span className="creator-label">
                COURSE CREATOR
              </span>

              <h3>PurePearl Studio</h3>

              <p>
                Professional digital creator helping learners
                build practical skills for today's digital world.
              </p>

              <button className="profile-btn">
                See Full Profile
              </button>

            </div>

          </aside>

        </div>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand-column">

            <div className="brand footer-brand">

              <div className="brand-icon">
                <span></span>
              </div>

              <span className="brand-name">
                ByteSpace
              </span>

            </div>

            <p className="footer-intro">
              Stay up to date with our latest features and
              releases by joining our newsletter.
            </p>

            <div className="newsletter">

              <div className="email-wrapper">

                <Mail size={13} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

              <button>
                Search
              </button>

            </div>

            <p className="privacy-text">
              By subscribing, you agree to our Privacy Policy
              and consent to receive updates from our company.
            </p>

          </div>


          {/* FOOTER LINKS */}
          <div className="footer-links">

            <div>
              <h4>Featured Courses</h4>
              <a href="#">Business</a>
              <a href="#">IT</a>
              <a href="#">Design</a>
            </div>

            <div>
              <h4>Featured Categories</h4>
              <a href="#">Marketing</a>
              <a href="#">Photography</a>
              <a href="#">Finance</a>
              <a href="#">Sport</a>
            </div>

            <div>
              <h4>Development</h4>
              <a href="#">Marketing</a>
              <a href="#">Photography</a>
              <a href="#">Finance</a>
              <a href="#">Sport</a>
            </div>

            <div>
              <h4>Become a Creator</h4>
              <a href="#">Affiliate Program</a>
              <a href="#">Contact</a>
              <a href="#">Help</a>
              <a href="#">About</a>
            </div>

          </div>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <span>
            © 2025 ByteSpace. All rights reserved.
          </span>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>

        </div>

      </footer>

    </div>
  );
};

export default CourseDetails;