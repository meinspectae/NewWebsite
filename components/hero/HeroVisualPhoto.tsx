"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { Camera, MapPin, CheckCircle2 } from "lucide-react";
import { getHeroFrame } from "@/lib/animations/heroFrame";
import { HERO_KEYFRAMES, type HeroKeyframe, type RoomId } from "@/lib/constants/hero";

const ROOM_PHOTO: Record<string, string> = {
  "Living Room": "/rooms/living-room.jpg",
  Kitchen: "/rooms/kitchen.jpg",
  Bedroom: "/rooms/bedroom.jpg",
  Bathroom: "/rooms/bathroom.jpg",
  "Full Property": "/rooms/living-room.jpg",
};

/** Room footprints within apartment.png (690x512 source), as % of the raw image. */
const ROOM_REGION: Record<RoomId, { left: number; top: number; width: number; height: number }> = {
  kitchen: { left: 7, top: 15.2, width: 39, height: 35.2 },
  bedroom: { left: 58, top: 8.2, width: 36, height: 36.3 },
  living: { left: 36, top: 43.4, width: 39, height: 35.2 },
  bathroom: { left: 51, top: 29.3, width: 11, height: 27 },
};

const ROOM_IDS = Object.keys(ROOM_REGION) as RoomId[];

/** Where the phone travels to "inspect" each room — center of its region, in % of the raw image. */
const ROOM_TARGET: Record<RoomId, { x: number; y: number }> = Object.fromEntries(
  ROOM_IDS.map((id) => {
    const r = ROOM_REGION[id];
    return [id, { x: r.left + r.width / 2, y: r.top + r.height / 2 }];
  })
) as Record<RoomId, { x: number; y: number }>;

const REST_TARGET = { x: 50, y: 30 };

/** Screen-glass bounds within phone.png (318x592 source), measured by pixel sampling — not eyeballed. */
const SCREEN = { left: 11.5, right: 85.0, top: 24.5, roomRowTop: 16.0, roomRowBottom: 23.7, photoBottom: 76.2 };
const SCREEN_WIDTH = SCREEN.right - SCREEN.left;

const ICONS = { camera: Camera, "map-pin": MapPin, "check-circle": CheckCircle2 } as const;

interface HeroVisualPhotoProps {
  progressRef: RefObject<number>;
}

/**
 * PREVIEW ONLY — photorealistic-image version of the hero visual, built from
 * the reference apartment/phone renders. The phone travels toward each
 * active room's actual position on the apartment image (measured from the
 * rendered <img> bounds every frame, so it stays correct regardless of
 * viewport shape — object-contain letterboxes the image differently at
 * every aspect ratio, and percentage math against the raw image would
 * otherwise drift from what's actually on screen).
 */
export function HeroVisualPhoto({ progressRef }: HeroVisualPhotoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const apartmentImgRef = useRef<HTMLImageElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const highlightRefs = useRef<Partial<Record<RoomId, HTMLDivElement | null>>>({});
  const [room, setRoom] = useState("Living Room");
  const [photoCount, setPhotoCount] = useState("2/8");
  const [marker, setMarker] = useState<HeroKeyframe["marker"]>(null);
  const lastRoom = useRef("Living Room");
  const lastMarkerLabel = useRef<string | null>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const opacityRef = useRef<Record<RoomId, number>>({ living: 0, kitchen: 0, bedroom: 0, bathroom: 0 });
  const markerOpacity = useRef(0);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(0.05, (now - last) / 1000);
      last = now;
      const frame = getHeroFrame(progressRef.current ?? 0, HERO_KEYFRAMES);

      if (frame.phoneScreen.room !== lastRoom.current) {
        lastRoom.current = frame.phoneScreen.room;
        setRoom(frame.phoneScreen.room);
        setPhotoCount(frame.phoneScreen.photoCount);
      }
      if (frame.marker && frame.marker.label !== lastMarkerLabel.current) {
        lastMarkerLabel.current = frame.marker.label;
        setMarker(frame.marker);
      }

      // Measure the actual rendered apartment image bounds — object-contain
      // letterboxes differently at every viewport shape, so this is the only
      // reliable source of truth for where the image really sits. Both the
      // phone's travel target and the room highlights are derived from it,
      // so they stay pixel-accurate to the image regardless of container shape.
      const container = containerRef.current;
      const img = apartmentImgRef.current;
      if (container && img && phoneRef.current) {
        const cRect = container.getBoundingClientRect();
        const iRect = img.getBoundingClientRect();
        const target = frame.activeRoom ? ROOM_TARGET[frame.activeRoom] : REST_TARGET;

        // room-space % -> pixel position within the actual rendered image -> % of container
        const targetXPx = iRect.left - cRect.left + (target.x / 100) * iRect.width;
        const targetYPx = iRect.top - cRect.top + (target.y / 100) * iRect.height;
        const targetXPct = (targetXPx / cRect.width) * 100;
        const targetYPct = (targetYPx / cRect.height) * 100;

        // Defensive clamp — keeps the phone fully on screen (accounting for
        // its own actual rendered size, which varies by breakpoint) even if
        // a measurement lands mid-layout-shift.
        const phoneRect = phoneRef.current.getBoundingClientRect();
        const halfWPct = (phoneRect.width / 2 / cRect.width) * 100 + 3;
        const halfHPct = (phoneRect.height / 2 / cRect.height) * 100 + 3;
        const clampedXPct = Math.min(100 - halfWPct, Math.max(halfWPct, targetXPct));
        const clampedYPct = Math.min(100 - halfHPct, Math.max(halfHPct, targetYPct));

        const speed = Math.min(1, delta * 2.4);
        xRef.current += (clampedXPct - xRef.current) * speed;
        yRef.current += (clampedYPct - yRef.current) * speed;

        phoneRef.current.style.left = `${xRef.current}%`;
        phoneRef.current.style.top = `${yRef.current}%`;

        for (const id of ROOM_IDS) {
          const el = highlightRefs.current[id];
          if (!el) continue;
          const r = ROOM_REGION[id];
          const leftPx = iRect.left - cRect.left + (r.left / 100) * iRect.width;
          const topPx = iRect.top - cRect.top + (r.top / 100) * iRect.height;
          el.style.left = `${(leftPx / cRect.width) * 100}%`;
          el.style.top = `${(topPx / cRect.height) * 100}%`;
          el.style.width = `${((r.width / 100) * iRect.width / cRect.width) * 100}%`;
          el.style.height = `${((r.height / 100) * iRect.height / cRect.height) * 100}%`;
        }
      }

      for (const id of ROOM_IDS) {
        const targetOpacity = frame.activeRoom === id ? 1 : 0;
        opacityRef.current[id] += (targetOpacity - opacityRef.current[id]) * Math.min(1, delta * 4);
        const el = highlightRefs.current[id];
        if (el) el.style.opacity = String(opacityRef.current[id] * 0.4);
      }

      const markerTarget = frame.marker ? 1 : 0;
      markerOpacity.current += (markerTarget - markerOpacity.current) * Math.min(1, delta * 4);
      if (badgeRef.current) badgeRef.current.style.opacity = String(markerOpacity.current);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [progressRef]);

  const photo = ROOM_PHOTO[room] ?? ROOM_PHOTO["Living Room"];
  const Icon = marker ? ICONS[marker.icon] : null;
  const badgeStyle = marker
    ? {
        blue: { badge: "bg-primary-blue", text: "text-white", iconWrap: "bg-white", icon: "text-primary-blue" },
        green: { badge: "bg-verify-green", text: "text-white", iconWrap: "bg-white", icon: "text-verify-green" },
        dark: { badge: "bg-white", text: "text-primary-blue", iconWrap: "bg-primary-blue/10", icon: "text-primary-blue" },
      }[marker.tone]
    : null;

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={apartmentImgRef}
          src="/hero/apartment.png"
          alt=""
          className="h-full w-full object-contain"
          draggable={false}
        />
      </div>

      {ROOM_IDS.map((id) => (
        <div
          key={id}
          ref={(el) => {
            highlightRefs.current[id] = el;
          }}
          className="pointer-events-none absolute rounded-2xl bg-primary-blue"
          style={{ opacity: 0 }}
        />
      ))}

      <div
        ref={phoneRef}
        className="absolute w-[34%] sm:w-[26%] lg:w-[21%]"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className="relative aspect-[318/592] w-full drop-shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/phone.png" alt="" className="absolute inset-0 h-full w-full object-contain" draggable={false} />

          {/* live room photo — extended to fill the whole viewfinder, no card beneath it */}
          <div
            className="absolute overflow-hidden rounded-b-[4%]"
            style={{
              left: `${SCREEN.left}%`,
              top: `${SCREEN.top}%`,
              width: `${SCREEN_WIDTH}%`,
              height: `${SCREEN.photoBottom - SCREEN.top}%`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt="" className="h-full w-full object-cover" draggable={false} />
          </div>

          {/* live room-name row — covers the baked "Living Room / 2/8" */}
          <div
            className="absolute flex items-center justify-between bg-primary-blue px-[6%]"
            style={{
              left: `${SCREEN.left}%`,
              top: `${SCREEN.roomRowTop}%`,
              width: `${SCREEN_WIDTH}%`,
              height: `${SCREEN.roomRowBottom - SCREEN.roomRowTop}%`,
            }}
          >
            <span className="min-w-0 flex-1 truncate text-[9px] font-bold leading-none text-white sm:text-[10.5px] lg:text-[12px]">
              {room}
            </span>
            <span className="ml-1 shrink-0 rounded-full bg-white/25 px-1.5 py-0.5 font-mono text-[7px] font-semibold leading-none text-white sm:text-[8px]">
              {photoCount}
            </span>
          </div>
        </div>
      </div>

      <div ref={badgeRef} className="pointer-events-none absolute left-[4%] top-[8%]" style={{ opacity: 0 }}>
        {Icon && marker && badgeStyle && (
          <div className={`flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-[0_10px_28px_rgba(11,66,103,0.28)] ${badgeStyle.badge}`}>
            <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${badgeStyle.iconWrap}`}>
              <Icon size={13} className={badgeStyle.icon} strokeWidth={2.5} />
            </span>
            <span className={`text-[13px] font-bold leading-tight ${badgeStyle.text}`}>{marker.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
