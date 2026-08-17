export interface TimelineStage {
  eyebrow: "MOVE IN" | "MOVE OUT";
  eyebrowTone: "green" | "blue";
  day: string;
  stats: string[];
}

export const MOVE_IN_STAGE: TimelineStage = {
  eyebrow: "MOVE IN",
  eyebrowTone: "green",
  day: "Day 01",
  stats: ["128 Photos", "3 Parties Signed", "GPS Verified"],
};

export const MOVE_OUT_STAGE: TimelineStage = {
  eyebrow: "MOVE OUT",
  eyebrowTone: "blue",
  day: "Day 364",
  stats: ["142 Photos", "Damage Comparison", "Final Report"],
};

export interface DiffMarker {
  label: string;
  /** Percent position within the photo frame. */
  x: number;
  y: number;
}

export const DIFF_MARKERS: DiffMarker[] = [
  { label: "Wall mark", x: 28, y: 38 },
  { label: "Cracked tile", x: 68, y: 72 },
  { label: "Damaged cabinet", x: 80, y: 32 },
];
