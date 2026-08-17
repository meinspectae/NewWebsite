import { Camera, Clock, MapPin, CheckCircle2, PenTool, FileText, type LucideIcon } from "lucide-react";
import type { EvidenceStage } from "@/lib/constants/evidenceTrail";

const ICONS: Record<EvidenceStage["icon"], LucideIcon> = {
  camera: Camera,
  clock: Clock,
  "map-pin": MapPin,
  "check-circle": CheckCircle2,
  "pen-tool": PenTool,
  "file-text": FileText,
};

function StageContent({ stage }: { stage: EvidenceStage }) {
  switch (stage.id) {
    case "photo":
      return (
        <>
          <div className="h-14 w-full overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/rooms/living-room.jpg" alt="" className="h-full w-full object-cover" draggable={false} />
          </div>
          <span className="mt-1.5 block font-mono text-[10px] text-grey">Original capture</span>
        </>
      );
    case "timestamp":
      return (
        <>
          <span className="block text-[13px] font-bold leading-tight text-dark">10:42 AM</span>
          <span className="block text-[11px] leading-tight text-grey">14 Aug 2026</span>
        </>
      );
    case "gps":
      return (
        <>
          <span className="block font-mono text-[11.5px] font-semibold leading-tight text-primary-blue">
            25.0801&deg; N
          </span>
          <span className="block font-mono text-[11.5px] font-semibold leading-tight text-primary-blue">
            55.1403&deg; E
          </span>
        </>
      );
    case "condition":
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-verify-green/10 px-2 py-1 text-[12px] font-bold text-verify-green">
          <CheckCircle2 size={12} strokeWidth={2.5} />
          Good
        </span>
      );
    case "signature":
      return (
        <div className="pt-0.5">
          <svg
            viewBox="0 0 84 26"
            className="h-6 w-full text-dark/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19 C9 6, 13 26, 19 13 S29 3, 35 16 S45 23, 51 9 S63 3, 69 17 S75 9, 80 13" />
          </svg>
          <div className="mt-1 h-px w-full bg-dark/15" />
        </div>
      );
    case "report":
      return (
        <>
          <div className="flex items-center justify-center gap-1.5">
            <FileText size={13} className="text-verify-green" strokeWidth={2.25} />
            <span className="text-[12.5px] font-bold text-dark">PDF</span>
          </div>
          <span className="mt-0.5 block text-[10.5px] leading-tight text-grey">Inspection Complete</span>
        </>
      );
    default:
      return null;
  }
}

interface EvidenceCardProps {
  stage: EvidenceStage;
  index: number;
  layout?: "column" | "row";
}

export function EvidenceCard({ stage, index, layout = "column" }: EvidenceCardProps) {
  const Icon = ICONS[stage.icon];

  const iconNode = (
    <div
      data-evidence-icon
      className="evidence-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-dark/10 bg-white shadow-[0_4px_12px_-6px_rgba(17,17,17,0.15)] transition-colors duration-300 xl:h-11 xl:w-11"
    >
      <Icon size={16} strokeWidth={2} className="text-dark/35 transition-colors duration-300" />
    </div>
  );

  if (layout === "row") {
    return (
      <div
        data-evidence-index={index}
        data-evidence-tone={stage.tone}
        className="evidence-card relative z-10 flex items-start gap-4"
      >
        {iconNode}
        <div className="evidence-card-body min-w-0 flex-1 rounded-xl border border-dark/8 bg-white px-3.5 py-3 text-left shadow-[0_8px_22px_-16px_rgba(17,17,17,0.18)] transition-[transform,box-shadow] duration-300">
          <span className="block font-mono text-[9.5px] font-bold uppercase tracking-wider text-dark/45">
            {stage.label}
          </span>
          <div className="mt-1.5">
            <StageContent stage={stage} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      data-evidence-index={index}
      data-evidence-tone={stage.tone}
      className="evidence-card flex w-[122px] shrink-0 flex-col items-center gap-2.5 xl:w-[142px]"
    >
      {iconNode}
      <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-dark/45 xl:text-[10px]">
        {stage.label}
      </span>
      <div className="evidence-card-body w-full rounded-xl border border-dark/8 bg-white px-3 py-2.5 text-center shadow-[0_8px_22px_-16px_rgba(17,17,17,0.18)] transition-[transform,box-shadow] duration-300">
        <StageContent stage={stage} />
      </div>
    </div>
  );
}
