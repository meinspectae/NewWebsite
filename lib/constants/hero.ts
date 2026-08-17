export const HERO_COPY = {
  headlinePrefix: "Know ",
  headlineEmphasis: "exactly",
  headlineSuffix: " what was there.",
  subheadline: "Before you move in. Before you move out.",
  body: "Photograph it. Verify it. Sign it. Keep the record.",
  trustIndicators: ["GPS Verified", "Time Stamped", "Digitally Signed"],
} as const;

export type RoomId = "living" | "kitchen" | "bedroom" | "bathroom";

interface RoomLayout {
  id: RoomId;
  label: string;
  /** [x, z] center of the room footprint, in world units. */
  position: [number, number];
  /** [width, depth] of the room footprint. */
  size: [number, number];
}

/** Quadrant centers/footprints of the apartment cutaway — must stay in sync
 *  with the wall layout built in components/3d/PropertyModel.tsx. */
export const ROOM_LAYOUT: Record<RoomId, RoomLayout> = {
  living: {
    id: "living",
    label: "Living Room",
    position: [-1.4, -1.35],
    size: [2.6, 2.5],
  },
  kitchen: {
    id: "kitchen",
    label: "Kitchen",
    position: [1.4, -1.35],
    size: [2.6, 2.5],
  },
  bedroom: {
    id: "bedroom",
    label: "Bedroom",
    position: [-1.4, 1.35],
    size: [2.6, 2.5],
  },
  bathroom: {
    id: "bathroom",
    label: "Bathroom",
    position: [1.4, 1.35],
    size: [2.6, 2.5],
  },
};

export type MarkerTone = "blue" | "green" | "dark";

export interface HeroKeyframe {
  /** 0..1 position along the pinned scroll runway. */
  progress: number;
  /** Phone's horizontal offset in world units. Negative = screen left. */
  phoneX: number;
  phoneRotY: number;
  cameraAzimuth: number;
  activeRoom: RoomId | null;
  marker: {
    room: RoomId;
    icon: "camera" | "map-pin" | "check-circle";
    label: string;
    tone: MarkerTone;
  } | null;
  phoneScreen: {
    room: string;
    condition: string;
    conditionTone: MarkerTone;
    meta: string;
    photoCount: string;
  };
}

const DEFAULT_SCREEN = {
  room: "Living Room",
  condition: "Good",
  conditionTone: "green" as MarkerTone,
  meta: "Inspection in Progress",
  photoCount: "2/8",
};

export const HERO_KEYFRAMES: HeroKeyframe[] = [
  {
    progress: 0,
    phoneX: 1.2,
    phoneRotY: -10,
    cameraAzimuth: 0,
    activeRoom: null,
    marker: null,
    phoneScreen: DEFAULT_SCREEN,
  },
  {
    progress: 0.22,
    phoneX: -1.65,
    phoneRotY: 13,
    cameraAzimuth: -6,
    activeRoom: "living",
    marker: { room: "living", icon: "camera", label: "28 Photos", tone: "blue" },
    phoneScreen: {
      room: "Living Room",
      condition: "Good",
      conditionTone: "green",
      meta: "Inspection in Progress",
      photoCount: "2/8",
    },
  },
  {
    progress: 0.48,
    phoneX: 1.65,
    phoneRotY: -13,
    cameraAzimuth: 6,
    activeRoom: "kitchen",
    marker: { room: "kitchen", icon: "check-circle", label: "3 Issues Found", tone: "dark" },
    phoneScreen: {
      room: "Kitchen",
      condition: "3 Issues",
      conditionTone: "dark",
      meta: "Inspection in Progress",
      photoCount: "4/8",
    },
  },
  {
    progress: 0.74,
    phoneX: -1.35,
    phoneRotY: 11,
    cameraAzimuth: -4,
    activeRoom: "bedroom",
    marker: { room: "bedroom", icon: "map-pin", label: "GPS Verified", tone: "green" },
    phoneScreen: {
      room: "Bedroom",
      condition: "Good",
      conditionTone: "green",
      meta: "Location Verified",
      photoCount: "6/8",
    },
  },
  {
    progress: 1,
    phoneX: 0,
    phoneRotY: 0,
    cameraAzimuth: 0,
    activeRoom: null,
    marker: null,
    phoneScreen: {
      room: "Full Property",
      condition: "Complete",
      conditionTone: "green",
      meta: "Report Ready",
      photoCount: "8/8",
    },
  },
];

/** Same journey, smaller physical amplitude — used on mobile so the phone
 *  keeps moving left/right without overflowing a narrow viewport. */
function scaleAmplitude(keyframes: HeroKeyframe[], scale: number): HeroKeyframe[] {
  return keyframes.map((kf) => ({
    ...kf,
    phoneX: kf.phoneX * scale,
    phoneRotY: kf.phoneRotY * scale,
    cameraAzimuth: kf.cameraAzimuth * scale,
  }));
}

export const HERO_KEYFRAMES_COMPACT = scaleAmplitude(HERO_KEYFRAMES, 0.5);
