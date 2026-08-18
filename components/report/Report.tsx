import { ReportBook } from "./ReportBook";
import { ReportStats } from "./ReportStats";

export function Report() {
  return (
    <section className="relative w-full overflow-hidden bg-off-white py-14 lg:py-16">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[38px] lg:text-[44px]">
            <span className="text-primary-blue">1 verified report.</span>
          </h2>
        </div>

        <div className="mt-8 flex flex-col items-center gap-10 lg:mt-10 lg:flex-row lg:items-center lg:justify-center lg:gap-20 xl:gap-28">
          <ReportBook />
          <div className="flex flex-col items-center gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/meinspected-badge.png"
              alt="MeInspected — Documented. Verified. Protected."
              className="w-[130px] shrink-0 drop-shadow-[0_16px_30px_rgba(11,66,103,0.25)] lg:w-[150px]"
              draggable={false}
            />
            <ReportStats />
          </div>
        </div>
      </div>
    </section>
  );
}
