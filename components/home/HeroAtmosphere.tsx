"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type LightPosition = "north-west" | "north-east" | "south-west" | "south-east" | "center";

export function HeroAtmosphere() {
  const [position, setPosition] = useState<LightPosition>("center");

  function updateLightPosition(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const nextPosition = x < 0.35 ? (y < 0.45 ? "north-west" : "south-west") : x > 0.65 ? (y < 0.45 ? "north-east" : "south-east") : "center";
    setPosition((current) => (current === nextPosition ? current : nextPosition));
  }

  return (
    <div className="absolute inset-0" onPointerMove={updateLightPosition} onPointerLeave={() => setPosition("center")}>
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div aria-hidden="true" className={cn("hero-spotlight absolute size-[42rem] rounded-full", `hero-spotlight-${position}`)} />
      <div aria-hidden="true" className="hero-noise absolute inset-0" />
    </div>
  );
}
