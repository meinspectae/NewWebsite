"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants/nav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-dark/8 bg-off-white/90 backdrop-blur-md py-2.5 shadow-[0_1px_0_rgba(11,66,103,0.06)]"
          : "border-transparent bg-off-white/70 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="MeInspect"
            width={48}
            height={48}
            className={`origin-left transition-transform duration-300 ${scrolled ? "scale-[0.88]" : "scale-100"}`}
            priority
          />
          <span className="text-[18px] font-semibold tracking-tight text-dark sm:text-[19px]">
            Me<span className="text-primary-blue">Inspect</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[14px] font-medium text-dark/75 transition-colors hover:text-primary-blue"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/start"
            className="hidden items-center rounded-full bg-primary-blue px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-deep-blue sm:inline-flex"
          >
            Start an Inspection
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-dark lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-dark/8 bg-off-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-[15px] font-medium text-dark/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/start"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-primary-blue px-5 py-3 text-center text-[14px] font-semibold text-white"
                >
                  Start an Inspection
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
