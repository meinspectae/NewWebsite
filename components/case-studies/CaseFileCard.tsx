import { forwardRef } from "react";
import { Check } from "lucide-react";
import type { CaseStudy } from "@/lib/constants/caseStudies";

interface CaseFileCardProps {
  study: CaseStudy;
  tilt: "left" | "right";
}

export const CaseFileCard = forwardRef<HTMLDivElement, CaseFileCardProps>(function CaseFileCard(
  { study, tilt },
  ref
) {
  const restRotate = tilt === "left" ? "-rotate-2" : "rotate-2";

  return (
    <div ref={ref} className="group relative pt-8">
      {/* folder tab — pt-8 on the wrapper leaves most of this tab's own
          ~37px height exposed above the folder body below, so the "CASE
          00N" label reads cleanly instead of being clipped to a sliver */}
      <div className="absolute left-6 top-0 rounded-t-md border border-b-0 border-dark/10 bg-off-white px-3 py-1.5">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-dark/50">
          Case {study.fileNumber}
        </span>
      </div>

      {/* folder body */}
      <div className="relative overflow-hidden rounded-xl rounded-tl-none border border-dark/10 bg-white shadow-[0_16px_40px_-24px_rgba(17,17,17,0.25)] transition-shadow duration-300 group-hover:shadow-[0_26px_54px_-20px_rgba(11,66,103,0.35)]">
        {/* evidence photo — pinned in like a physical print */}
        <div className="px-5 pt-5">
          <div
            className={`relative overflow-hidden rounded-lg border-[6px] border-white shadow-[0_10px_26px_-10px_rgba(17,17,17,0.4)] transition-transform duration-500 ease-out ${restRotate} group-hover:rotate-0`}
          >
            <div className="relative h-44 w-full overflow-hidden sm:h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.photo}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="px-5 pb-5 pt-4">
          <span className="block text-[24px] font-bold leading-tight text-dark sm:text-[26px]">{study.stat}</span>
          <span className="mt-0.5 block font-mono text-[10.5px] font-bold uppercase tracking-wide text-primary-blue">
            {study.category}
          </span>

          <p className="mt-2.5 text-[13.5px] leading-snug text-grey">{study.description}</p>

          <div className="mt-4 flex items-center gap-2 border-t border-dashed border-dark/12 pt-3.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dark/8 text-dark/30 transition-colors duration-300 group-hover:bg-verify-green group-hover:text-white">
              <Check size={11} strokeWidth={3} />
            </span>
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-wide text-dark/45 transition-colors duration-300 group-hover:text-verify-green">
              {study.status}
            </span>
          </div>

          {/* subtle document metadata — sharpens on hover, like reading the fine print */}
          <div className="mt-4 flex items-center justify-between opacity-35 transition-opacity duration-300 group-hover:opacity-80">
            <span className="font-mono text-[9px] text-dark/50">FILE NO. {study.fileNumber}-2026</span>
            <span className="font-mono text-[9px] text-dark/50">VERIFIED</span>
          </div>
        </div>
      </div>
    </div>
  );
});
