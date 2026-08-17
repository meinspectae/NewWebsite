import { type RefObject } from "react";
import { FEATURES } from "@/lib/constants/features";
import { ApartmentMarker } from "./ApartmentMarker";

interface ApartmentStageProps {
  wrapRef: RefObject<HTMLDivElement | null>;
  tiltRef: RefObject<HTMLDivElement | null>;
  isActive: (featureId: string, index: number) => boolean;
  spotlightId: string | null;
  onSelectFeature?: (id: string) => void;
}

/**
 * Renders as two separate DOM instances (desktop diagram + mobile stack), so
 * each call site MUST pass its own distinct refs — reusing the same ref
 * object across both would leave `.current` pointing at whichever instance
 * mounts last (the mobile copy, hidden via CSS on desktop), collapsing every
 * connector-line measurement onto its zero-size box.
 */
export function ApartmentStage({ wrapRef, tiltRef, isActive, spotlightId, onSelectFeature }: ApartmentStageProps) {
  return (
    <div style={{ perspective: 1400 }} className="mx-auto w-full max-w-[520px]">
      <div ref={tiltRef} style={{ transformStyle: "preserve-3d" }}>
        <div ref={wrapRef} className="relative aspect-[690/512] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/apartment.png" alt="" className="h-full w-full object-contain" draggable={false} />

          {FEATURES.flatMap((feature, i) =>
            feature.markers.map((point, mi) => (
              <ApartmentMarker
                key={`${feature.id}-${mi}`}
                feature={feature}
                point={point}
                active={isActive(feature.id, i)}
                spotlighted={feature.id === spotlightId}
                onSelect={onSelectFeature}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
