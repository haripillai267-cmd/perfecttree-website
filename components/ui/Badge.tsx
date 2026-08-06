import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "light";
};

const tones = {
  default: "border-line-strong bg-surface-raised text-ink",
  accent: "border-evergreen/15 bg-mint/45 text-evergreen-deep",
  light: "border-white/15 bg-white/10 text-white",
};

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  return <span className={cn("text-label inline-flex items-center rounded-full border px-3 py-1.5", tones[tone], className)}>{children}</span>;
}
