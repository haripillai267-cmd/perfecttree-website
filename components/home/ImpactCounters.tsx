"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { impact } from "./content";

function useCounter(target: number, active: boolean, reducedMotion: boolean | null) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reducedMotion) return;

    const start = performance.now();
    const duration = 1300;
    let frame = 0;
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.round(target * (1 - (1 - progress) ** 4)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reducedMotion, target]);

  return value;
}

function ImpactMetric({ value, suffix, label, active, reducedMotion }: (typeof impact)[number] & { active: boolean; reducedMotion: boolean | null }) {
  const count = useCounter(value, active, reducedMotion);
  const displayedCount = reducedMotion ? value : count;
  return <div className="border-l border-white/15 pl-5 sm:pl-7"><p className="text-heading-sm text-white tabular-nums">{displayedCount}{suffix}</p><p className="mt-3 text-sm text-white/55">{label}</p></div>;
}

export function ImpactCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, amount: 0.35 });
  const reducedMotion = useReducedMotion();

  return <div ref={ref} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{impact.map((item) => <ImpactMetric key={item.label} {...item} active={active} reducedMotion={reducedMotion} />)}</div>;
}
