type CourseDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Course Details
        </p>

        <h1 className="mt-3 text-5xl font-black text-slate-950">
          Frontend Development
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          Learn modern frontend development through practical lessons,
          projects, and hands-on exercises.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold">
            Course ID: {id}
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold">
            Beginner Friendly
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold">
            24 Lessons
          </span>
        </div>

        <button className="mt-10 rounded-full bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700">
          Start Learning →
        </button>
      </div>
    </main>
  );
}