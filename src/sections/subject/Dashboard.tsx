import DashboardCard from "./DashboardCard";
import { dashboardItems } from "./data";

interface DashboardProps {
  standard: number;
  subject: string;
}

export default function Dashboard({
  standard,
  subject,
}: DashboardProps) {
  return (
    <section className="mt-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardItems.map((item) => (
          <DashboardCard
            key={item.slug}
            title={item.title}
            description={item.description}
            icon={item.icon}
            color={item.color}
            href={`/standard/${standard}/${subject}/${item.slug}`}
          />
        ))}
      </div>
    </section>
  );
}