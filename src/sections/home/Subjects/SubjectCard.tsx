import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SubjectCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  color: string;
}

const colorClasses: Record<string, string> = {
  blue: "from-blue-500 to-sky-500",
  green: "from-green-500 to-emerald-500",
  orange: "from-orange-500 to-amber-500",
  purple: "from-purple-500 to-fuchsia-500",
  red: "from-red-500 to-rose-500",
  yellow: "from-yellow-400 to-orange-400",
  indigo: "from-indigo-500 to-blue-500",
  cyan: "from-cyan-500 to-sky-500",
};

export default function SubjectCard({
  title,
  description,
  href,
  icon: Icon,
  color,
}: SubjectCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
    >
      {/* Top Gradient */}
      <div
        className={`h-2 bg-gradient-to-r ${
          colorClasses[color] ?? colorClasses.blue
        }`}
      />

      <div className="p-7">
        {/* Icon */}
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
            colorClasses[color] ?? colorClasses.blue
          }`}
        >
          <Icon size={30} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-slate-500">
          {description}
        </p>

        {/* Button */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          Open Subject

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}