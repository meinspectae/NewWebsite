import { forwardRef } from "react";
import { Camera, CheckCircle2, PenTool, FileText, Mail, KeyRound, Gauge, Cloud, History, type LucideIcon } from "lucide-react";
import type { Feature } from "@/lib/constants/features";

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

interface FeatureLabelProps {
  feature: Feature;
  active: boolean;
  spotlighted: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
}

export const FeatureLabel = forwardRef<HTMLButtonElement, FeatureLabelProps>(function FeatureLabel(
  { feature, active, spotlighted, onEnter, onLeave, onToggle },
  ref
) {
  const Icon = ICONS[feature.icon];
  const alignRight = feature.side === "right";

  return (
    <button
      ref={ref}
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onToggle}
      aria-pressed={spotlighted}
      className={`flex items-center gap-2.5 rounded-full border bg-white py-2 pl-2.5 pr-4 shadow-[0_8px_20px_-14px_rgba(17,17,17,0.4)] transition-all duration-300 ${
        alignRight ? "flex-row-reverse pl-4 pr-2.5" : ""
      } ${active ? "opacity-100" : "opacity-40"} ${
        spotlighted ? "scale-[1.04] shadow-[0_10px_26px_-12px_rgba(11,66,103,0.45)] " + TONE_RING[feature.tone] : "border-dark/8"
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
          active ? TONE_RING[feature.tone] : "border-dark/10 bg-white"
        }`}
      >
        <Icon size={13} strokeWidth={2.25} className={active ? TONE_ICON[feature.tone] : "text-dark/35"} />
      </span>
      <span className={`whitespace-nowrap text-[12.5px] font-semibold ${active ? "text-dark" : "text-dark/45"}`}>
        {feature.label}
      </span>
    </button>
  );
});
