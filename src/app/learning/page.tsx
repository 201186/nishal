import Link from "next/link";
import { learningData } from "@/sections/learning/data/learningData";

const standardStyles = [
  {
    icon: "🌱",
    card: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-100",
    text: "text-emerald-700",
  },
  {
    icon: "✏️",
    card: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
    text: "text-blue-700",
  },
  {
    icon: "📖",
    card: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
    text: "text-amber-700",
  },
  {
    icon: "🎨",
    card: "bg-pink-50 border-pink-200",
    iconBg: "bg-pink-100",
    text: "text-pink-700",
  },
  {
    icon: "💡",
    card: "bg-violet-50 border-violet-200",
    iconBg: "bg-violet-100",
    text: "text-violet-700",
  },
  {
    icon: "🔬",
    card: "bg-cyan-50 border-cyan-200",
    iconBg: "bg-cyan-100",
    text: "text-cyan-700",
  },
  {
    icon: "🚀",
    card: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
    text: "text-orange-700",
  },
  {
    icon: "🏆",
    card: "bg-rose-50 border-rose-200",
    iconBg: "bg-rose-100",
    text: "text-rose-700",
  },
];

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
            📚 નિશાળ Learning
          </span>

          <h1 className="mt-5 text-3xl font-black text-slate-900 sm:text-5xl">
            ધોરણ પસંદ કરો
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            ધોરણ 1 થી 8 માટે વિષયવાર શૈક્ષણિક સામગ્રી અને પ્રવૃત્તિઓ
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {learningData.map((standard, index) => {
            const style = standardStyles[index];

            return (
              <Link
                key={standard.id}
                href={`/learning/${standard.id}`}
                className={`group rounded-3xl border p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${style.card}`}
              >
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${style.iconBg}`}
                >
                  {style.icon}
                </div>

                <h2 className="text-xl font-black text-slate-800">
                  {standard.name}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  વિષયો 
                </p>

                <div className={`mt-5 font-bold ${style.text}`}>
                  શીખવાનું શરૂ કરો →
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}