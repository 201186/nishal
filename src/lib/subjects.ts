import { subjectsByStandard } from "@/sections/home/Subjects/data";

export function getSubjects(standard: number) {
  return (
    subjectsByStandard[
      standard as keyof typeof subjectsByStandard
    ] ?? []
  );
}