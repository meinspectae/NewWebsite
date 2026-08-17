interface InfoBandProps {
  eyebrow: string;
  title: string;
  body: string;
}

export function InfoBand({ eyebrow, title, body }: InfoBandProps) {
  return (
    <section className="w-full border-y border-dark/8 bg-off-white py-14 lg:py-16">
      <div className="mx-auto max-w-[760px] px-6 text-center lg:px-10">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
          {eyebrow}
        </span>
        <h2 className="mt-2.5 text-[22px] font-semibold leading-[1.25] tracking-tight text-dark sm:text-[26px]">
          {title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-grey sm:text-[16px]">{body}</p>
      </div>
    </section>
  );
}
