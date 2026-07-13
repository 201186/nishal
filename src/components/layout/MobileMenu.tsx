"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";
import { cn } from "@/utils/cn";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
   <div className="xl:hidden">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <span className="text-2xl leading-none">✕</span>
        ) : (
          <span className="text-2xl leading-none">☰</span>
        )}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white shadow-xl">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}