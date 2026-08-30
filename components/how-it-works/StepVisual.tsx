import { Circle } from "lucide-react";
import type { HowItWorksStep } from "@/lib/constants/howItWorks";

const SETUP_FIELDS = ["Property name", "Unit", "Tenant", "Landlord", "Inspection date"];
const SIGNATORIES = [
  { role: "Tenant", name: "Mohammed Ahmed" },
  { role: "Landlord", name: "Sarah Johnson" },
  { role: "Agent", name: "M.Chen" },
];

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
      <img src="/rooms/kitchen.jpg" alt="Kitchen photo captured during a MeInspect property inspection" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
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
      {SIGNATORIES.map(({ role, name }) => (
        <div key={role} className="flex flex-col gap-1">
          <span className="font-mono text-[6.5px] font-semibold uppercase tracking-wide text-grey">{role}</span>
          <div className="h-4 overflow-hidden">
            <span
              data-how-sig-path
              className="block whitespace-nowrap font-signature text-[13px] leading-none text-primary-blue"
              style={{ clipPath: "inset(0 100% 0 0)" }}
            >
              {name}
            </span>
          </div>
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
  const topIndex = PAGE_REST.length - 1;
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {PAGE_REST.map((rest, i) => (
        <div
          key={i}
          data-how-page
          data-rest-rotate={rest.rotate}
          data-rest-x={rest.x}
          data-rest-y={rest.y}
          className="absolute h-[72%] w-[58%] overflow-hidden rounded-lg border border-dark/10 bg-white shadow-[0_10px_26px_-14px_rgba(17,17,17,0.35)]"
          style={{ zIndex: i }}
        >
          {i === topIndex ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src="/how-it-works-report.png"
              alt=""
              className="h-full w-full object-cover object-top"
              draggable={false}
            />
          ) : null}
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
