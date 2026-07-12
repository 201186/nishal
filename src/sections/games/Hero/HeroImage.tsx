export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

      {/* Main Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

        <div className="flex justify-center text-8xl">
          🎮
        </div>

        <h3 className="mt-6 text-center text-2xl font-bold text-slate-900">
          Learn While Playing
        </h3>

        <p className="mt-3 text-center text-slate-600">
          Interactive educational games for
          Gujarati, Maths, English,
          Science and more.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-blue-50 p-4 text-center">
            <div className="text-3xl">🧠</div>
            <p className="mt-2 text-sm font-medium">
              Brain Games
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-4 text-center">
            <div className="text-3xl">📚</div>
            <p className="mt-2 text-sm font-medium">
              Learning
            </p>
          </div>

          <div className="rounded-xl bg-orange-50 p-4 text-center">
            <div className="text-3xl">➕</div>
            <p className="mt-2 text-sm font-medium">
              Maths
            </p>
          </div>

          <div className="rounded-xl bg-purple-50 p-4 text-center">
            <div className="text-3xl">🔤</div>
            <p className="mt-2 text-sm font-medium">
              Language
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}