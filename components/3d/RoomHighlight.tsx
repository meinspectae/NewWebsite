"use client";

import { useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { getHeroFrame } from "@/lib/animations/heroFrame";
import { ROOM_LAYOUT, HERO_KEYFRAMES, type RoomId, type HeroKeyframe } from "@/lib/constants/hero";
import { COLORS } from "@/lib/constants/colors";

interface RoomHighlightProps {
  roomId: RoomId;
  progressRef: RefObject<number>;
  keyframes?: HeroKeyframe[];
}

/** Floor-level glow that lights up the room the phone is currently inspecting. */
export function RoomHighlight({ roomId, progressRef, keyframes = HERO_KEYFRAMES }: RoomHighlightProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const opacityRef = useRef(0);
  const room = ROOM_LAYOUT[roomId];

  useFrame((_, delta) => {
    const frame = getHeroFrame(progressRef.current ?? 0, keyframes);
    const target = frame.activeRoom === roomId ? 1 : 0;
    opacityRef.current += (target - opacityRef.current) * Math.min(1, delta * 5);

    const mat = meshRef.current?.material as THREE.MeshBasicMaterial | undefined;
    if (mat) mat.opacity = opacityRef.current * 0.35;
  });

  return (
    <mesh
      ref={meshRef}
      position={[room.position[0], 0.01, room.position[1]]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[room.size[0] - 0.16, room.size[1] - 0.16]} />
      <meshBasicMaterial color={COLORS.primaryBlue} transparent opacity={0} />
    </mesh>
  );
}
