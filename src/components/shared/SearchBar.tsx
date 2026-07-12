"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative hidden lg:block">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Search notes, MCQ, PDFs..."
        className="
          h-11
          w-72
          rounded-full
          border
          border-slate-200
          bg-white
          pl-11
          pr-4
          text-sm
          outline-none
          transition-all
          duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />
    </div>
  );
}