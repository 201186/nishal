"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { cn } from "@/utils/cn";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
             "group relative text-sm font-medium transition-colors duration-300",
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