"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = ["Transforming", "Businesses", "Into Industry Leaders."];

export function HeroTitle() {
  const reducedMotion = useReducedMotion();

  return (
    <h1 className="text-display text-balance">
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={index === lines.length - 1 ? "block text-[0.72em] tracking-[-0.06em] text-lime" : "block"}
            initial={reducedMotion ? false : { opacity: 0, y: "112%", rotate: 1.5 }}
            animate={{ opacity: 1, y: "0%", rotate: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.9, delay: reducedMotion ? 0 : 0.16 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
