import { ReportBook } from "./ReportBook";
import { ReportStats } from "./ReportStats";

export function Report() {
  return (
    <section className="relative w-full overflow-hidden bg-off-white py-20 lg:py-28">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[38px] lg:text-[44px]">
            128 pieces of evidence.
            <br />
            <span className="text-primary-blue">1 verified report.</span>
          </h2>
        </div>

        <div className="mt-14 flex flex-col items-center gap-14 lg:mt-16">
          <ReportBook />
          <ReportStats />
        </div>
      </div>
    </section>
  );
}
