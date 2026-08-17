import { Resend } from "resend";

const TO_EMAIL = "hello@meinspect.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "MeInspect <onboarding@resend.dev>";

type FormType = "contact" | "careers" | "waitlist";

const SUBJECTS: Record<FormType, string> = {
  contact: "New contact form submission",
  careers: "New Meinspector application",
  waitlist: "New waiting list signup",
};

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone / WhatsApp",
  role: "I am a",
  message: "Message",
  fullName: "Full Name",
  emirate: "Emirate",
  occupation: "Current Occupation",
  availability: "Availability",
  why: "Why they want to become a Meinspector",
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email delivery isn't configured yet. Set RESEND_API_KEY in your environment." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const formType = body?.formType as FormType | undefined;
  const fields = body?.fields as Record<string, string> | undefined;

  if (!formType || !SUBJECTS[formType] || !fields || typeof fields !== "object") {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const rows = Object.entries(fields)
    .filter(([, value]) => typeof value === "string" && value.trim().length > 0)
    .map(([key, value]) => `<p style="margin:0 0 12px"><strong>${escapeHtml(FIELD_LABELS[key] ?? key)}:</strong><br/>${escapeHtml(value).replace(/\n/g, "<br/>")}</p>`)
    .join("");

  const replyTo = typeof fields.email === "string" && fields.email.trim() ? fields.email.trim() : undefined;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo,
      subject: SUBJECTS[formType],
      html: rows || "<p>(no fields submitted)</p>",
    });

    if (error) {
      return Response.json({ error: "Failed to send message. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
