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
      className="group block h-full"
    >
      <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg sm:p-5">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          🎓
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold text-slate-900">
          {standard.title}
        </h3>

        {/* Description */}
        <p className="mt-1.5 text-sm leading-5 text-slate-600">
          Interactive educational games for {standard.title}.
        </p>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-2">
          <div className="rounded-lg bg-slate-100 px-3 py-1.5">
            <p className="text-[11px] text-slate-500">
              Subjects
            </p>

            <p className="text-sm font-semibold text-slate-900">
              {standard.subjects.length}
            </p>
          </div>

          <div className="rounded-lg bg-blue-100 px-3 py-1.5">
            <p className="text-[11px] text-blue-700">
              Games
            </p>

            <p className="text-sm font-semibold text-blue-700">
              {totalGames}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-blue-600">
            Explore Games
          </span>

          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}