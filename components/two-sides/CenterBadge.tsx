import { Home, Check } from "lucide-react";
import { type RefObject } from "react";

interface CenterBadgeProps {
  badgeRef?: RefObject<HTMLDivElement | null>;
  size?: "sm" | "lg";
}

export function CenterBadge({ badgeRef, size = "lg" }: CenterBadgeProps) {
  const circle = size === "lg" ? "h-[104px] w-[104px] lg:h-[128px] lg:w-[128px]" : "h-[88px] w-[88px]";
  const iconSize = size === "lg" ? 38 : 32;
  const headingSize = size === "lg" ? "text-[19px] lg:text-[23px]" : "text-[18px]";

  return (
    <div ref={badgeRef} className="flex flex-col items-center gap-4">
      <div
        className={`relative flex items-center justify-center rounded-full bg-white shadow-[0_26px_60px_-20px_rgba(11,66,103,0.5)] ${circle}`}
      >
        <Home size={iconSize} strokeWidth={1.75} className="text-primary-blue" />
        <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue ring-[3px] ring-white">
          <Check size={12} strokeWidth={3} className="text-white" />
        </span>
      </div>

      <h2 className={`text-center font-bold leading-[1.2] tracking-tight text-dark ${headingSize}`}>
        One record.
        <br />
        Two sides.
      </h2>
    </div>
  );
}
