import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-[18px]",
        "px-6 py-3",
        "font-semibold",
        "text-white",
        "gradient-primary",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:shadow-2xl",
        "active:translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}