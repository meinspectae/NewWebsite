import Link from "next/link";

interface StoreBadgeLinkProps {
  href: string;
}

// Both badges below are Apple's and Google's real, official, unmodified
// artwork - served as-is from /public, per each platform's brand guidelines
// (their rules require using the artwork unmodified, at a consistent size,
// not recreated or restyled).

function AppStoreBadge({ href }: StoreBadgeLinkProps) {
  return (
    <Link href={href} className="inline-block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/badge-app-store.svg" alt="Download on the App Store" className="h-10 w-auto" draggable={false} />
    </Link>
  );
}

function GooglePlayBadge({ href }: StoreBadgeLinkProps) {
  return (
    <Link href={href} className="inline-block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/badge-google-play.svg" alt="Get it on Google Play" className="h-10 w-auto" draggable={false} />
    </Link>
  );
}

export function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3.5">
      <AppStoreBadge href="https://apps.apple.com/ae/app/meinspect/id6793102473" />
      <GooglePlayBadge href="https://play.google.com/store/apps/details?id=com.meinspect.app" />
    </div>
  );
}
