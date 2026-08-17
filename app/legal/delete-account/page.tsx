import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Breadcrumb } from "@/components/marketing/Breadcrumb";
import { NumberedSteps } from "@/components/marketing/NumberedSteps";
import { SimpleTable } from "@/components/marketing/SimpleTable";

export const metadata: Metadata = {
  title: "Delete Your Account — MeInspect",
  description: "How to request deletion of your MeInspect account and what happens to your data.",
};

const STEPS = [
  {
    number: 1,
    text: "In the app: Open MeInspect and go to Profile → Settings → Delete Account. Confirm the request when prompted, and your deletion request will be submitted immediately.",
  },
  {
    number: 2,
    text: 'By email: If you no longer have access to the app, send an email to meinspect.ae@gmail.com from the address linked to your account, with the subject line "Delete My Account". Include your registered name and phone/WhatsApp number so we can verify your identity.',
  },
  {
    number: 3,
    text: "Verification & processing: We may contact you to confirm your identity before proceeding. Once verified, we will process your request and permanently delete your account within 30 days.",
  },
  {
    number: 4,
    text: "Confirmation: You'll receive an email confirming that your account and associated data have been deleted.",
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <article className="w-full bg-off-white py-12 lg:py-16">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <Breadcrumb label="Delete Account" />

            <h1 className="mt-5 text-[30px] font-semibold tracking-tight text-dark sm:text-[36px]">
              Delete Your MeInspect Account
            </h1>
            <span className="mt-2 block font-mono text-[12px] font-medium text-dark/40">Last updated: July 2026</span>

            <p className="mt-6 text-[14.5px] leading-relaxed text-grey">
              This page explains how to request deletion of your MeInspect account (the app published by MeInspect,
              developer of the MeInspect Property Condition Report app) and what happens to your data when you do.
            </p>

            <h2 className="mt-10 text-[17px] font-bold text-dark sm:text-[18px]">
              How to request account deletion
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-grey">
              You can request deletion of your MeInspect account in either of the following ways:
            </p>
            <div className="mt-5">
              <NumberedSteps steps={STEPS} />
            </div>

            <p className="mt-6 rounded-xl border border-dashed border-dark/15 bg-white px-5 py-4 text-[13.5px] leading-relaxed text-grey">
              <span className="font-semibold text-dark">Note:</span> Deleting your account is permanent and cannot be
              undone. Any in-progress Property Condition Reports that have not been finalized will also be removed.
            </p>

            <h2 className="mt-10 text-[17px] font-bold text-dark sm:text-[18px]">What data is deleted</h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-grey">
              When your account deletion request is completed, the following data is permanently deleted from our
              systems:
            </p>
            <div className="mt-5">
              <SimpleTable
                columns={["Data Type", "Retention on Deletion"]}
                rows={[
                  ["Account profile (name, email, phone/WhatsApp number, login credentials)", "Deleted within 30 days"],
                  [
                    "In-progress / unfinalized inspection drafts (photos, notes, ratings not yet included in a completed report)",
                    "Deleted within 30 days",
                  ],
                  ["Device and usage data linked to your account", "Deleted within 30 days"],
                ]}
              />
            </div>

            <h2 className="mt-10 text-[17px] font-bold text-dark sm:text-[18px]">
              What data is kept, and for how long
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-grey">
              Some data must be retained even after account deletion, either because other parties rely on it or
              because we are legally required to keep it:
            </p>
            <div className="mt-5">
              <SimpleTable
                columns={["Data Type", "Why It's Kept", "Retention Period"]}
                rows={[
                  [
                    "Completed Property Condition Reports (photos, GPS/timestamp data, condition ratings, signatures) that you generated as part of a handover",
                    "These reports are shared with, and relied on by, the other named parties (e.g. landlord, tenant, or agent) to the same inspection, and may be needed as evidence in a tenancy dispute",
                    "Up to 7 years, in line with UAE tenancy record-keeping practice",
                  ],
                  ["Payment and billing records", "Required for financial, tax, and accounting compliance", "Up to 5 years"],
                  [
                    "Records of the deletion request itself",
                    "To demonstrate compliance with data protection obligations",
                    "Up to 2 years",
                  ],
                ]}
              />
            </div>

            <p className="mt-6 text-[14.5px] leading-relaxed text-grey">
              If you would like a copy of your data before requesting deletion, or have questions about what is
              retained, contact us at meinspect.ae@gmail.com before submitting your request.
            </p>

            <h2 className="mt-10 text-[17px] font-bold text-dark sm:text-[18px]">Questions?</h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-grey">
              For anything else about your account or this process, reach out to us at meinspect.ae@gmail.com, or read
              our Privacy Policy for more on how we handle your data.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
