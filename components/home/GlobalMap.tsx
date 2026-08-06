"use client";

import { motion, useReducedMotion } from "framer-motion";

const paths = [
  "M 148 202 C 258 145, 370 142, 474 178",
  "M 474 178 C 560 110, 683 108, 788 163",
  "M 474 178 C 553 232, 632 274, 747 251",
  "M 788 163 C 839 194, 877 225, 917 270",
];

const points = [[148, 202], [474, 178], [788, 163], [747, 251], [917, 270]];

export function GlobalMap() {
  const reducedMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 1060 420" className="h-auto w-full" role="img" aria-labelledby="map-title map-description">
      <title id="map-title">PerfectTree global presence</title>
      <desc id="map-description">An abstract world map with animated lines connecting global locations.</desc>
      <g className="fill-none stroke-current text-white/10" strokeWidth="1">
        <path d="M70 151 111 107 209 84 281 110 315 158 278 215 226 232 191 276 121 252 90 206Z" />
        <path d="M365 112 418 92 492 110 549 151 516 186 481 172 444 195 396 164Z" />
        <path d="M481 205 542 226 594 291 569 363 523 327 506 271Z" />
        <path d="M604 116 680 80 788 97 867 134 954 134 1001 177 968 215 878 220 832 280 748 265 698 226 640 207Z" />
        <path d="M836 299 904 290 954 337 922 375 863 365Z" />
      </g>
      <g className="fill-none stroke-current text-white/6" strokeWidth="1">
        <path d="M67 211 H1004" />
        <path d="M117 158 H962" />
        <path d="M127 264 H943" />
        <path d="M298 62 V369" />
        <path d="M542 55 V375" />
        <path d="M782 63 V368" />
      </g>
      <g fill="none" stroke="currentColor" className="text-lime" strokeWidth="1.5">
        {paths.map((path, index) => (
          <motion.path key={path} d={path} initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.7 }} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : 1.4, delay: reducedMotion ? 0 : index * 0.18, ease: "easeInOut" }} />
        ))}
      </g>
      <g className="fill-lime">
        {points.map(([cx, cy], index) => (
          <motion.circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : 0.4, delay: reducedMotion ? 0 : 0.5 + index * 0.14 }} />
        ))}
      </g>
    </svg>
  );
}
