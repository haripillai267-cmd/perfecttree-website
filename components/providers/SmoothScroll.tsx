"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

type SmoothScrollProps = { children: ReactNode };

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.08,
      easing: (value) => 1 - (1 - value) ** 4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      anchors: true,
      overscroll: false,
    });

    return () => lenis.destroy();
  }, []);

  return children;
}
