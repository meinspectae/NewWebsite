import type { LucideIcon } from "lucide-react";

export interface FeatureGridItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureGridItem[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-dark/8 bg-white p-6 shadow-[0_10px_26px_-20px_rgba(17,17,17,0.35)]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-blue/18 to-primary-blue/5 ring-1 ring-primary-blue/20">
            <item.icon size={19} className="text-primary-blue" strokeWidth={1.75} />
          </span>
          <h3 className="mt-4 text-[15px] font-bold leading-snug text-dark">{item.title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-grey">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
