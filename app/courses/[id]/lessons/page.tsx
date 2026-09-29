type CourseLessonsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const lessons = [
  "Introduction to Frontend Development",
  "HTML Fundamentals",
  "CSS Fundamentals",
  "Responsive Web Design",
  "JavaScript Basics",
  "Working with APIs",
  "Building Components",
  "Final Project",
];

export default async function CourseLessonsPage({
  params,
}: CourseLessonsPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Course Lessons
        </p>

        <h1 className="mt-3 text-4xl font-black text-slate-950">
          Frontend Development
        </h1>

        <p className="mt-3 text-slate-500">
          Course ID: {id}
        </p>

        <div className="mt-10 space-y-3">
          {lessons.map((lesson, index) => (
            <div
              key={lesson}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                {index + 1}
              </div>

              <div>
                <h2 className="font-bold text-slate-950">
                  {lesson}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Lesson {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}