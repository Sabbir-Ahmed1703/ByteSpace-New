import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import LearningPaths from "@/components/LearningPaths";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CoursesSection />
      <LearningPaths />
    </main>
  );
}