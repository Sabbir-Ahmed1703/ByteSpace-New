type CourseReviewsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const reviews = [
  {
    name: "Maya Johnson",
    rating: 5,
    comment: "The course is practical and easy to follow.",
  },
  {
    name: "Ryan Smith",
    rating: 4,
    comment: "Great lessons with useful examples and projects.",
  },
  {
    name: "Olivia Brown",
    rating: 5,
    comment: "I really enjoyed the learning experience.",
  },
];

export default async function CourseReviewsPage({
  params,
}: CourseReviewsPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Course Reviews
        </p>

        <h1 className="mt-3 text-4xl font-black text-slate-950">
          What learners say
        </h1>

        <p className="mt-3 text-slate-500">
          Reviews for Course ID: {id}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl border border-slate-200 p-6"
            >
              <div className="text-lg">
                {"★".repeat(review.rating)}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                “{review.comment}”
              </p>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-950">
                  {review.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}