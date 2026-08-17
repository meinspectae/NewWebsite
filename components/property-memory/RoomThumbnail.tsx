interface RoomThumbnailProps {
  variant?: "move-in" | "move-out";
  className?: string;
}

/**
 * The property itself — same real photo for both timeline stages (it's the
 * same house), with move-out given a faint muted/weathered filter so the
 * two states still read as visually distinct at a glance.
 */
export function RoomThumbnail({ variant = "move-in", className = "" }: RoomThumbnailProps) {
  return (
    <div className={`relative aspect-square shrink-0 overflow-hidden rounded-xl bg-[#F6F1E7] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/rooms/property-living-room.jpg"
        alt=""
        className={`h-full w-full object-cover object-center ${variant === "move-out" ? "sepia-[0.18] saturate-[0.85]" : ""}`}
        draggable={false}
      />
    </div>
  );
}
