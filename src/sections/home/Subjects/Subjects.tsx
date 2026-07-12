"use client";

import Container from "@/components/ui/Container";
import SubjectCard from "./SubjectCard";
import { subjectsByStandard } from "./data";
import { useStandard } from "@/hooks/useStandard";

export default function Subjects() {
  const { selectedStandard } = useStandard();

  // Standard પસંદ ન કર્યું હોય તો Subjects બતાવવાના નહીં
  if (!selectedStandard) {
    return null;
  }

  const subjects = subjectsByStandard[selectedStandard];
  console.log("selectedStandard:", selectedStandard);
console.log("subjects:", subjects);

  return (
    <section id="subjects" className="py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Standard {selectedStandard}
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Choose Your Subject
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Select a subject to access notes, MCQ tests, PDFs and previous
            papers.
          </p>
        </div>

        {/* Subject Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              title={subject.title}
              description="Explore notes, MCQs and study materials."
              href={subject.href}
              icon={subject.icon}
              color={subject.color}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}