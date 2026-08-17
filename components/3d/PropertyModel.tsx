"use client";

import { COLORS } from "@/lib/constants/colors";

const WOOD = "#B08A5F";
const WOOD_DARK = "#8C6A45";
const FABRIC = "#ACAA9C";
const LEAF = "#4F7A4A";
const LEAF_DARK = "#3B5E38";
const POT = "#E8E1D3";

interface WallProps {
  position: [number, number, number];
  size: [number, number, number];
}

function Wall({ position, size }: WallProps) {
  const [sx, sy, sz] = size;
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#FAF5EC" roughness={0.92} metalness={0} />
      </mesh>
      {/* baseboard trim — thin architectural accent line at the floor */}
      <mesh position={[0, -sy / 2 + 0.018, 0]}>
        <boxGeometry args={[sx + 0.01, 0.036, sz + 0.01]} />
        <meshStandardMaterial color={COLORS.deepBlue} roughness={0.6} metalness={0.1} />
      </mesh>
    </group>
  );
}

interface BlockProps {
  position: [number, number, number];
  size: [number, number, number];
  color?: string;
  rotationY?: number;
  roughness?: number;
}

function Block({ position, size, color = COLORS.grey, rotationY = 0, roughness = 0.7 }: BlockProps) {
  return (
    <mesh position={position} rotation={[0, rotationY, 0]} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={0.04} />
    </mesh>
  );
}

/** A simple potted plant — pot cylinder + layered foliage spheres. */
function Plant({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.09, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.09, 0.075, 0.18, 12]} />
        <meshStandardMaterial color={POT} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.24, 0]} castShadow>
        <sphereGeometry args={[0.13, 10, 8]} />
        <meshStandardMaterial color={LEAF} roughness={0.85} />
      </mesh>
      <mesh position={[0.07, 0.34, 0.02]} castShadow>
        <sphereGeometry args={[0.09, 10, 8]} />
        <meshStandardMaterial color={LEAF_DARK} roughness={0.85} />
      </mesh>
      <mesh position={[-0.06, 0.32, -0.05]} castShadow>
        <sphereGeometry args={[0.08, 10, 8]} />
        <meshStandardMaterial color={LEAF} roughness={0.85} />
      </mesh>
    </group>
  );
}

const WALL_H = 0.52;
const WALL_T = 0.07;

function LivingRoomFurniture() {
  return (
    <group>
      {/* area rug */}
      <mesh position={[-1.3, 0.001, -1.1]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[1.9, 1.7]} />
        <meshStandardMaterial color="#DCD2BE" roughness={1} />
      </mesh>

      {/* sofa base + backrest */}
      <Block position={[-2.05, 0.16, -2.15]} size={[1.5, 0.32, 0.6]} color={FABRIC} roughness={0.85} />
      <Block position={[-2.05, 0.42, -2.42]} size={[1.5, 0.2, 0.14]} color={FABRIC} roughness={0.85} />
      <Block position={[-2.6, 0.28, -2.15]} size={[0.14, 0.34, 0.6]} color={FABRIC} roughness={0.85} />

      {/* coffee table */}
      <Block position={[-1.35, 0.09, -1.15]} size={[0.7, 0.05, 0.45]} color={WOOD} roughness={0.4} />
      <Block position={[-1.35, 0.045, -1.15]} size={[0.6, 0.05, 0.38]} color={WOOD_DARK} roughness={0.4} />

      {/* TV console + screen */}
      <Block position={[-0.25, 0.16, -2.55]} size={[0.9, 0.32, 0.16]} color={WOOD_DARK} roughness={0.4} />
      <Block position={[-0.25, 0.48, -2.58]} size={[0.85, 0.5, 0.05]} color={COLORS.dark} roughness={0.2} />

      <Plant position={[-0.3, 0, -2.4]} scale={1.3} />
    </group>
  );
}

function KitchenFurniture() {
  return (
    <group>
      <Block position={[2.35, 0.2, -2.15]} size={[0.7, 0.4, 2.0]} color="#F2EEE5" roughness={0.5} />
      <Block position={[1.15, 0.22, -1.05]} size={[1.3, 0.44, 0.55]} color="#F2EEE5" roughness={0.5} />
      <Block position={[1.15, 0.45, -1.05]} size={[1.3, 0.03, 0.55]} color={COLORS.primaryBlue} roughness={0.3} />
      <mesh position={[0.75, 0.28, -0.55]} castShadow>
        <cylinderGeometry args={[0.14, 0.14, 0.56, 12]} />
        <meshStandardMaterial color={WOOD} roughness={0.6} />
      </mesh>

      <Plant position={[2.55, 0, -0.3]} scale={1.1} />
    </group>
  );
}

function BedroomFurniture() {
  return (
    <group>
      <Block position={[-1.55, 0.14, 2.0]} size={[1.7, 0.28, 1.35]} color="#EAE3D6" roughness={0.85} />
      <Block position={[-1.55, 0.26, 1.65]} size={[1.7, 0.1, 0.5]} color={FABRIC} roughness={0.85} />
      <Block position={[-1.55, 0.3, 1.42]} size={[1.7, 0.32, 0.12]} color={COLORS.deepBlue} roughness={0.6} />
      <Block position={[-2.55, 0.2, 2.4]} size={[0.32, 0.4, 0.32]} color={WOOD_DARK} roughness={0.4} />

      <Plant position={[-0.25, 0, 2.4]} scale={1.1} />
    </group>
  );
}

function BathroomFurniture() {
  return (
    <group>
      <Block position={[2.1, 0.18, 1.5]} size={[1.1, 0.36, 0.6]} color="#F2EEE5" roughness={0.4} />
      <Block position={[1.15, 0.14, 2.15]} size={[0.75, 0.28, 1.15]} color={COLORS.white} roughness={0.25} />

      <Plant position={[0.3, 0, 1.3]} scale={0.75} />
    </group>
  );
}

interface PropertyModelProps {
  simplified?: boolean;
}

/**
 * Low-poly architectural cutaway placeholder built from primitives.
 * Swap for a GLTF/GLB import later without touching the scroll animation —
 * ApartmentScene only depends on this component rendering inside the same
 * ~5.6 x 5.4 world-unit footprint centered on the origin.
 */
export function PropertyModel({ simplified = false }: PropertyModelProps) {
  return (
    <group>
      {/* Floor slab — warm hardwood tone, unmistakably distinct from bare grey */}
      <mesh position={[0, -0.06, 0]} receiveShadow>
        <boxGeometry args={[5.7, 0.12, 5.5]} />
        <meshStandardMaterial color="#D9BE93" roughness={0.8} metalness={0.02} />
      </mesh>

      {/* Perimeter walls (front wall split for an entrance gap) */}
      <Wall position={[0, WALL_H / 2, -2.72]} size={[5.7, WALL_H, WALL_T]} />
      <Wall position={[-2.72, WALL_H / 2, 0]} size={[WALL_T, WALL_H, 5.5]} />
      <Wall position={[2.72, WALL_H / 2, 0]} size={[WALL_T, WALL_H, 5.5]} />
      <Wall position={[-1.65, WALL_H / 2, 2.72]} size={[2.3, WALL_H, WALL_T]} />
      <Wall position={[1.65, WALL_H / 2, 2.72]} size={[2.3, WALL_H, WALL_T]} />

      {/* Interior partitions, split for hallway doorways */}
      <Wall position={[0, WALL_H / 2, -1.65]} size={[WALL_T, WALL_H, 2.1]} />
      <Wall position={[0, WALL_H / 2, 1.65]} size={[WALL_T, WALL_H, 2.1]} />
      <Wall position={[-1.7, WALL_H / 2, 0]} size={[2.2, WALL_H, WALL_T]} />
      <Wall position={[1.7, WALL_H / 2, 0]} size={[2.2, WALL_H, WALL_T]} />

      {!simplified && (
        <>
          <LivingRoomFurniture />
          <KitchenFurniture />
          <BedroomFurniture />
          <BathroomFurniture />
        </>
      )}
    </group>
  );
}
