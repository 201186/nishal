import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import Dashboard from "@/sections/subject";

interface PageProps {
  params: Promise<{
    standard: string;
    subject: string;
  }>;
}

export default async function SubjectPage({
  params,
}: PageProps) {
  const { standard, subject } = await params;

  const standardNumber = Number(standard);

  if (
    Number.isNaN(standardNumber) ||
    !subject
  ) {
    notFound();
  }

  return (
    <main className="py-16">
      <Container>

        {/* Back Button */}
        <Link
          href={`/standard/${standard}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ChevronLeft size={18} />
          Back to Subjects
        </Link>

        {/* Hero */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-10 text-white">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            Standard {standard}
          </span>

          <h1 className="mt-5 text-5xl font-bold capitalize">
            {subject.replaceAll("-", " ")}
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Select what you want to explore.
          </p>

        </div>

        <Dashboard
          standard={standardNumber}
          subject={subject}
        />

      </Container>
    </main>
  );
}