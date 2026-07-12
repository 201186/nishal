import Link from "next/link";
import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-gradient text-4xl font-black tracking-tight",
        className
      )}
    >
      નિશાળ
    </Link>
  );
}