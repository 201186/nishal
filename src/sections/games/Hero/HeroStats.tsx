const stats = [
  {
    value: "100+",
    label: "Educational Games",
  },
  {
    value: "8",
    label: "Standards",
  },
  {
    value: "25+",
    label: "Subjects",
  },
  {
    value: "Free",
    label: "Always Available",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-blue-600">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}