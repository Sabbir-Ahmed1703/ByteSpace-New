type CreatorProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CreatorProfilePage({
  params,
}: CreatorProfilePageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-blue-100 text-3xl font-black text-blue-700">
              AM
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Creator Profile
              </p>

              <h1 className="mt-2 text-4xl font-black text-slate-950">
                Alex Morgan
              </h1>

              <p className="mt-2 font-semibold text-slate-600">
                Senior Frontend Developer
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                I help developers build practical frontend skills through
                real-world projects and hands-on learning.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8">
            <div>
              <p className="text-2xl font-black text-slate-950">8</p>
              <p className="mt-1 text-sm text-slate-500">Courses</p>
            </div>

            <div>
              <p className="text-2xl font-black text-slate-950">12K+</p>
              <p className="mt-1 text-sm text-slate-500">Students</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Creator Courses
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-950">
            Courses by Alex Morgan
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              "Modern Frontend Development",
              "React & Next.js Mastery",
              "Building Real-World Interfaces",
              "Advanced JavaScript",
            ].map((course) => (
              <div
                key={course}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-slate-950">
                  {course}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Practical lessons and hands-on projects.
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-10 text-sm text-slate-400">
          Creator ID: {id}
        </p>
      </div>
    </main>
  );
}