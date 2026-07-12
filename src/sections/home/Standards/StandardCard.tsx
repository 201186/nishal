import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StandardCardProps {
  id: number;
  title: string;
  color: string;
}

const colorClasses: Record<string, string> = {
  blue: "from-blue-500 to-sky-500",
  purple: "from-purple-500 to-fuchsia-500",
  orange: "from-orange-500 to-amber-500",
  red: "from-red-500 to-rose-500",
  yellow: "from-yellow-400 to-orange-400",
  indigo: "from-indigo-500 to-blue-500",
  green: "from-green-500 to-emerald-500",
  cyan: "from-cyan-500 to-sky-500",
};

export default function StandardCard({
  id,
  title,
  color,
}: StandardCardProps) {
  return (
    <Link
      href={`/standard/${id}`}
      className="group block"
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
            colorClasses[color] ?? colorClasses.blue
          }`}
        >
          <span className="text-3xl font-extrabold text-white">
            {id}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Explore study materials, notes, quizzes and more.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          Explore Standard

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}