export type FormType = "contact" | "careers" | "waitlist";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

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

/**
 * Posts straight to Web3Forms from the browser rather than proxying through
 * our own API route — Web3Forms' abuse protection rejects submissions that
 * arrive from a server instead of a real browser, so this has to run
 * client-side. The access key is meant to be public (it's designed to sit in
 * plain HTML forms), so exposing it via NEXT_PUBLIC_ is expected here.
 */
export async function submitForm(formType: FormType, fields: Record<string, string>) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("Email delivery isn't configured yet. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment.");
  }

  const payload: Record<string, string> = {
    access_key: accessKey,
    subject: SUBJECTS[formType],
    from_name: "MeInspect Website",
  };

  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === "string" && value.trim()) {
      payload[FIELD_LABELS[key] ?? key] = value;
      if (key === "email") payload.email = value;
    }
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.success) {
    throw new Error("Failed to send message. Please try again.");
  }
}
