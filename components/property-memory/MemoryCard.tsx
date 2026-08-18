import { forwardRef } from "react";
import { RoomThumbnail } from "./RoomThumbnail";
import type { TimelineStage } from "@/lib/constants/propertyMemory";

interface MemoryCardProps {
  stage: TimelineStage;
  variant: "move-in" | "move-out";
}

const EYEBROW_TONE: Record<TimelineStage["eyebrowTone"], string> = {
  green: "text-verify-green",
  blue: "text-primary-blue",
};

export const MemoryCard = forwardRef<HTMLDivElement, MemoryCardProps>(function MemoryCard(
  { stage, variant },
  ref
) {
  return (
    <div ref={ref} className="w-[212px] shrink-0 lg:w-[204px] xl:w-[236px]">
      <span className={`block font-mono text-[11px] font-bold uppercase tracking-wider ${EYEBROW_TONE[stage.eyebrowTone]}`}>
        {stage.eyebrow}
      </span>

      <div className="mt-2.5 flex items-center gap-3.5 rounded-2xl border border-dark/8 bg-white p-3 shadow-[0_10px_30px_-16px_rgba(11,66,103,0.25)]">
        <RoomThumbnail variant={variant} className="w-[84px]" />
        <div className="flex min-w-0 flex-col">
          <p className="text-[13px] leading-snug text-dark/85">{stage.content}</p>
        </div>
      </div>
    </div>
  );
});
