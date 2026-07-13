"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";
import { cn } from "@/utils/cn";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden min-w-0 items-center justify-center gap-4 xl:flex 2xl:gap-6">
      {navigation.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative whitespace-nowrap text-[13px] font-semibold transition-colors duration-300 2xl:text-sm",
              active
                ? "text-blue-600"
                : "text-slate-600 hover:text-blue-600"
            )}
          >
            {item.label}

            <span
              className={cn(
                "absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300",
                active ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}