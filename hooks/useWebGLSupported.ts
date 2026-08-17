"use client";

import { useSyncExternalStore } from "react";

let cached: boolean | null = null;

function detect(): boolean {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    cached = Boolean(gl);
  } catch {
    cached = false;
  }
  return cached;
}

function subscribe() {
  // WebGL support can't change within a session — no event to subscribe to.
  return () => {};
}

function getServerSnapshot(): boolean | null {
  return null;
}

/** Detects real WebGL availability so the hero can fall back to a static scene. */
export function useWebGLSupported(): boolean | null {
  return useSyncExternalStore(subscribe, detect, getServerSnapshot);
}
