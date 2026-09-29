import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import LearningPaths from "@/components/LearningPaths";
import GrowthSection from "@/components/GrowthSection";
import CreatorsSection from "@/components/CreatorsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CoursesSection />
      <LearningPaths />
      <GrowthSection />
      <CreatorsSection />
      <CTASection />
    </main>
  );
}