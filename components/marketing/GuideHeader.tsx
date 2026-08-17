import { Breadcrumb } from "./Breadcrumb";

interface GuideHeaderProps {
  breadcrumb: string;
  tag: string;
  title: string;
  dek: string;
}

export function GuideHeader({ breadcrumb, tag, title, dek }: GuideHeaderProps) {
  return (
    <header className="blueprint-grid relative w-full overflow-hidden bg-off-white pt-10 pb-14 lg:pt-14 lg:pb-16">
      <div className="relative mx-auto max-w-[760px] px-6 lg:px-10">
        <Breadcrumb label={breadcrumb} />

        <span className="mt-6 inline-flex rounded-full bg-primary-blue/10 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-primary-blue">
          {tag}
        </span>

        <h1 className="mt-4 text-[30px] font-semibold leading-[1.16] tracking-tight text-dark sm:text-[38px]">
          {title}
        </h1>

        <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-grey">{dek}</p>

        <span className="mt-5 block font-mono text-[11px] font-medium uppercase tracking-wide text-dark/40">
          MeInspect Resource Hub
        </span>
      </div>
    </header>
  );
}
