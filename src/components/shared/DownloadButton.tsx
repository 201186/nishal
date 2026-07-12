import { Download } from "lucide-react";

export default function DownloadButton() {
  return (
    <button
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-blue-600
        px-5
        py-2.5
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-blue-700
        hover:shadow-lg
      "
    >
      <Download size={18} />

      Download App
    </button>
  );
}