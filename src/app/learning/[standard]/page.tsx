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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Link
          href="/learning"
          className="mb-8 inline-flex items-center font-bold text-slate-600 transition hover:text-violet-700"
        >
          ← બધા ધોરણ
        </Link>

        <div className="mb-10">
          <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
            📚 નિશાળ Learning
          </span>

          <h1 className="mt-5 text-3xl font-black text-slate-900 sm:text-5xl">
            {standard.name}
          </h1>

          <p className="mt-3 text-slate-600">
            શીખવા માટે વિષય પસંદ કરો
          </p>
        </div>

        {standard.subjects.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {standard.subjects.map((subject) => (
              <Link
                key={subject.id}
                href={`/learning/${standard.id}/${subject.id}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-4xl">
                  {subject.icon}
                </div>

                <h2 className="text-xl font-black text-slate-800">
                  {subject.name}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {subject.activities.length} પ્રવૃત્તિઓ
                </p>

                <div className="mt-5 font-bold text-violet-600">
                  વિષય ખોલો →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
            <div className="text-5xl">📚</div>

            <h2 className="mt-4 text-xl font-black text-slate-800">
              સામગ્રી ટૂંક સમયમાં ઉમેરવામાં આવશે
            </h2>
          </div>
        )}
      </section>
    </div>
  );
}