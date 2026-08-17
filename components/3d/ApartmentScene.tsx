"use client";

import { useRef, type RefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { getHeroFrame } from "@/lib/animations/heroFrame";
import { ROOM_LAYOUT, HERO_KEYFRAMES, type RoomId, type HeroKeyframe } from "@/lib/constants/hero";
import { PropertyModel } from "./PropertyModel";
import { RoomHighlight } from "./RoomHighlight";
import { EvidenceMarker } from "./EvidenceMarker";
import { InspectionPhone } from "./InspectionPhone";

const ROOM_IDS = Object.keys(ROOM_LAYOUT) as RoomId[];
const BASE_AZIMUTH = 34;
const ELEVATION = 30;
const RADIUS = 10.5;

function cameraPosition(azimuthDeg: number): [number, number, number] {
  const az = THREE.MathUtils.degToRad(azimuthDeg);
  const el = THREE.MathUtils.degToRad(ELEVATION);
  const r = RADIUS * Math.cos(el);
  return [r * Math.sin(az), RADIUS * Math.sin(el), r * Math.cos(az)];
}

function CameraRig({ progressRef, keyframes }: { progressRef: RefObject<number>; keyframes: HeroKeyframe[] }) {
  const { camera } = useThree();
  const azimuthRef = useRef(BASE_AZIMUTH);

  useFrame((_, delta) => {
    const frame = getHeroFrame(progressRef.current ?? 0, keyframes);
    const target = BASE_AZIMUTH + frame.cameraAzimuth;
    azimuthRef.current += (target - azimuthRef.current) * Math.min(1, delta * 2);
    const [x, y, z] = cameraPosition(azimuthRef.current);
    camera.position.set(x, y, z);
    camera.lookAt(0, 0.25, 0);
  });

  return null;
}

interface SceneContentProps {
  progressRef: RefObject<number>;
  keyframes: HeroKeyframe[];
  simplified: boolean;
}

function SceneContent({ progressRef, keyframes, simplified }: SceneContentProps) {
  return (
    <>
      <PerspectiveCamera makeDefault fov={26} position={cameraPosition(BASE_AZIMUTH)} />
      <CameraRig progressRef={progressRef} keyframes={keyframes} />

      <ambientLight intensity={0.75} />
      <directionalLight
        position={[4, 7, 4]}
        intensity={1.1}
        castShadow={!simplified}
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 4, -3]} intensity={0.25} color="#DCEBF5" />

      <PropertyModel simplified={simplified} />

      {ROOM_IDS.map((id) => (
        <RoomHighlight key={id} roomId={id} progressRef={progressRef} keyframes={keyframes} />
      ))}

      <EvidenceMarker progressRef={progressRef} keyframes={keyframes} />
      <InspectionPhone progressRef={progressRef} keyframes={keyframes} compact={simplified} />

      {!simplified && (
        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.35}
          scale={12}
          blur={2.2}
          far={3}
          color="#0B4267"
        />
      )}
    </>
  );
}

interface ApartmentSceneProps {
  progressRef: RefObject<number>;
  keyframes?: HeroKeyframe[];
  simplified?: boolean;
}

/** Top-level R3F canvas: the apartment cutaway, the inspection phone, and the scroll-driven camera. */
export function ApartmentScene({ progressRef, keyframes = HERO_KEYFRAMES, simplified = false }: ApartmentSceneProps) {
  return (
    <Canvas
      shadows={!simplified}
      dpr={simplified ? 1 : [1, 1.75]}
      gl={{ alpha: true, antialias: true }}
      className="!touch-auto"
    >
      <SceneContent progressRef={progressRef} keyframes={keyframes} simplified={simplified} />
    </Canvas>
  );
}
