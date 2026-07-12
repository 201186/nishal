import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

        <HeroStats />

      </Container>
    </section>
  );
}