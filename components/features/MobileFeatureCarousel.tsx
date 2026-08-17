"use client";

import { useCallback, useEffect, useRef } from "react";
import { Camera, CheckCircle2, PenTool, FileText, Mail, KeyRound, Gauge, Cloud, History, type LucideIcon } from "lucide-react";
import { FEATURES, type Feature } from "@/lib/constants/features";

const ICONS: Record<Feature["icon"], LucideIcon> = {
  camera: Camera,
  check: CheckCircle2,
  pen: PenTool,
  file: FileText,
  mail: Mail,
  key: KeyRound,
  gauge: Gauge,
  cloud: Cloud,
  history: History,
};

const TONE_ICON: Record<Feature["tone"], string> = {
  blue: "text-primary-blue",
  green: "text-verify-green",
};
const TONE_RING: Record<Feature["tone"], string> = {
  blue: "border-primary-blue/35 bg-primary-blue/6",
  green: "border-verify-green/35 bg-verify-green/6",
};

interface MobileFeatureCarouselProps {
  isActive: (featureId: string, index: number) => boolean;
  spotlightId: string | null;
  onSelect: (id: string) => void;
}

export function MobileFeatureCarousel({ isActive, spotlightId, onSelect }: MobileFeatureCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  // Distinguishes "the user just swiped here" from "something outside this
  // carousel changed the spotlight" (e.g. tapping a marker directly on the
  // apartment plan) — only the latter should trigger a programmatic scroll,
  // otherwise every swipe would immediately re-trigger scrollIntoView and
  // fight the user's own gesture.
  const scrolledBySelfRef = useRef(false);

  const scrollToCard = useCallback((id: string) => {
    cardRefs.current[id]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  // The centered card "selects" itself as the user swipes — mirrors the
  // hover/click spotlight on desktop, just driven by scroll position instead.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce<IntersectionObserverEntry | null>((best, entry) => {
          if (!best || entry.intersectionRatio > best.intersectionRatio) return entry;
          return best;
        }, null);
        if (mostVisible && mostVisible.intersectionRatio > 0.6) {
          const id = (mostVisible.target as HTMLElement).dataset.featureId;
          if (id) {
            scrolledBySelfRef.current = true;
            onSelect(id);
          }
        }
      },
      { root: scroller, threshold: [0.6, 0.9] }
    );

    Object.values(cardRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [onSelect]);

  // Keep the carousel in sync when the spotlight changes from elsewhere —
  // tapping a marker on the apartment plan should bring its card into view.
  useEffect(() => {
    if (scrolledBySelfRef.current) {
      scrolledBySelfRef.current = false;
      return;
    }
    if (spotlightId) scrollToCard(spotlightId);
  }, [spotlightId, scrollToCard]);

  return (
    <div className="w-full">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-3.5 overflow-x-auto scroll-smooth px-[calc(50%-104px)] pb-2"
      >
        {FEATURES.map((feature, i) => {
          const Icon = ICONS[feature.icon];
          const active = isActive(feature.id, i);
          const spotlighted = feature.id === spotlightId;

          return (
            <button
              key={feature.id}
              ref={(el) => {
                cardRefs.current[feature.id] = el;
              }}
              data-feature-id={feature.id}
              type="button"
              onClick={() => onSelect(feature.id)}
              className={`flex w-[208px] shrink-0 snap-center flex-col items-start gap-3 rounded-3xl border bg-white p-4 text-left shadow-[0_14px_32px_-20px_rgba(17,17,17,0.35)] transition-all duration-300 ${
                spotlighted ? `scale-[1.03] shadow-[0_16px_34px_-14px_rgba(11,66,103,0.4)] ${TONE_RING[feature.tone]}` : "border-dark/8"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                    active ? TONE_RING[feature.tone] : "border-dark/10 bg-off-white"
                  }`}
                >
                  <Icon size={16} strokeWidth={2.25} className={active ? TONE_ICON[feature.tone] : "text-dark/30"} />
                </span>
                <span className="font-mono text-[10px] font-semibold text-dark/30">0{i + 1}</span>
              </div>

              <div>
                <h3 className={`text-[14px] font-bold leading-snug ${active ? "text-dark" : "text-dark/45"}`}>{feature.label}</h3>
                <p className={`mt-1 text-[12px] leading-snug ${active ? "text-grey" : "text-dark/25"}`}>{feature.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {FEATURES.map((feature) => (
          <button
            key={feature.id}
            type="button"
            aria-label={`Show ${feature.label}`}
            onClick={() => onSelect(feature.id)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              feature.id === spotlightId ? "w-5 bg-primary-blue" : "w-1.5 bg-dark/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
