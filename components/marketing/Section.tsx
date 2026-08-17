interface SectionProps {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
  tone?: "off-white" | "white";
  wide?: boolean;
}

export function Section({ eyebrow, title, lead, children, tone = "off-white", wide = false }: SectionProps) {
  return (
    <section className={`w-full py-14 lg:py-18 ${tone === "white" ? "bg-white" : "bg-off-white"}`}>
      <div className={`mx-auto px-6 lg:px-10 ${wide ? "max-w-[1100px]" : "max-w-[860px]"}`}>
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
          {eyebrow}
        </span>
        <h2 className="mt-2.5 max-w-[36ch] text-[24px] font-semibold leading-[1.2] tracking-tight text-dark sm:text-[28px]">
          {title}
        </h2>
        {lead && <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-grey sm:text-[16px]">{lead}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
