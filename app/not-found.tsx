import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center bg-off-white px-6 py-32 text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-blue">404</p>
        <h1 className="mt-3 text-[34px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[42px]">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed text-grey">
          The page you're looking for may have moved or no longer exists. Here are a few places to try instead.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-primary-blue px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Go to homepage
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-dark/10 px-6 py-3 text-[14px] font-semibold text-dark transition-colors hover:border-primary-blue hover:text-primary-blue"
          >
            Browse resources
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-dark/10 px-6 py-3 text-[14px] font-semibold text-dark transition-colors hover:border-primary-blue hover:text-primary-blue"
          >
            Visit FAQ
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
