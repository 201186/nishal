import Link from "next/link";
import { notFound } from "next/navigation";

import { MainLayout } from "@/components/layout";
import { gameData } from "@/data/games";

interface PageProps {
  params: Promise<{
    standard: string;
  }>;
}

export default async function StandardPage({
  params,
}: PageProps) {
  const { standard } = await params;

  const standardData = gameData.find(
    (item) => item.slug === standard
  );

  if (!standardData) {
    notFound();
  }

  return (
    <MainLayout>
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-7 sm:mb-9">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {standardData.title}
            </h1>

            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Choose a subject to start playing.
            </p>
          </div>

          {/* Subject Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {standardData.subjects.map((subject) => (
              <Link
                key={subject.slug}
                href={`/games/${standardData.slug}/${subject.slug}`}
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
                  hover:border-blue-500
                  hover:shadow-lg
                  sm:p-5
                "
              >
                <div className="text-3xl sm:text-4xl">
                  📚
                </div>

                <h2 className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
                  {subject.title}
                </h2>

                <p className="mt-1.5 text-sm text-slate-600">
                  {subject.games.length} Games
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 sm:text-base">
                    Explore
                  </span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </MainLayout>
  );
}