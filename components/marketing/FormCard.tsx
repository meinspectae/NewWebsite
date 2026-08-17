"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormCardProps {
  submitLabel: string;
  successTitle: string;
  successBody: string;
  onSubmit: () => Promise<void>;
  children: React.ReactNode;
}

type Status = "idle" | "loading" | "success" | "error";

export function FormCard({ submitLabel, successTitle, successBody, onSubmit, children }: FormCardProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await onSubmit();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dark/8 bg-white px-8 py-14 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-verify-green/10">
          <CheckCircle2 size={24} className="text-verify-green" strokeWidth={2} />
        </span>
        <h3 className="text-[18px] font-bold text-dark">{successTitle}</h3>
        <p className="max-w-[40ch] text-[14px] leading-relaxed text-grey">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-dark/8 bg-white p-6 sm:p-8">
      {children}

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
          <AlertCircle size={16} strokeWidth={2.25} className="mt-0.5 shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary-blue px-7 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-deep-blue disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
