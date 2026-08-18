export interface TimelineStage {
  eyebrow: "MOVE IN" | "MOVE OUT";
  eyebrowTone: "green" | "blue";
  content: string;
}

export const MOVE_IN_STAGE: TimelineStage = {
  eyebrow: "MOVE IN",
  eyebrowTone: "green",
  content: "Evidence = Report with Photos, timestamp and location",
};

export const MOVE_OUT_STAGE: TimelineStage = {
  eyebrow: "MOVE OUT",
  eyebrowTone: "blue",
  content: "Memory = I remember I reported this to the landlord",
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
