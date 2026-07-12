import { notFound } from "next/navigation";
import { learningData } from "@/sections/learning/data/learningData";

type PageProps = {
  params: Promise<{
    standard: string;
    subject: string;
    activity: string;
  }>;
};

export default async function ActivityPage({ params }: PageProps) {
  const {
    standard: standardId,
    subject: subjectId,
    activity: activityId,
  } = await params;

  // Standard શોધો
  const standard = learningData.find(
    (item) => item.id === standardId
  );

  if (!standard) {
    notFound();
  }

  // Subject શોધો
  const subject = standard.subjects.find(
    (item) => item.id === subjectId
  );

  if (!subject) {
    notFound();
  }

  // Activity શોધો
  const activity = subject.activities.find(
    (item) => item.id === activityId
  );

  if (!activity) {
    notFound();
  }

  // public/learning માં રહેલી HTML file
  const htmlPath = `/learning/${standardId}/${subjectId}/${activityId}.html`;

  return (
    <div className="w-full bg-white">
      <iframe
        src={htmlPath}
        title={activity.title}
        className="block min-h-[1400px] w-full border-0"
      />
    </div>
  );
}