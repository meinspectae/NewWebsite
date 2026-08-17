import { Sofa, MapPin, ShieldCheck } from "lucide-react";

interface InspectionPhotoProps {
  label: string;
  date: string;
  time: string;
  gps: string;
  variant?: "move-in" | "move-out";
  className?: string;
}

/**
 * A stylized inspection photograph — architectural line art on a blueprint
 * panel, framed with the same timestamp/GPS/verified metadata a real
 * inspection capture carries. Deliberately not a stock photo.
 */
export function InspectionPhoto({ label, date, time, gps, variant = "move-in", className = "" }: InspectionPhotoProps) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-deep-blue/10 bg-off-white blueprint-grid-fine ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Sofa size={72} strokeWidth={1} className="text-deep-blue/60" />
        {variant === "move-out" && (
          <svg
            className="absolute"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            aria-hidden
          >
            <path
              d="M74 30 L82 48 L76 58 L86 74"
              fill="none"
              stroke="#0B4267"
              strokeOpacity="0.45"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 shadow-sm">
        <ShieldCheck size={12} className="text-verify-green" strokeWidth={2.25} />
        <span className="font-mono text-[9.5px] font-medium text-dark/80">{label}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 to-white/0 px-3 pb-2.5 pt-6">
        <div className="flex items-center gap-1.5 font-mono text-[9.5px] text-dark/70">
          <span>{date}</span>
          <span className="text-dark/30">·</span>
          <span>{time}</span>
        </div>
        <div className="mt-0.5 flex items-center gap-1 font-mono text-[9px] text-grey">
          <MapPin size={10} strokeWidth={2} />
          <span>{gps}</span>
        </div>
      </div>
    </div>
  );
}
