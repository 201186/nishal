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
      <main className="py-6">
        <div className="mx-auto max-w-7xl px-4">
          <header className="mb-4">
            <h1 className="text-3xl font-bold text-slate-900">
              {game.title}
            </h1>

            <p className="mt-1 text-slate-600">
              {standardData.title} • {subjectData.title}
            </p>
          </header>

          {/* Open frameless game area */}
          <iframe
            src={gameUrl}
            title={game.title}
            className="block h-[900px] w-full overflow-hidden border-0 bg-transparent"
            scrolling="no"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </main>
    </MainLayout>
  );
}