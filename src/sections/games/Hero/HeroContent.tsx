import Link from "next/link";

import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
        🎮 Learn While Playing
      </span>

      <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
        Educational Games
        <span className="block text-blue-600">
          for Class 1 to 8
        </span>
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        ગુજરાતી, ગણિત, અંગ્રેજી, વિજ્ઞાન અને અન્ય વિષયોની
        ઇન્ટરએક્ટિવ શૈક્ષણિક રમતો દ્વારા બાળકોને સરળ અને
        આનંદદાયક રીતે શીખવામાં મદદ કરો.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        <Link
          href="#standards"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse Games
        </Link>

        <Link
          href="/mcq-tests"
          className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
        >
          MCQ Tests
        </Link>

      </div>

      <HeroStats />

    </div>
  );
}