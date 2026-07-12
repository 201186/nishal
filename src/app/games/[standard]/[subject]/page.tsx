import Link from "next/link";
import { notFound } from "next/navigation";

import { MainLayout } from "@/components/layout";
import { gameData } from "@/data/games";

interface PageProps {
  params: Promise<{
    standard: string;
    subject: string;
  }>;
}

export default async function SubjectPage({
  params,
}: PageProps) {
  const { standard, subject } = await params;

  const standardData = gameData.find(
    (item) => item.slug === standard
  );

  if (!standardData) {
    notFound();
  }

  const subjectData = standardData.subjects.find(
    (item) => item.slug === subject
  );

  if (!subjectData) {
    notFound();
  }

  return (
    <MainLayout>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">

          <h1 className="text-4xl font-bold">
            {subjectData.title}
          </h1>

          <p className="mt-2 mb-10 text-slate-600">
            Choose a game to start learning.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjectData.games.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${standard}/${subject}/${game.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-5xl">🎮</div>

                <h2 className="mt-4 text-xl font-bold">
                  {game.title}
                </h2>

                <p className="mt-2 text-slate-600">
                  {game.type}
                </p>

                <span className="mt-6 inline-block font-semibold text-blue-600">
                  Play Game →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </MainLayout>
  );
}