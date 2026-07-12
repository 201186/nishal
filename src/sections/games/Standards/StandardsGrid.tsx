import { gameData } from "@/data/games";

import StandardCard from "./StandardCard";

export default function StandardsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {gameData.map((standard) => (
        <StandardCard
          key={standard.slug}
          standard={standard}
        />
      ))}
    </div>
  );
}