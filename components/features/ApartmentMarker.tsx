import { Camera, CheckCircle2, PenTool, FileText, Mail, KeyRound, Gauge, Cloud, History, type LucideIcon } from "lucide-react";
import type { Feature, FeatureMarker as FeatureMarkerPoint } from "@/lib/constants/features";

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
  blue: "border-primary-blue/40",
  green: "border-verify-green/40",
};
const TONE_GLOW: Record<Feature["tone"], string> = {
  blue: "bg-primary-blue/25",
  green: "bg-verify-green/25",
};

interface ApartmentMarkerProps {
  feature: Feature;
  point: FeatureMarkerPoint;
  active: boolean;
  spotlighted: boolean;
  onSelect?: (id: string) => void;
}

export function ApartmentMarker({ feature, point, active, spotlighted, onSelect }: ApartmentMarkerProps) {
  const Icon = ICONS[feature.icon];
  const tappable = Boolean(onSelect);
  const Tag = tappable ? "button" : "div";
  const tapProps = tappable
    ? { type: "button" as const, onClick: () => onSelect?.(feature.id), "aria-label": feature.label }
    : {};

  if (feature.markerStyle === "glow") {
    return (
      <Tag
        {...tapProps}
        data-feature-marker={feature.id}
        className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-500 ${
          active ? "scale-100 opacity-100" : "scale-50 opacity-0"
        } ${tappable ? "touch-manipulation" : ""}`}
        style={{ left: `${point.x}%`, top: `${point.y}%` }}
      >
        <span className={`absolute h-9 w-9 rounded-full ${TONE_GLOW[feature.tone]} ${spotlighted ? "animate-ping" : ""}`} />
        <span className={`absolute h-9 w-9 rounded-full ${TONE_GLOW[feature.tone]}`} />
        <span className={`relative flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white ${TONE_RING[feature.tone]}`}>
          <Icon size={11} strokeWidth={2.5} className={TONE_ICON[feature.tone]} />
        </span>
      </Tag>
    );
  }

  if (feature.markerStyle === "timeline") {
    return (
      <Tag
        {...tapProps}
        data-feature-marker={feature.id}
        className={`absolute flex -translate-x-1/2 flex-col items-center gap-1.5 transition-all duration-500 ${
          active ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
        }`}
        style={{ left: `${point.x}%`, top: `${point.y}%` }}
      >
        <div className="flex items-center gap-2 rounded-full border border-dark/8 bg-white px-3 py-1.5 shadow-[0_10px_24px_-14px_rgba(17,17,17,0.4)]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${i === 2 ? "bg-verify-green" : "bg-primary-blue/50"}`} />
              {i < 2 && <span className="h-px w-3 bg-dark/15" />}
            </span>
          ))}
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-wide text-grey">3 Inspections Logged</span>
      </Tag>
    );
  }

  return (
    <Tag
      {...tapProps}
      data-feature-marker={feature.id}
      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
        active ? "scale-100 opacity-100" : "scale-50 opacity-0"
      } ${spotlighted ? "z-20 scale-[1.18]" : "z-10"} ${tappable ? "touch-manipulation" : ""}`}
      style={{ left: `${point.x}%`, top: `${point.y}%` }}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full border-2 bg-white shadow-[0_8px_18px_-8px_rgba(17,17,17,0.45)] transition-colors duration-300 ${TONE_RING[feature.tone]}`}
      >
        <Icon size={12} strokeWidth={2.5} className={TONE_ICON[feature.tone]} />
      </span>
    </Tag>
  );
}
