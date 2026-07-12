import Container from "@/components/ui/Container";
import QuickAccessCard from "./QuickAccessCard";
import { quickAccessItems } from "./data";

export default function QuickAccess() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Quick Access
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Access study materials, practice tests, notes, previous papers
            and much more from one place.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {quickAccessItems.map((item) => (
            <QuickAccessCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}