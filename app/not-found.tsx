export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
        Error 404
      </p>

      <h1 className="mt-4 text-6xl font-black sm:text-8xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-slate-400">
        Sorry, the page you are looking for does not exist or may have
        been moved.
      </p>

      <a
        href="/"
        className="mt-8 rounded-full bg-lime-300 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-lime-200"
      >
        Back to Home
      </a>
    </main>
  );
}