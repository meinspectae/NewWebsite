import Link from "next/link";

interface BreadcrumbProps {
  label: string;
}

export function Breadcrumb({ label }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-1.5 text-[12.5px] font-medium text-dark/45">
      <Link href="/" className="transition-colors hover:text-primary-blue">
        Home
      </Link>
      <span>/</span>
      <span className="text-dark/70">{label}</span>
    </div>
  );
}
