import Link from "next/link";

interface Subject {
  slug: string;
  title: string;
  games: unknown[];
}

interface Standard {
  slug: string;
  title: string;
  subjects: Subject[];
}

interface StandardCardProps {
  standard: Standard;
}

export default function StandardCard({
  standard,
}: StandardCardProps) {
  const totalGames = standard.subjects.reduce(
    (count, subject) => count + subject.games.length,
    0
  );

  return (
    <Link
      href={`/games/${standard.slug}`}
      className="group block"
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
          🎓
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {standard.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-slate-600">
          Interactive educational games for {standard.title}.
        </p>

        {/* Stats */}
        <div className="mt-6 flex items-center gap-4">

          <div className="rounded-xl bg-slate-100 px-3 py-2">
            <p className="text-xs text-slate-500">
              Subjects
            </p>

            <p className="font-semibold text-slate-900">
              {standard.subjects.length}
            </p>
          </div>

          <div className="rounded-xl bg-blue-100 px-3 py-2">
            <p className="text-xs text-blue-700">
              Games
            </p>

            <p className="font-semibold text-blue-700">
              {totalGames}
            </p>
          </div>

        </div>

        {/* Button */}
        <div className="mt-8 flex items-center justify-between">

          <span className="font-medium text-blue-600">
            Explore Games
          </span>

          <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>

        </div>

      </div>
    </Link>
  );
}