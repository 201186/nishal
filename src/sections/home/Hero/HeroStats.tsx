import {
  BookOpen,
  FileText,
  GraduationCap,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Questions",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BookOpen,
    value: "500+",
    label: "Notes",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FileText,
    value: "100+",
    label: "Previous Papers",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: GraduationCap,
    value: "1–8",
    label: "Standards",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-xl lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="flex items-center gap-4"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
            >
              <Icon size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                {item.value}
              </h3>

              <p className="text-sm text-slate-500">
                {item.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}