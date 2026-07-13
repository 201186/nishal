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
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Back */}
        <Link
          href={`/learning/${standard.id}`}
          className="mb-6 inline-flex items-center text-sm font-bold text-slate-600 transition hover:text-violet-700 sm:text-base"
        >
          ← {standard.name} ના વિષયો
        </Link>

        {/* Header */}
        <div className="mb-7 sm:mb-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-bold text-violet-700">
            <span>{subject.icon}</span>
            {standard.name}
          </span>

          <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
            {subject.name}
          </h1>

          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            શીખવા માટે પ્રવૃત્તિ પસંદ કરો
          </p>
        </div>

        {subject.activities.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {subject.activities.map((activity) => (
              <Link
                key={activity.id}
                href={`/learning/${standard.id}/${subject.id}/${activity.id}`}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
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
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
                  {activity.icon}
                </div>

                {/* Title */}
                <h2 className="text-lg font-black text-slate-800 sm:text-xl">
                  {activity.title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
                  {activity.description}
                </p>

                {/* Action */}
                <div className="mt-4 text-sm font-bold text-violet-600">
                  શીખવાનું શરૂ કરો →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center sm:p-10">
            <div className="text-4xl sm:text-5xl">📚</div>

            <h2 className="mt-3 text-lg font-black text-slate-800 sm:text-xl">
              આ વિષયની સામગ્રી ટૂંક સમયમાં ઉમેરવામાં આવશે
            </h2>
          </div>
        )}
      </section>
    </div>
  );
}