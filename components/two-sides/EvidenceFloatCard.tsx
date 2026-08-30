import { CheckCircle2, Check } from "lucide-react";
import type { EvidenceSnapshot } from "@/lib/constants/twoSides";

interface EvidenceFloatCardProps {
  evidence: EvidenceSnapshot;
  width?: string;
}

/** A pinned "evidence" snapshot — photo on top, caption + date below, capped with a Verified pill. */
export function EvidenceFloatCard({ evidence, width = "w-[188px] sm:w-[206px]" }: EvidenceFloatCardProps) {
  return (
    <div className={`flex flex-col items-center ${width}`}>
      <div className="w-full overflow-hidden rounded-2xl border border-dark/8 bg-white shadow-[0_18px_38px_-16px_rgba(17,17,17,0.4)]">
        <div className="relative h-[72px] w-full sm:h-[80px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={evidence.photo} alt={evidence.caption} className="h-full w-full object-cover" draggable={false} />
          <span className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-[0_4px_10px_-2px_rgba(17,17,17,0.4)]">
            <Check size={11} strokeWidth={3} className="text-verify-green" />
          </span>
        </div>

        <div className="px-3 py-2.5">
          <span className="line-clamp-2 block text-[11.5px] font-semibold leading-tight text-dark sm:text-[12.5px]">
            {evidence.caption}
          </span>
          <span className="mt-1 block text-[10px] leading-tight text-grey sm:text-[10.5px]">{evidence.date}</span>
        </div>
      </div>

      <span className="-mt-2.5 flex items-center gap-1 rounded-full bg-verify-green px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wide text-white shadow-[0_8px_16px_-6px_rgba(79,175,70,0.65)]">
        <CheckCircle2 size={10} strokeWidth={3} />
        Verified
      </span>
    </div>
  );
}
