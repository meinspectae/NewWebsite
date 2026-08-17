import type { RefObject } from "react";
import { MapPin, Check } from "lucide-react";

interface CtaVisualProps {
  ringsRef: RefObject<HTMLDivElement | null>;
  houseRef: RefObject<HTMLDivElement | null>;
  pinRef: RefObject<HTMLDivElement | null>;
  phoneRef: RefObject<HTMLDivElement | null>;
  keysRef: RefObject<HTMLDivElement | null>;
  badgeRef: RefObject<HTMLDivElement | null>;
}

export function CtaVisual({ ringsRef, houseRef, pinRef, phoneRef, keysRef, badgeRef }: CtaVisualProps) {
  return (
    <div className="relative mx-auto h-[190px] w-full max-w-[860px] sm:h-[220px] lg:mx-0 lg:h-[240px]">
      {/* signal rings, centered behind the phone */}
      <div ref={ringsRef} className="absolute left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-blue/20 sm:h-[160px] sm:w-[160px]" />
        <span className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-blue/12 sm:h-[230px] sm:w-[230px]" />
        <span className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-blue/6 sm:h-[300px] sm:w-[300px]" />
      </div>

      {/* the keys — resting to the left of the phone */}
      <div ref={keysRef} className="absolute bottom-[6%] left-0 w-[19%] max-w-[130px] -rotate-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/final-cta/keys.png"
          alt=""
          className="w-full drop-shadow-[0_14px_18px_rgba(17,17,17,0.35)]"
          draggable={false}
        />
      </div>

      {/* the phone — real 3D render, camera-capture UI baked in, between the keys and the house */}
      <div ref={phoneRef} className="absolute left-[24%] top-1/2 w-[28%] max-w-[260px] -translate-y-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/final-cta/phone.png"
          alt=""
          className="w-full drop-shadow-[0_26px_38px_rgba(17,17,17,0.35)]"
          draggable={false}
        />
      </div>

      {/* the property */}
      <div ref={houseRef} className="absolute bottom-[2%] right-0 w-[46%] max-w-[400px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/final-cta/house.png"
          alt=""
          className="w-full drop-shadow-[0_22px_30px_rgba(17,17,17,0.25)]"
          draggable={false}
        />

        <span
          ref={pinRef}
          className="absolute -top-7 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary-blue bg-white shadow-[0_10px_20px_-8px_rgba(11,66,103,0.55)]"
        >
          <MapPin size={16} className="text-primary-blue" strokeWidth={2.5} />
        </span>
      </div>

      {/* final verification state */}
      <div ref={badgeRef} className="absolute bottom-0 left-[26%]">
        <span className="flex items-center gap-1.5 rounded-full bg-verify-green px-3.5 py-1.5 shadow-[0_14px_28px_-12px_rgba(79,175,70,0.6)]">
          <Check size={12} className="text-white" strokeWidth={3} />
          <span className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-wide text-white">
            Property Verified
          </span>
        </span>
      </div>
    </div>
  );
}
