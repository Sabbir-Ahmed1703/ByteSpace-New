export type Course = {
  id: number;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: string;
  price: string;
  image: string;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete Web Development",
    category: "Development",
    instructor: "ByteSpace Instructor",
    rating: 4.9,
    students: "2.4K",
    price: "$49",
    image: "/course-placeholder.jpg",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "ByteSpace Instructor",
    rating: 4.8,
    students: "1.8K",
    price: "$39",
    image: "/course-placeholder.jpg",
  },
  {
    id: 3,
    title: "JavaScript From Zero to Advanced",
    category: "Programming",
    instructor: "ByteSpace Instructor",
    rating: 4.9,
    students: "3.1K",
    price: "$45",
    image: "/course-placeholder.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing Essentials",
    category: "Marketing",
    instructor: "ByteSpace Instructor",
    rating: 4.7,
    students: "1.2K",
    price: "$35",
    image: "/course-placeholder.jpg",
  },
];