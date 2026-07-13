export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute h-56 w-56 rounded-full bg-blue-200/40 blur-3xl lg:h-64 lg:w-64" />

      {/* Main Card */}
      <div className="relative w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-xl lg:max-w-md lg:p-6">
        <div className="flex justify-center text-6xl lg:text-7xl">
          🎮
        </div>

        <h3 className="mt-4 text-center text-xl font-bold text-slate-900 lg:text-2xl">
          Learn While Playing
        </h3>

        <p className="mx-auto mt-2 max-w-sm text-center text-sm leading-6 text-slate-600 lg:text-base">
          Interactive educational games for Gujarati, Maths, English,
          Science and more.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-blue-50 p-3 text-center">
            <div className="text-2xl lg:text-3xl">🧠</div>
            <p className="mt-1.5 text-sm font-medium">
              Brain Games
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-3 text-center">
            <div className="text-2xl lg:text-3xl">📚</div>
            <p className="mt-1.5 text-sm font-medium">
              Learning
            </p>
          </div>

          <div className="rounded-xl bg-orange-50 p-3 text-center">
            <div className="text-2xl lg:text-3xl">➕</div>
            <p className="mt-1.5 text-sm font-medium">
              Maths
            </p>
          </div>

          <div className="rounded-xl bg-purple-50 p-3 text-center">
            <div className="text-2xl lg:text-3xl">🔤</div>
            <p className="mt-1.5 text-sm font-medium">
              Language
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}