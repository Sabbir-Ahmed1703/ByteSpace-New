export type LearningPath = {
  id: number;
  title: string;
  description: string;
  courses: number;
  level: string;
};

export const learningPaths: LearningPath[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Build modern, responsive websites and web applications from the ground up.",
    courses: 12,
    level: "Beginner to Advanced",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Learn design principles, user research, wireframing, and modern interface design.",
    courses: 9,
    level: "Beginner to Advanced",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Master APIs, databases, server-side programming, and scalable applications.",
    courses: 10,
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Develop practical skills in content, social media, SEO, and online marketing.",
    courses: 8,
    level: "Beginner",
  },
];