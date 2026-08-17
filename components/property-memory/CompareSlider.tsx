"use client";

import { useCallback, useRef, useState } from "react";
import { GripHorizontal } from "lucide-react";
import { InspectionPhoto } from "./InspectionPhoto";
import { DIFF_MARKERS } from "@/lib/constants/propertyMemory";

/** Vertical before/after slider — drag down to reveal the move-out condition over move-in. */
export function CompareSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(45);

  const updateFromClientY = useCallback((clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientY - rect.top) / rect.height) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    updateFromClientY(e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientY(e.clientY);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full touch-none overflow-hidden rounded-2xl border border-deep-blue/10 select-none"
      >
        {/* base layer: move-in */}
        <InspectionPhoto
          variant="move-in"
          label="MOVE IN"
          date="14 Aug 2025"
          time="10:42 AM"
          gps="25.0801° N, 55.1403° E"
          className="absolute inset-0"
        />

        {/* top layer: move-out, clipped to the revealed portion */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 ${100 - position}% 0)` }}
        >
          <InspectionPhoto
            variant="move-out"
            label="MOVE OUT"
            date="14 Aug 2026"
            time="4:15 PM"
            gps="25.0801° N, 55.1403° E"
            className="absolute inset-0"
          />

          {DIFF_MARKERS.map((marker) => (
            <div
              key={marker.label}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            >
              <span className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-primary-blue bg-white/70" />
              <span className="whitespace-nowrap rounded-full bg-white px-2 py-0.5 font-mono text-[9.5px] font-medium text-deep-blue shadow-sm">
                {marker.label}
              </span>
            </div>
          ))}
        </div>

        {/* drag handle */}
        <div
          className="absolute inset-x-0 flex -translate-y-1/2 cursor-ns-resize items-center"
          style={{ top: `${position}%` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div className="h-px w-full bg-primary-blue" />
          <div className="absolute left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-primary-blue shadow-[0_4px_14px_rgba(11,66,103,0.35)]">
            <GripHorizontal size={14} className="text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-grey">
        <span>Move In</span>
        <span>Move Out</span>
      </div>
    </div>
  );
}
