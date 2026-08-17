"use client";

import { useRef, useState, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { Camera, MapPin, CheckCircle2 } from "lucide-react";
import { getHeroFrame } from "@/lib/animations/heroFrame";
import { ROOM_LAYOUT, HERO_KEYFRAMES, type HeroKeyframe, type MarkerTone } from "@/lib/constants/hero";

const ICONS = {
  camera: Camera,
  "map-pin": MapPin,
  "check-circle": CheckCircle2,
} as const;

const TONE_STYLE: Record<MarkerTone, { badge: string; text: string; iconWrap: string; icon: string; tail: string }> = {
  blue: {
    badge: "bg-primary-blue",
    text: "text-white",
    iconWrap: "bg-white",
    icon: "text-primary-blue",
    tail: "bg-primary-blue",
  },
  green: {
    badge: "bg-verify-green",
    text: "text-white",
    iconWrap: "bg-white",
    icon: "text-verify-green",
    tail: "bg-verify-green",
  },
  dark: {
    badge: "bg-white",
    text: "text-primary-blue",
    iconWrap: "bg-primary-blue/10",
    icon: "text-primary-blue",
    tail: "bg-white",
  },
};

interface EvidenceMarkerProps {
  progressRef: RefObject<number>;
  keyframes?: HeroKeyframe[];
}

/** A single evidence label that glides between rooms and swaps content as the phone arrives. */
export function EvidenceMarker({ progressRef, keyframes = HERO_KEYFRAMES }: EvidenceMarkerProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const opacityRef = useRef(0);
  const [marker, setMarker] = useState<HeroKeyframe["marker"]>(null);
  const lastLabel = useRef<string | null>(null);
  const t = useRef(0);

  useFrame((_, delta) => {
    const frame = getHeroFrame(progressRef.current ?? 0, keyframes);
    const active = frame.marker;
    const target = active ? 1 : 0;
    opacityRef.current += (target - opacityRef.current) * Math.min(1, delta * 4);
    t.current += delta;

    if (active && active.label !== lastLabel.current) {
      lastLabel.current = active.label;
      setMarker(active);
    }

    if (pillRef.current) {
      pillRef.current.style.opacity = String(opacityRef.current);
    }

    if (groupRef.current) {
      const anchorRoom = active ? ROOM_LAYOUT[active.room] : null;
      if (anchorRoom) {
        const targetX = anchorRoom.position[0] + anchorRoom.size[0] / 2 - 0.35;
        const targetZ = anchorRoom.position[1] - anchorRoom.size[1] / 2 + 0.35;
        groupRef.current.position.x += (targetX - groupRef.current.position.x) * Math.min(1, delta * 4);
        groupRef.current.position.z += (targetZ - groupRef.current.position.z) * Math.min(1, delta * 4);
      }
      groupRef.current.position.y = 1.05 + Math.sin(t.current * 1.4) * 0.05;
    }
  });

  const Icon = marker ? ICONS[marker.icon] : null;
  const style = marker ? TONE_STYLE[marker.tone] : null;

  return (
    <group ref={groupRef}>
      <Html center style={{ pointerEvents: "none" }}>
        <div
          ref={pillRef}
          className={`relative flex items-center gap-2 whitespace-nowrap rounded-2xl px-3 py-2 shadow-[0_10px_28px_rgba(11,66,103,0.22)] ${style?.badge ?? "bg-white"}`}
          style={{ opacity: 0 }}
        >
          {Icon && style && (
            <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${style.iconWrap}`}>
              <Icon size={13} className={style.icon} strokeWidth={2.5} />
            </span>
          )}
          <span className={`text-[12px] font-bold leading-tight ${style?.text ?? "text-dark"}`}>
            {marker?.label}
          </span>
          {marker?.icon === "camera" && style && (
            <span
              className={`absolute -bottom-1 left-4 h-3 w-3 rotate-45 rounded-[2px] ${style.tail}`}
              aria-hidden
            />
          )}
        </div>
      </Html>
    </group>
  );
}
