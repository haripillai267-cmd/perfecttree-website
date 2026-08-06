import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "quiet" | "dark" | "glass";
} & Omit<HTMLAttributes<HTMLDivElement>, "className" | "children">;

const variants = {
  default: "border border-line bg-surface-raised shadow-elevation-xs",
  quiet: "bg-black/[0.025]",
  dark: "bg-surface-inverse text-white",
  glass: "glass-surface",
};

export function Card({ children, className, variant = "default", ...props }: CardProps) {
  return <div className={cn("rounded-[var(--radius-lg)] p-6", variants[variant], className)} {...props}>{children}</div>;
}
