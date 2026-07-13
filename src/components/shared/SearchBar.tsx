"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative hidden xl:block">
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        size={17}
      />

      <input
        type="text"
        placeholder="Search..."
        className="
          h-10
          w-44
          rounded-full
          border
          border-slate-200
          bg-white
          pl-10
          pr-4
          text-sm
          outline-none
          transition-all
          duration-300
          focus:w-56
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          2xl:w-64
          2xl:focus:w-72
        "
      />
    </div>
  );
}