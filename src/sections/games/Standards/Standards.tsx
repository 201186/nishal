import StandardsGrid from "./StandardsGrid";

export default function Standards() {
  return (
    <section
      id="standards"
      className="bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:mb-10">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
            Browse by Standard
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Choose Your Standard
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Select your class to explore interactive educational
            games designed for every subject.
          </p>
        </div>

        <StandardsGrid />
      </div>
    </section>
  );
}