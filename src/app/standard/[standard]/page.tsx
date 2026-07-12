import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import SubjectCard from "@/sections/home/Subjects/SubjectCard";
import { subjectsByStandard } from "@/sections/home/Subjects/data";

interface PageProps {
  params: Promise<{
    standard: string;
  }>;
}

export default async function StandardPage({
  params,
}: PageProps) {
  const { standard } = await params;

  const standardNumber = Number(standard);

  if (
    Number.isNaN(standardNumber) ||
    standardNumber < 1 ||
    standardNumber > 8
  ) {
    notFound();
  }

  const subjects =
    subjectsByStandard[
      standardNumber as keyof typeof subjectsByStandard
    ];

  return (
    <main className="py-16">
      <Container>
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700"
        >
          <ChevronLeft size={18} />
          Back to Home
        </Link>

        {/* Hero Banner */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-10 text-white">
          <p className="text-sm uppercase tracking-widest opacity-90">
            STANDARD
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Standard {standardNumber}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-blue-50">
            Choose a subject to explore Notes, MCQ Tests,
            Previous Papers and PDF Materials.
          </p>
        </div>

        {/* Subjects */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              title={subject.title}
              description="Explore Notes, MCQs, PDFs and Previous Papers."
              href={`/standard/${standardNumber}/${subject.id}`}
              icon={subject.icon}
              color={subject.color}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}