import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import {
  PROPERTY_FIELDS,
  SUMMARY_STATS,
  REPORT_ROOMS,
  CONDITION_RATINGS,
  REPORT_ISSUES,
  SIGNATORIES,
  type ReportPageMeta,
} from "@/lib/constants/report";

function PageChrome({ page, children }: { page: ReportPageMeta; children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-dark/10 pb-2">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-primary-blue sm:text-[10px]">
          {page.title}
        </span>
        <span className="font-mono text-[9px] font-semibold text-dark/30 sm:text-[10px]">
          Page {page.number} / 6
        </span>
      </div>
      <div className="flex-1 pt-3">{children}</div>
    </div>
  );
}

function PropertyPage({ page }: { page: ReportPageMeta }) {
  return (
    <PageChrome page={page}>
      <div className="flex flex-col gap-2">
        {PROPERTY_FIELDS.map((field) => (
          <div key={field.label} className="flex flex-col gap-0.5 border-b border-dark/8 pb-1.5">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-wide text-grey">{field.label}</span>
            <span className="text-[14px] font-semibold text-dark sm:text-[15px]">{field.value}</span>
          </div>
        ))}
      </div>
    </PageChrome>
  );
}

function SummaryPage({ page }: { page: ReportPageMeta }) {
  return (
    <PageChrome page={page}>
      <div className="grid grid-cols-2 gap-2.5">
        {SUMMARY_STATS.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-dark/8 bg-off-white p-2.5">
            <span className="block font-mono text-[8.5px] font-semibold uppercase tracking-wide text-grey">
              {stat.label}
            </span>
            <span className="mt-1 block text-[17px] font-bold text-dark sm:text-[19px]">{stat.value}</span>
          </div>
        ))}
      </div>
    </PageChrome>
  );
}

function PhotosPage({ page }: { page: ReportPageMeta }) {
  return (
    <PageChrome page={page}>
      <div className="grid grid-cols-2 gap-2">
        {REPORT_ROOMS.map((room, i) => (
          <motion.div
            key={room.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: "easeOut" }}
            className="overflow-hidden rounded-lg"
          >
            <div className="relative aspect-[16/9] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={room.photo} alt={`${room.name} photo from a MeInspect property condition report`} className="h-full w-full object-cover" draggable={false} />
            </div>
            <span className="mt-0.5 block text-[9.5px] font-semibold text-dark/70 sm:text-[10.5px]">{room.name}</span>
          </motion.div>
        ))}
      </div>
    </PageChrome>
  );
}

function ConditionsPage({ page }: { page: ReportPageMeta }) {
  return (
    <PageChrome page={page}>
      <div className="flex flex-col gap-2">
        {CONDITION_RATINGS.map((c) => {
          const good = c.rating === "Good";
          return (
            <div key={c.room} className="flex items-center justify-between rounded-lg border border-dark/8 bg-off-white px-3 py-2">
              <span className="text-[12.5px] font-semibold text-dark sm:text-[13.5px]">{c.room}</span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10.5px] font-bold ${
                  good ? "bg-verify-green/10 text-verify-green" : "bg-dark/8 text-dark/70"
                }`}
              >
                <CheckCircle2 size={11} strokeWidth={2.5} />
                {c.rating}
              </span>
            </div>
          );
        })}
      </div>
    </PageChrome>
  );
}

function IssuesPage({ page }: { page: ReportPageMeta }) {
  return (
    <PageChrome page={page}>
      <div className="flex flex-col gap-2">
        {REPORT_ISSUES.map((issue) => (
          <div key={issue.label} className="flex items-start gap-2.5 rounded-lg border border-dark/8 bg-off-white px-3 py-2">
            <AlertTriangle size={14} strokeWidth={2.25} className="mt-0.5 shrink-0 text-primary-blue" />
            <div className="flex flex-col">
              <span className="text-[12.5px] font-semibold text-dark sm:text-[13.5px]">{issue.label}</span>
              <span className="text-[10.5px] text-grey">{issue.room}</span>
            </div>
          </div>
        ))}
      </div>
    </PageChrome>
  );
}

function SignaturesPage({ page }: { page: ReportPageMeta }) {
  return (
    <PageChrome page={page}>
      <div className="flex flex-col justify-center gap-3">
        {SIGNATORIES.map((signatory, i) => (
          <div key={signatory.role} className="flex flex-col gap-0.5">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-wide text-grey">
              {signatory.role}
            </span>
            <div className="overflow-hidden">
              <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.65, delay: 0.15 + i * 0.3, ease: "easeInOut" }}
                className="block whitespace-nowrap font-signature text-[26px] leading-none text-primary-blue sm:text-[30px]"
              >
                {signatory.name}
              </motion.span>
            </div>
            <div className="h-px w-full bg-dark/15" />
          </div>
        ))}
      </div>
    </PageChrome>
  );
}

interface ReportPageProps {
  page: ReportPageMeta;
}

export function ReportPage({ page }: ReportPageProps) {
  switch (page.id) {
    case "property":
      return <PropertyPage page={page} />;
    case "summary":
      return <SummaryPage page={page} />;
    case "photos":
      return <PhotosPage page={page} />;
    case "conditions":
      return <ConditionsPage page={page} />;
    case "issues":
      return <IssuesPage page={page} />;
    case "signatures":
      return <SignaturesPage page={page} />;
    default:
      return null;
  }
}
