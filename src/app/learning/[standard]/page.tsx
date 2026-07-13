import Link from "next/link";
import { notFound } from "next/navigation";
import { learningData } from "@/sections/learning/data/learningData";

type PageProps = {
  params: Promise<{
    standard: string;
  }>;
};

export default async function StandardPage({ params }: PageProps) {
  const { standard: standardId } = await params;

  const standard = learningData.find(
    (item) => item.id === standardId
  );

  if (!standard) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Back */}
        <Link
          href="/learning"
          className="mb-6 inline-flex items-center text-sm font-bold text-slate-600 transition hover:text-violet-700 sm:text-base"
        >
          ← બધા ધોરણ
        </Link>

        {/* Header */}
        <div className="mb-7 sm:mb-9">
          <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-bold text-violet-700">
            📚 નિશાળ Learning
          </span>

          <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
            {standard.name}
          </h1>

          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            શીખવા માટે વિષય પસંદ કરો
          </p>
        </div>

        {standard.subjects.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {standard.subjects.map((subject) => (
              <Link
                key={subject.id}
                href={`/learning/${standard.id}/${subject.id}`}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                  text-center
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-200
                  hover:shadow-lg
                  sm:p-5
                "
              >
                {/* Icon */}
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
                  {subject.icon}
                </div>

                {/* Subject */}
                <h2 className="text-lg font-black text-slate-800 sm:text-xl">
                  {subject.name}
                </h2>

                {/* Activities */}
                <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
                  {subject.activities.length} પ્રવૃત્તિઓ
                </p>

                {/* Action */}
                <div className="mt-3 text-sm font-bold text-violet-600 sm:mt-4">
                  વિષય ખોલો →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center sm:p-10">
            <div className="text-4xl sm:text-5xl">📚</div>

            <h2 className="mt-3 text-lg font-black text-slate-800 sm:text-xl">
              સામગ્રી ટૂંક સમયમાં ઉમેરવામાં આવશે
            </h2>
          </div>
        )}
      </section>
    </div>
  );
}