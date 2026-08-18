"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { REPORT_PAGES } from "@/lib/constants/report";
import { ReportPage } from "./ReportPage";

const PAGE_COUNT = REPORT_PAGES.length;
const LAST = PAGE_COUNT; // 0 = cover, 1..PAGE_COUNT = content pages

function CoverPage() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-deep-blue px-8 text-center">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-20" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
        <ShieldCheck size={26} strokeWidth={1.75} className="text-white" />
      </span>
      <div className="relative">
        <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
          MeInspect
        </span>
        <h3 className="mt-2 text-[19px] font-bold leading-tight text-white sm:text-[22px]">
          Property Inspection
          <br />
          Report
        </h3>
      </div>
      <span className="relative font-mono text-[10.5px] text-white/50">128 pieces of evidence, verified.</span>
      <span className="relative mt-2 font-mono text-[9.5px] uppercase tracking-wide text-white/40">
        Tap next to open →
      </span>
    </div>
  );
}

const variants: Variants = {
  enter: (dir: number) => ({ rotateY: dir > 0 ? 78 : -78, opacity: 0 }),
  center: { rotateY: 0, opacity: 1 },
  exit: (dir: number) => ({ rotateY: dir > 0 ? -78 : 78, opacity: 0 }),
};

export function ReportBook() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (delta: number) => {
    setDirection(delta);
    setPage((p) => Math.min(LAST, Math.max(0, p + delta)));
  };

  return (
    <div className="mx-auto w-full max-w-[330px] shrink-0 lg:max-w-[440px]">
      <div style={{ perspective: 1800 }} className="relative aspect-[3/4] w-full lg:aspect-[4/3.2]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
            className="absolute inset-0 overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-[0_30px_70px_-30px_rgba(11,66,103,0.4)]"
          >
            {page === 0 ? <CoverPage /> : <ReportPage page={REPORT_PAGES[page - 1]} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous page"
          onClick={() => go(-1)}
          disabled={page === 0}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark/10 bg-white text-dark shadow-[0_8px_18px_-10px_rgba(17,17,17,0.35)] transition-colors hover:border-primary-blue/40 hover:text-primary-blue disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft size={18} strokeWidth={2.25} />
        </button>

        <span className="w-24 text-center font-mono text-[11px] font-semibold uppercase tracking-wide text-grey">
          {page === 0 ? "Cover" : `Page ${page} / ${PAGE_COUNT}`}
        </span>

        <button
          type="button"
          aria-label="Next page"
          onClick={() => go(1)}
          disabled={page === LAST}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark/10 bg-white text-dark shadow-[0_8px_18px_-10px_rgba(17,17,17,0.35)] transition-colors hover:border-primary-blue/40 hover:text-primary-blue disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight size={18} strokeWidth={2.25} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {Array.from({ length: LAST + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to ${i === 0 ? "cover" : `page ${i}`}`}
            onClick={() => {
              setDirection(i > page ? 1 : -1);
              setPage(i);
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === page ? "w-5 bg-primary-blue" : "w-1.5 bg-dark/15 hover:bg-dark/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
