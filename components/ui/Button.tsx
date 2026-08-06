import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const variants = {
  primary:
    "bg-evergreen text-white shadow-elevation-xs hover:bg-evergreen-deep hover:shadow-elevation-sm",
  secondary: "bg-ink text-white hover:bg-evergreen-deep",
  ghost: "bg-transparent text-ink hover:bg-ink/6",
  outline: "border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
};

const sizes = {
  sm: "min-h-9 gap-1.5 px-3.5 text-xs",
  md: "min-h-11 gap-2 px-5 text-sm",
  lg: "min-h-13 gap-2.5 px-6 text-sm",
};

export function Button({
  children,
  className,
  href,
  variant = "primary",
  size = "md",
  showIcon = false,
  type = "button",
  ...props
}: ButtonProps) {
  const styles = cn(
    "group/button relative inline-flex items-center justify-center rounded-full font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      {children}
      {showIcon ? <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 group-active/button:translate-x-0 group-active/button:translate-y-0" /> : null}
    </>
  );

  if (href) return <Link href={href} className={styles}>{content}</Link>;

  return <button type={type} className={styles} {...props}>{content}</button>;
}
