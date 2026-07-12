import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-100 blur-3xl opacity-60" />

      {/* Image */}
      <div className="relative">
        <Image
          src="/images/hero/hero-illustration.png"
          alt="Students learning with Nishal"
          width={650}
          height={650}
          priority
          className="h-auto w-full max-w-[620px]"
        />
      </div>
    </div>
  );
}