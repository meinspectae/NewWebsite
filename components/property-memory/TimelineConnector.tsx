import { Plus } from "lucide-react";
import { type RefObject } from "react";

interface TimelineConnectorProps {
  leftLineRef: RefObject<HTMLDivElement | null>;
  rightLineRef: RefObject<HTMLDivElement | null>;
  markerRef: RefObject<HTMLDivElement | null>;
}

const dottedLine =
  "origin-top bg-[repeating-linear-gradient(to_bottom,var(--color-deep-blue)_0px,var(--color-deep-blue)_2.5px,transparent_2.5px,transparent_8px)] opacity-40 " +
  "lg:origin-left lg:bg-[repeating-linear-gradient(to_right,var(--color-deep-blue)_0px,var(--color-deep-blue)_2.5px,transparent_2.5px,transparent_8px)]";

export function TimelineConnector({ leftLineRef, rightLineRef, markerRef }: TimelineConnectorProps) {
  return (
    <div className="flex flex-col items-center lg:flex-1 lg:flex-row lg:justify-center lg:px-2">
      <div className="relative lg:min-w-3 lg:flex-1">
        <div ref={leftLineRef} className={`h-10 w-px lg:h-px lg:w-full ${dottedLine}`} />
        <span className="absolute left-1/2 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-deep-blue lg:block" />
      </div>

      <div ref={markerRef} className="flex shrink-0 flex-col items-center gap-1.5 py-3 lg:px-2 lg:py-0 xl:px-4">
        <span className="whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-wider text-dark/55">
          Living There
        </span>
        <Plus size={12} strokeWidth={2.5} className="text-dark/35" />
      </div>

      <div className="relative lg:min-w-3 lg:flex-1">
        <div ref={rightLineRef} className={`h-10 w-px lg:h-px lg:w-full ${dottedLine}`} />
        <span className="absolute left-1/2 top-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-grey lg:block" />
      </div>
    </div>
  );
}
