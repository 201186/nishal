import { notFound } from "next/navigation";

import { MainLayout } from "@/components/layout";
import { gameData } from "@/data/games";

interface PageProps {
  params: Promise<{
    standard: string;
    subject: string;
    slug: string;
  }>;
}

export default async function GamePage({ params }: PageProps) {
  const { standard, subject, slug } = await params;

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

  const game = subjectData.games.find(
    (item) => item.slug === slug
  );

  if (!game || !game.isActive) {
    notFound();
  }

  const gameUrl = `/games/${standard}/${subject}/${slug}.html`;

  return (
    <MainLayout>
      <main className="py-4 sm:py-5 lg:py-6">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <header className="mb-3 sm:mb-4">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {game.title}
            </h1>

            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              {standardData.title} • {subjectData.title}
            </p>
          </header>

          <iframe
            src={gameUrl}
            title={game.title}
            className="
              block
              h-[700px]
              w-full
              overflow-hidden
              border-0
              bg-transparent
              sm:h-[760px]
              lg:h-[800px]
            "
            scrolling="no"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </main>
    </MainLayout>
  );
}