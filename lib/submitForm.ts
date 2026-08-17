export type FormType = "contact" | "careers" | "waitlist";

export async function submitForm(formType: FormType, fields: Record<string, string>) {
  const res = await fetch("/api/forms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, fields }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Failed to send message. Please try again.");
  }
}
