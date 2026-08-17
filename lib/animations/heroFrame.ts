import { HERO_KEYFRAMES, type HeroKeyframe } from "@/lib/constants/hero";

export interface HeroFrame {
  phoneX: number;
  phoneRotY: number;
  cameraAzimuth: number;
  activeRoom: HeroKeyframe["activeRoom"];
  marker: HeroKeyframe["marker"];
  phoneScreen: HeroKeyframe["phoneScreen"];
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Resolves the hero's scroll-driven state for a given 0..1 progress value.
 * Numeric transforms (phone position/rotation, camera) interpolate smoothly
 * between the surrounding keyframes; discrete UI (active room, marker,
 * phone screen copy) snaps to whichever keyframe is nearer, so labels change
 * mid-flight rather than lagging behind the phone's arrival.
 */
export function getHeroFrame(progress: number, keyframes: HeroKeyframe[] = HERO_KEYFRAMES): HeroFrame {
  const p = Math.min(1, Math.max(0, progress));
  const frames = keyframes;

  let i = 0;
  while (i < frames.length - 2 && p >= frames[i + 1].progress) {
    i++;
  }

  const a = frames[i];
  const b = frames[i + 1];
  const span = b.progress - a.progress || 1;
  const t = smoothstep(Math.min(1, Math.max(0, (p - a.progress) / span)));
  const nearest = t > 0.5 ? b : a;

  return {
    phoneX: lerp(a.phoneX, b.phoneX, t),
    phoneRotY: lerp(a.phoneRotY, b.phoneRotY, t),
    cameraAzimuth: lerp(a.cameraAzimuth, b.cameraAzimuth, t),
    activeRoom: nearest.activeRoom,
    marker: nearest.marker,
    phoneScreen: nearest.phoneScreen,
  };
}
