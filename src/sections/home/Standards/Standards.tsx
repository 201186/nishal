import Container from "@/components/ui/Container";
import StandardCard from "./StandardCard";
import { standards } from "./data";

export default function Standards() {
  return (
    <section className="py-24">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Standards
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Choose Your Standard
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Select your standard to access notes, MCQ tests, previous papers,
            PDFs and much more.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((standard) => (
            <StandardCard
              key={standard.id}
              {...standard}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}