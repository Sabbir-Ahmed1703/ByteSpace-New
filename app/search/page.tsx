export default function SearchPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Search
        </p>

        <h1 className="mt-3 text-4xl font-black text-slate-950">
          Find your next course
        </h1>

        <div className="mt-8 flex max-w-2xl gap-3">
          <input
            type="text"
            placeholder="Search courses..."
            className="flex-1 rounded-xl border border-slate-200 bg-white px-5 py-3 outline-none focus:border-blue-600"
          />

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">
            Search
          </button>
        </div>

        <p className="mt-10 text-slate-500">
          Search results will appear here.
        </p>
      </div>
    </main>
  );
}