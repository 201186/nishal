import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 xl:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}