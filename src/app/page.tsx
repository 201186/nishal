import { MainLayout } from "@/components/layout";
import Hero from "@/sections/home/Hero";
import QuickAccess from "@/sections/home/QuickAccess";
import Standards from "@/sections/home/Standards";


export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero */}
      <Hero />

      {/* Quick Access */}
      <QuickAccess />

      {/* Standards */}
      <Standards />

      {/* Latest MCQ */}

      {/* Latest Notes */}

      {/* Current Affairs */}

      {/* Features */}

      {/* Download App */}
    </MainLayout>
  );
}