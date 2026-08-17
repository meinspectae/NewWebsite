export interface FeatureMarker {
  x: number;
  y: number;
}

export interface Feature {
  id: string;
  label: string;
  description: string;
  icon: "camera" | "check" | "pen" | "file" | "mail" | "key" | "gauge" | "cloud" | "history";
  side: "left" | "right";
  tone: "blue" | "green";
  markerStyle: "pin" | "glow" | "timeline";
  markers: FeatureMarker[];
}

/**
 * Marker coordinates are percentages within the apartment cutaway image
 * (public/hero/apartment.png, 690x512 — same reference used by the hero),
 * eyeballed against the actual rendered rooms: kitchen top-left, bedroom
 * top-right, living room bottom-center, balcony at the very bottom.
 */
export const FEATURES: Feature[] = [
  {
    id: "gps",
    label: "GPS Tagged Photos",
    description: "Every photo is pinned to the exact spot it was taken.",
    icon: "camera",
    side: "left",
    tone: "blue",
    markerStyle: "pin",
    markers: [
      { x: 22, y: 25 },
      { x: 78, y: 22 },
      { x: 44, y: 58 },
    ],
  },
  {
    id: "condition",
    label: "Condition Ratings",
    description: "Every room gets a clear, disputable-proof rating.",
    icon: "check",
    side: "left",
    tone: "green",
    markerStyle: "pin",
    markers: [
      { x: 31, y: 43 },
      { x: 67, y: 39 },
      { x: 57, y: 66 },
    ],
  },
  {
    id: "signatures",
    label: "Digital Signatures",
    description: "Tenant, landlord, and agent all sign off in-app.",
    icon: "pen",
    side: "left",
    tone: "blue",
    markerStyle: "pin",
    markers: [{ x: 14, y: 51 }],
  },
  {
    id: "reports",
    label: "PDF Reports",
    description: "A polished report assembles itself, ready to share.",
    icon: "file",
    side: "left",
    tone: "blue",
    markerStyle: "pin",
    markers: [{ x: 48, y: 69 }],
  },
  {
    id: "email",
    label: "Email Delivery",
    description: "Every party gets a copy the moment it's signed.",
    icon: "mail",
    side: "left",
    tone: "blue",
    markerStyle: "pin",
    markers: [{ x: 86, y: 9 }],
  },
  {
    id: "keys",
    label: "Keys & Access Log",
    description: "Know exactly who holds keys, and when.",
    icon: "key",
    side: "right",
    tone: "green",
    markerStyle: "glow",
    markers: [{ x: 7, y: 46 }],
  },
  {
    id: "utilities",
    label: "Utility Readings",
    description: "Meter readings logged at move-in and move-out.",
    icon: "gauge",
    side: "right",
    tone: "blue",
    markerStyle: "pin",
    markers: [{ x: 55, y: 23 }],
  },
  {
    id: "cloud",
    label: "Cloud Backup",
    description: "Every record is safely synced and never lost.",
    icon: "cloud",
    side: "right",
    tone: "blue",
    markerStyle: "pin",
    markers: [{ x: 50, y: -7 }],
  },
  {
    id: "history",
    label: "Inspection History",
    description: "Every past inspection, one tap away.",
    icon: "history",
    side: "right",
    tone: "green",
    markerStyle: "timeline",
    markers: [{ x: 50, y: 104 }],
  },
];
