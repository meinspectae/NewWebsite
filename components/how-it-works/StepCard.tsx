import type { HowItWorksStep } from "@/lib/constants/howItWorks";
import { StepVisual } from "./StepVisual";

interface StepCardProps {
  step: HowItWorksStep;
  index: number;
}

export function StepCard({ step, index }: StepCardProps) {
  return (
    <div data-how-index={index} className="flex w-[168px] shrink-0 flex-col items-center gap-4 xl:w-[190px]">
      <div
        data-how-number
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-dark/10 bg-white font-mono text-[13px] font-bold text-dark/35 shadow-sm transition-colors duration-300"
      >
        {step.number}
      </div>

      <StepVisual step={step} />

      <div className="text-center">
        <h3 className="text-[13px] font-bold uppercase tracking-wide text-dark">{step.title}</h3>
        <p className="mt-1.5 text-[12.5px] leading-snug text-grey">{step.description}</p>
      </div>
    </div>
  );
}
