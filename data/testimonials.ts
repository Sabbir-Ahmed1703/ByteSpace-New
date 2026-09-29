export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maya Johnson",
    role: "Frontend Developer",
    quote:
      "ByteSpace helped me turn what I learned into practical skills and real projects.",
  },
  {
    id: 2,
    name: "Ryan Smith",
    role: "Product Designer",
    quote:
      "The structured learning paths made it much easier to know what I should learn next.",
  },
  {
    id: 3,
    name: "Olivia Brown",
    role: "Software Engineer",
    quote:
      "I loved the practical approach. I could immediately apply the concepts to my own projects.",
  },
];