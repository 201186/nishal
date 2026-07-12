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
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">

          <h1 className="mb-2 text-4xl font-bold">
            {standardData.title}
          </h1>

          <p className="mb-10 text-slate-600">
            Choose a subject to start playing.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standardData.subjects.map((subject) => (
              <Link
                key={subject.slug}
                href={`/games/${standardData.slug}/${subject.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="text-5xl">📚</div>

                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  {subject.title}
                </h2>

                <p className="mt-2 text-slate-600">
                  {subject.games.length} Games
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-medium text-blue-600">
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