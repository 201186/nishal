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

  const standard = learningData.find(
    (item) => item.id === standardId
  );

  if (!standard) {
    notFound();
  }

  const subject = standard.subjects.find(
    (item) => item.id === subjectId
  );

  if (!subject) {
    notFound();
  }

  const activity = subject.activities.find(
    (item) => item.id === activityId
  );

  if (!activity) {
    notFound();
  }

  const htmlPath =
    `/learning/${standardId}/${subjectId}/${activityId}.html`;

  return (
    <main className="w-full bg-white">
      <iframe
        src={htmlPath}
        title={activity.title}
        className="
          block
          h-[calc(100vh-64px)]
          min-h-[700px]
          w-full
          border-0
          xl:h-[calc(100vh-80px)]
        "
      />
    </main>
  );
}