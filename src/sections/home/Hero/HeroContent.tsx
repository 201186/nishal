import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui";

const features = [
  "Chapter-wise Notes",
  "MCQ Tests",
  "Previous Year Papers",
  "Current Affairs",
];

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        🚀 Gujarat's Smart Learning Platform
      </div>

      {/* Heading */}
      <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
        Learn Today,
        <br />
        <span className="text-blue-600">
          Grow Tomorrow.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        Everything students need from Standard 1 to 8 —
        Notes, MCQ Tests, Previous Papers and much more in one place.
      </p>

      {/* Features */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {features.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-slate-700"
          >
            <CheckCircle2
              size={20}
              className="text-green-500"
            />

            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">

        <Button>
          Start Learning
          <ArrowRight size={18} />
        </Button>

       <Button>
  Download App
</Button>

      </div>

    </div>
  );
}