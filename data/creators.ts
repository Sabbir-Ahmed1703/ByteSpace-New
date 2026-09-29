export type Creator = {
  id: number;
  name: string;
  role: string;
  courses: number;
  students: string;
};

export const creators: Creator[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Web Development",
    courses: 12,
    students: "8.4K",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    role: "UI/UX Designer",
    courses: 9,
    students: "6.2K",
  },
  {
    id: 3,
    name: "Daniel Lee",
    role: "Software Engineer",
    courses: 15,
    students: "10.8K",
  },
  {
    id: 4,
    name: "Emma Carter",
    role: "Digital Marketing",
    courses: 8,
    students: "5.7K",
  },
];