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
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-7 sm:mb-9">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {subjectData.title}
            </h1>

            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Choose a game to start learning.
            </p>
          </div>

          {/* Game Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {subjectData.games.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${standard}/${subject}/${game.slug}`}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400
                  hover:shadow-lg
                  sm:p-5
                "
              >
                {/* Icon */}
                <div className="text-3xl sm:text-4xl">
                  🎮
                </div>

                {/* Title */}
                <h2 className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
                  {game.title}
                </h2>

                {/* Type */}
                <p className="mt-1.5 text-sm text-slate-600">
                  {game.type}
                </p>

                {/* Action */}
                <span className="mt-4 inline-block text-sm font-semibold text-blue-600 sm:text-base">
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