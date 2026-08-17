"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";
import { Hand } from "lucide-react";
import { FEATURES } from "@/lib/constants/features";
import { FeatureLabel } from "./FeatureLabel";
import { ApartmentStage } from "./ApartmentStage";
import { MobileFeatureCarousel } from "./MobileFeatureCarousel";

let registered = false;
if (!registered && typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  registered = true;
}

const LEFT_FEATURES = FEATURES.filter((f) => f.side === "left");
const RIGHT_FEATURES = FEATURES.filter((f) => f.side === "right");

interface ConnectorLine {
  key: string;
  featureId: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const apartmentWrapRef = useRef<HTMLDivElement>(null);
  const apartmentTiltRef = useRef<HTMLDivElement>(null);
  const mobileWrapRef = useRef<HTMLDivElement>(null);
  const mobileTiltRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [revealedCount, setRevealedCount] = useState(0);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [lines, setLines] = useState<ConnectorLine[]>([]);

  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const spotlightId = hoverId ?? pinnedId;

  const isActive = useCallback(
    (featureId: string, index: number) => index < revealedCount || featureId === spotlightId,
    [revealedCount, spotlightId]
  );

  const measureLines = useCallback(() => {
    const container = containerRef.current;
    const apt = apartmentWrapRef.current;
    if (!container || !apt) return;
    const cRect = container.getBoundingClientRect();
    const aRect = apt.getBoundingClientRect();

    const next: ConnectorLine[] = [];
    FEATURES.forEach((feature) => {
      const labelEl = labelRefs.current[feature.id];
      if (!labelEl) return;
      const lRect = labelEl.getBoundingClientRect();
      const x1 = (feature.side === "left" ? lRect.right : lRect.left) - cRect.left;
      const y1 = lRect.top + lRect.height / 2 - cRect.top;

      feature.markers.forEach((point, mi) => {
        const x2 = aRect.left - cRect.left + (point.x / 100) * aRect.width;
        const y2 = aRect.top - cRect.top + (point.y / 100) * aRect.height;
        next.push({ key: `${feature.id}-${mi}`, featureId: feature.id, x1, y1, x2, y2 });
      });
    });
    setLines(next);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const container = containerRef.current;
    const apt = apartmentWrapRef.current;
    if (!container || !apt) return;

    // ResizeObserver (not window "resize") because the apartment box's size
    // settles from CSS grid/aspect-ratio layout, which can still be resolving
    // on the very first effect tick — a plain mount-time measurement raced it
    // and captured a zero-size rect, collapsing every connector line onto the
    // same point. ResizeObserver re-fires once the box actually has a size.
    const observer = new ResizeObserver(() => measureLines());
    observer.observe(container);
    observer.observe(apt);
    window.addEventListener("resize", measureLines);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureLines);
    };
  }, [measureLines, isMobile]);

  useGSAP(
    () => {
      // Trigger off the section itself, not stageRef — stageRef only exists
      // on the desktop diagram (`hidden lg:block`), which is `display:none`
      // on mobile and has a degenerate zero-size box, so ScrollTrigger can't
      // compute a real "top 78%..top 30%" transit against it there.
      const section = sectionRef.current;
      if (!section || reducedMotion) {
        if (reducedMotion) setRevealedCount(FEATURES.length);
        return;
      }

      const lastCount = { current: -1 };
      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "top 25%",
        scrub: 0.5,
        onUpdate: (self) => {
          const count = Math.min(FEATURES.length, Math.round(self.progress * (FEATURES.length + 0.4)));
          if (count !== lastCount.current) {
            lastCount.current = count;
            setRevealedCount(count);
          }

          if (!isMobile && apartmentTiltRef.current) {
            const rotY = -3 + self.progress * 5;
            const rotX = 1.5 - self.progress * 3;
            apartmentTiltRef.current.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
          }
        },
      });
    },
    { dependencies: [reducedMotion, isMobile], scope: sectionRef }
  );

  const handleEnter = useCallback((id: string) => setHoverId(id), []);
  const handleLeave = useCallback(() => setHoverId(null), []);
  const handleToggle = useCallback((id: string) => setPinnedId((prev) => (prev === id ? null : id)), []);
  const handleSelect = useCallback((id: string) => setPinnedId(id), []);

  const registerLabelRef = useCallback(
    (id: string) => (el: HTMLButtonElement | null) => {
      labelRefs.current[id] = el;
    },
    []
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-off-white py-20 lg:py-28">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[38px] lg:text-[44px]">
            Everything you need.
            <br />
            <span className="text-primary-blue">Nothing you don&apos;t.</span>
          </h2>
        </div>

        {/* desktop / tablet — labelled diagram with connector lines */}
        <div ref={stageRef} className="mt-16 hidden lg:block xl:mt-20">
          <div ref={containerRef} className="relative grid grid-cols-[1fr_1.3fr_1fr] items-center gap-6 xl:gap-10">
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
              {lines.map((line) => {
                const active = isActive(line.featureId, featIndex(line.featureId));
                const spot = line.featureId === spotlightId;
                return (
                  <line
                    key={line.key}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke={spot ? "var(--color-primary-blue)" : "var(--color-deep-blue)"}
                    strokeOpacity={active ? (spot ? 0.75 : 0.35) : 0.08}
                    strokeWidth={spot ? 1.75 : 1.25}
                    strokeDasharray="2 6"
                    strokeLinecap="round"
                    style={{ transition: "stroke-opacity 300ms ease, stroke 300ms ease" }}
                  />
                );
              })}
            </svg>

            <div className="relative z-10 flex flex-col items-stretch gap-3">
              {LEFT_FEATURES.map((feature) => (
                <FeatureLabel
                  key={feature.id}
                  ref={registerLabelRef(feature.id)}
                  feature={feature}
                  active={isActive(feature.id, FEATURES.indexOf(feature))}
                  spotlighted={feature.id === spotlightId}
                  onEnter={() => handleEnter(feature.id)}
                  onLeave={handleLeave}
                  onToggle={() => handleToggle(feature.id)}
                />
              ))}
            </div>

            <div className="relative z-10">
              <ApartmentStage
                wrapRef={apartmentWrapRef}
                tiltRef={apartmentTiltRef}
                isActive={isActive}
                spotlightId={spotlightId}
              />
            </div>

            <div className="relative z-10 flex flex-col items-stretch gap-3">
              {RIGHT_FEATURES.map((feature) => (
                <FeatureLabel
                  key={feature.id}
                  ref={registerLabelRef(feature.id)}
                  feature={feature}
                  active={isActive(feature.id, FEATURES.indexOf(feature))}
                  spotlighted={feature.id === spotlightId}
                  onEnter={() => handleEnter(feature.id)}
                  onLeave={handleLeave}
                  onToggle={() => handleToggle(feature.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* mobile — tap the plan or swipe the cards, they stay in sync */}
        <div className="mt-12 flex flex-col items-center gap-2 lg:hidden">
          <div className="w-full max-w-[340px] pb-14">
            <ApartmentStage
              wrapRef={mobileWrapRef}
              tiltRef={mobileTiltRef}
              isActive={isActive}
              spotlightId={spotlightId}
              onSelectFeature={handleSelect}
            />
          </div>

          <div className="mb-2 flex items-center gap-1.5 text-dark/35">
            <Hand size={13} strokeWidth={2} />
            <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wide">Swipe to explore</span>
          </div>

          <MobileFeatureCarousel isActive={isActive} spotlightId={spotlightId} onSelect={handleSelect} />
        </div>
      </div>
    </section>
  );
}

function featIndex(id: string): number {
  return FEATURES.findIndex((f) => f.id === id);
}
