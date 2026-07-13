import Link from "next/link";

import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-xl xl:max-w-2xl">
      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 sm:px-4 sm:text-sm">
        🎮 Learn While Playing
      </span>

      <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
        Educational Games
        <span className="block text-blue-600">
          for Class 1 to 8
        </span>
      </h1>

      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
        ગુજરાતી, ગણિત, અંગ્રેજી, વિજ્ઞાન અને અન્ય વિષયોની
        ઇન્ટરએક્ટિવ શૈક્ષણિક રમતો દ્વારા બાળકોને સરળ અને
        આનંદદાયક રીતે શીખવામાં મદદ કરો.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="#standards"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:text-base"
        >
          Browse Games
        </Link>

        <Link
          href="/mcq-tests"
          className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600 sm:text-base"
        >
          MCQ Tests
        </Link>
      </div>

      <HeroStats />
    </div>
  );
}