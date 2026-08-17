import { Circle } from "lucide-react";
import type { HowItWorksStep } from "@/lib/constants/howItWorks";

const SETUP_FIELDS = ["Property name", "Unit", "Tenant", "Landlord", "Inspection date"];
const SIGNATORIES = ["Tenant", "Landlord", "Agent"];

const SIGNATURE_PATH =
  "M4 18 C9 6,13 24,19 13 S29 2,35 15 S45 22,51 9 S61 2,67 15 S77 22,83 10";

function SetupVisual() {
  return (
    <div data-how-phone className="flex h-full w-full flex-col gap-2 p-3.5">
      <div className="mb-0.5 h-1 w-7 rounded-full bg-dark/10" />
      {SETUP_FIELDS.map((label) => (
        <div key={label} className="flex flex-col gap-1 border-b border-dark/8 pb-1.5">
          <span className="font-mono text-[6.5px] font-semibold uppercase tracking-wide text-grey">{label}</span>
          <span className="h-1.5 w-[70%] rounded-full bg-primary-blue/20" />
        </div>
      ))}
    </div>
  );
}

function PhotographVisual() {
  return (
    <div data-how-phone className="relative h-full w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/rooms/kitchen.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0 bg-dark/15" />

      <div data-how-camera-corner className="absolute left-2 top-2 h-4 w-4 border-l-[2.5px] border-t-[2.5px] border-white" />
      <div data-how-camera-corner className="absolute right-2 top-2 h-4 w-4 border-r-[2.5px] border-t-[2.5px] border-white" />
      <div data-how-camera-corner className="absolute bottom-9 left-2 h-4 w-4 border-b-[2.5px] border-l-[2.5px] border-white" />
      <div data-how-camera-corner className="absolute bottom-9 right-2 h-4 w-4 border-b-[2.5px] border-r-[2.5px] border-white" />

      <span className="absolute left-1/2 top-2.5 -translate-x-1/2 rounded-full bg-black/55 px-2 py-0.5 text-[7.5px] font-semibold text-white">
        Kitchen
      </span>

      <div className="absolute inset-x-0 bottom-2 flex flex-col items-center gap-1">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white">
          <Circle size={11} className="fill-white text-white" />
        </span>
        <span className="text-[6.5px] font-bold uppercase tracking-wide text-white">Capture</span>
      </div>
    </div>
  );
}

function SignaturesVisual() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-3.5 p-3.5">
      {SIGNATORIES.map((role) => (
        <div key={role} className="flex flex-col gap-1">
          <span className="font-mono text-[6.5px] font-semibold uppercase tracking-wide text-grey">{role}</span>
          <svg viewBox="0 0 88 26" className="h-4 w-full text-primary-blue">
            <path
              data-how-sig-path
              d={SIGNATURE_PATH}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            />
          </svg>
          <div className="h-px w-full bg-dark/15" />
        </div>
      ))}
    </div>
  );
}

const PAGE_REST = [
  { rotate: -6, x: -10, y: 6 },
  { rotate: 3, x: 8, y: 2 },
  { rotate: -1, x: 0, y: -4 },
];

function ReportVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {PAGE_REST.map((rest, i) => (
        <div
          key={i}
          data-how-page
          data-rest-rotate={rest.rotate}
          data-rest-x={rest.x}
          data-rest-y={rest.y}
          className="absolute h-[72%] w-[58%] rounded-lg border border-dark/10 bg-white p-2 shadow-[0_10px_26px_-14px_rgba(17,17,17,0.35)]"
          style={{ zIndex: i }}
        >
          <div className="flex flex-col gap-1.5">
            <div className="h-1.5 w-3/5 rounded-full bg-primary-blue/70" />
            <div className="h-1 w-full rounded-full bg-dark/10" />
            <div className="h-1 w-4/5 rounded-full bg-dark/10" />
            <div className="h-1 w-full rounded-full bg-dark/10" />
            <div className="mt-1 h-1 w-2/3 rounded-full bg-dark/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

interface StepVisualProps {
  step: HowItWorksStep;
}

export function StepVisual({ step }: StepVisualProps) {
  return (
    <div
      data-how-visual
      className="relative aspect-[3/4] w-full max-w-[152px] overflow-hidden rounded-[20px] border border-dark/10 bg-white shadow-[0_10px_28px_-18px_rgba(17,17,17,0.22)] transition-[transform,box-shadow] duration-300 xl:max-w-[168px]"
    >
      {step.id === "setup" && <SetupVisual />}
      {step.id === "photograph" && <PhotographVisual />}
      {step.id === "signatures" && <SignaturesVisual />}
      {step.id === "report" && <ReportVisual />}
    </div>
  );
}
