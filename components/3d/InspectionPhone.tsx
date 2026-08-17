"use client";

import { useRef, useState, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Images, RefreshCw, CheckCircle2, ChevronRight, Signal, Wifi, BatteryFull } from "lucide-react";
import { getHeroFrame } from "@/lib/animations/heroFrame";
import { HERO_KEYFRAMES, type HeroKeyframe } from "@/lib/constants/hero";
import { COLORS } from "@/lib/constants/colors";

interface InspectionPhoneProps {
  progressRef: RefObject<number>;
  keyframes?: HeroKeyframe[];
  compact?: boolean;
}

const ROOM_PHOTO: Record<string, string> = {
  "Living Room": "/rooms/living-room.jpg",
  Kitchen: "/rooms/kitchen.jpg",
  Bedroom: "/rooms/bedroom.jpg",
  Bathroom: "/rooms/bathroom.jpg",
  "Full Property": "/rooms/living-room.jpg",
};

function PhoneScreen({ screen }: { screen: HeroKeyframe["phoneScreen"] }) {
  const photo = ROOM_PHOTO[screen.room] ?? ROOM_PHOTO["Living Room"];
  const isGood = screen.conditionTone === "green";

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[26px] bg-white">
      {/* status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[9px] font-semibold text-white">9:41</span>
        <div className="flex items-center gap-0.5 text-white">
          <Signal size={9} strokeWidth={2.5} />
          <Wifi size={9} strokeWidth={2.5} />
          <BatteryFull size={12} strokeWidth={2} />
        </div>
      </div>

      {/* blue header — inspection status + room / counter */}
      <div className="bg-primary-blue px-4 pb-3 pt-1.5">
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white">
            <CheckCircle2 size={11} className="text-primary-blue" strokeWidth={3} fill="white" />
          </span>
          <span className="flex-1 truncate text-[9px] font-semibold text-white">{screen.meta}</span>
          <ChevronRight size={11} className="text-white/70" strokeWidth={2.5} />
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[13px] font-bold leading-none text-white">{screen.room}</span>
          <span className="rounded-full bg-white/25 px-1.5 py-0.5 font-mono text-[8px] font-semibold text-white">
            {screen.photoCount}
          </span>
        </div>
      </div>

      {/* real inspection photograph */}
      <div className="relative mx-2.5 mt-2.5 flex-1 overflow-hidden rounded-xl bg-off-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} alt="" className="h-full w-full object-cover" draggable={false} />
      </div>

      {/* condition card */}
      <div className="mx-2.5 mt-2 flex items-center gap-1.5 rounded-xl bg-white px-2.5 py-1.5 shadow-[0_2px_10px_rgba(11,66,103,0.12)]">
        <span
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
          style={{ background: isGood ? "#E4F5E1" : "#EAEDF0" }}
        >
          <CheckCircle2
            size={12}
            strokeWidth={2.5}
            style={{ color: isGood ? COLORS.verifyGreen : COLORS.dark }}
          />
        </span>
        <div className="flex flex-1 flex-col leading-none">
          <span className="text-[7.5px] font-medium text-grey">Condition</span>
          <span
            className="mt-0.5 text-[10.5px] font-bold"
            style={{ color: isGood ? COLORS.verifyGreen : COLORS.dark }}
          >
            {screen.condition}
          </span>
        </div>
        <ChevronRight size={12} className="text-grey" strokeWidth={2.5} />
      </div>

      {/* capture UI */}
      <div className="mt-2 flex items-center justify-between bg-dark px-5 py-2.5">
        <Images size={14} className="text-white/70" strokeWidth={2} />
        <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary-blue bg-white">
          <span className="h-4 w-4 rounded-full bg-primary-blue" />
        </span>
        <RefreshCw size={14} className="text-white/70" strokeWidth={2} />
      </div>
    </div>
  );
}

interface PhoneChassisProps {
  w: number;
  h: number;
  depth: number;
}

/** The physical shell — frame, camera module, side buttons — independent of the screen content. */
function PhoneChassis({ w, h, depth }: PhoneChassisProps) {
  const frameColor = "#A9ACB1";
  const buttonColor = "#8C9096";

  return (
    <group>
      {/* frame — natural titanium, matching the reference phone's real metal finish */}
      <RoundedBox args={[w, h, depth]} radius={0.062} smoothness={4} castShadow receiveShadow>
        <meshStandardMaterial color={frameColor} roughness={0.35} metalness={0.85} />
      </RoundedBox>

      {/* screen bezel (front) — thick margin so the metal frame reads clearly */}
      <mesh position={[0, 0, depth / 2 + 0.0015]}>
        <planeGeometry args={[w - 0.1, h - 0.1]} />
        <meshStandardMaterial color="#050506" roughness={0.4} metalness={0.15} />
      </mesh>

      {/* dynamic-island notch */}
      <mesh position={[0, h / 2 - 0.075, depth / 2 + 0.003]}>
        <planeGeometry args={[0.16, 0.028]} />
        <meshStandardMaterial color="#000000" roughness={0.6} />
      </mesh>

      {/* back camera module */}
      <group position={[-w / 2 + 0.13, h / 2 - 0.16, -depth / 2 - 0.006]}>
        <RoundedBox args={[0.19, 0.19, 0.014]} radius={0.045} smoothness={3}>
          <meshStandardMaterial color={frameColor} roughness={0.3} metalness={0.7} />
        </RoundedBox>
        {[
          [-0.045, 0.045],
          [0.045, 0.045],
          [-0.045, -0.045],
        ].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0.009]}>
            <circleGeometry args={[0.032, 20]} />
            <meshStandardMaterial color="#0a0c10" roughness={0.1} metalness={0.9} />
          </mesh>
        ))}
      </group>

      {/* side buttons — power (right) */}
      <mesh position={[w / 2 + 0.006, 0.18, 0]}>
        <boxGeometry args={[0.012, 0.16, 0.03]} />
        <meshStandardMaterial color={buttonColor} roughness={0.35} metalness={0.6} />
      </mesh>

      {/* side buttons — volume rocker (left) */}
      <mesh position={[-w / 2 - 0.006, 0.24, 0]}>
        <boxGeometry args={[0.012, 0.1, 0.03]} />
        <meshStandardMaterial color={buttonColor} roughness={0.35} metalness={0.6} />
      </mesh>
      <mesh position={[-w / 2 - 0.006, 0.1, 0]}>
        <boxGeometry args={[0.012, 0.1, 0.03]} />
        <meshStandardMaterial color={buttonColor} roughness={0.35} metalness={0.6} />
      </mesh>

      {/* subtle glass highlight across the screen */}
      <mesh position={[-w * 0.18, h * 0.12, depth / 2 + 0.004]} rotation={[0, 0, 0.5]}>
        <planeGeometry args={[w * 0.32, h * 0.9]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.035} />
      </mesh>
    </group>
  );
}

/**
 * The realistic 3D phone: a machined-frame chassis with a camera module,
 * side buttons, and a crisp HTML screen overlay. Swap PhoneChassis for a
 * GLB import later — the screen anchor and scroll-driven position/rotation
 * logic stay unchanged.
 */
export function InspectionPhone({ progressRef, keyframes = HERO_KEYFRAMES, compact = false }: InspectionPhoneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [screen, setScreen] = useState<HeroKeyframe["phoneScreen"]>({
    room: "Living Room",
    condition: "Good",
    conditionTone: "green",
    meta: "Inspection in Progress",
    photoCount: "2/8",
  });
  const lastRoom = useRef(screen.room);

  useFrame((_, delta) => {
    const frame = getHeroFrame(progressRef.current ?? 0, keyframes);
    if (frame.phoneScreen.room !== lastRoom.current) {
      lastRoom.current = frame.phoneScreen.room;
      setScreen(frame.phoneScreen);
    }

    const group = groupRef.current;
    if (!group) return;
    const speed = Math.min(1, delta * 3.2);
    group.position.x += (frame.phoneX - group.position.x) * speed;
    const targetRotY = THREE.MathUtils.degToRad(frame.phoneRotY);
    group.rotation.y += (targetRotY - group.rotation.y) * speed;
  });

  const w = compact ? 0.62 : 0.78;
  const h = w * 2.06;
  const depth = compact ? 0.058 : 0.07;

  return (
    <group ref={groupRef} position={[1.1, 1.18, 2.55]} rotation={[-0.14, 0, 0]}>
      <PhoneChassis w={w} h={h} depth={depth} />

      <Html position={[0, 0, depth / 2 + 0.005]} center style={{ pointerEvents: "none" }}>
        <div
          className="overflow-hidden rounded-[20px]"
          style={{ width: compact ? 92 : 116, height: compact ? 190 : 239 }}
        >
          <PhoneScreen screen={screen} />
        </div>
      </Html>
    </group>
  );
}
