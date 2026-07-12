import StandardsGrid from "./StandardsGrid";

export default function Standards() {
  return (
    <section
      id="standards"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-12 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Browse by Standard
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Choose Your Standard
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Select your class to explore interactive educational
            games designed for every subject.
          </p>

        </div>

        <StandardsGrid />

      </div>
    </section>
  );
}