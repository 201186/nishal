import { MainLayout } from "@/components/layout";

import Hero from "@/sections/games/Hero/Hero";
import Standards from "@/sections/games/Standards/Standards";

export default function GamesPage() {
  return (
    <MainLayout>
      <Hero />
      <Standards />
    </MainLayout>
  );
}