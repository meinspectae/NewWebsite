"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  eyebrow: string;
  title: string;
  items: FaqItem[];
}

export function FaqAccordion({ eyebrow, title, items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-14 lg:py-18">
      <div className="mx-auto max-w-[860px] px-6 lg:px-10">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
          {eyebrow}
        </span>
        <h2 className="mt-2.5 text-[24px] font-semibold leading-[1.2] tracking-tight text-dark sm:text-[28px]">
          {title}
        </h2>

        <div className="mt-7 flex flex-col divide-y divide-dark/8 border-y border-dark/8">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-4.5 text-left"
                >
                  <span className="text-[14.5px] font-semibold text-dark sm:text-[15.5px]">{item.question}</span>
                  <Plus
                    size={18}
                    strokeWidth={2.25}
                    className={`shrink-0 text-primary-blue transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] pb-4.5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[68ch] text-[13.5px] leading-relaxed text-grey sm:text-[14.5px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
