import Link from "next/link";
import { notFound } from "next/navigation";
import { learningData } from "@/sections/learning/data/learningData";

type PageProps = {
  params: Promise<{
    standard: string;
    subject: string;
  }>;
};

export default async function SubjectPage({ params }: PageProps) {
  const { standard: standardId, subject: subjectId } = await params;

  const standard = learningData.find(
    (item) => item.id === standardId
  );

  if (!standard) {
    notFound();
  }

  const subject = standard.subjects.find(
    (item) => item.id === subjectId
  );

  if (!subject) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Link
          href={`/learning/${standard.id}`}
          className="mb-8 inline-flex items-center font-bold text-slate-600 transition hover:text-violet-700"
        >
          ← {standard.name} ના વિષયો
        </Link>

        <div className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
            <span>{subject.icon}</span>
            {standard.name}
          </span>

          <h1 className="mt-5 text-3xl font-black text-slate-900 sm:text-5xl">
            {subject.name}
          </h1>

          <p className="mt-3 text-slate-600">
            શીખવા માટે પ્રવૃત્તિ પસંદ કરો
          </p>
        </div>

        {subject.activities.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subject.activities.map((activity) => (
              <Link
                key={activity.id}
                href={`/learning/${standard.id}/${subject.id}/${activity.id}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-4xl">
                  {activity.icon}
                </div>

                <h2 className="text-xl font-black text-slate-800">
                  {activity.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-500">
                  {activity.description}
                </p>

                <div className="mt-6 font-bold text-violet-600">
                  શીખવાનું શરૂ કરો →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
            <div className="text-5xl">📚</div>

            <h2 className="mt-4 text-xl font-black text-slate-800">
              આ વિષયની સામગ્રી ટૂંક સમયમાં ઉમેરવામાં આવશે
            </h2>
          </div>
        )}
      </section>
    </div>
  );
}