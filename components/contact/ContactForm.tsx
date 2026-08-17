"use client";

import { useState } from "react";
import { TextField, SelectField, TextAreaField } from "@/components/marketing/FormField";
import { FormCard } from "@/components/marketing/FormCard";
import { submitForm } from "@/lib/submitForm";

const ROLE_OPTIONS = ["Landlord", "Tenant", "Real Estate Agent", "Property Manager", "Agency / Company", "Other"];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  return (
    <FormCard
      submitLabel="Send Message"
      successTitle="Message received."
      successBody="Thanks for reaching out — we'll get back to you within 24 hours."
      onSubmit={() => submitForm("contact", { name, email, phone, role, message })}
    >
      <TextField id="name" label="Your Name" required value={name} onChange={setName} />
      <TextField id="email" label="Email Address" type="email" required value={email} onChange={setEmail} />
      <TextField id="phone" label="Phone / WhatsApp" type="tel" value={phone} onChange={setPhone} />
      <SelectField id="role" label="I am a..." options={ROLE_OPTIONS} value={role} onChange={setRole} />
      <TextAreaField id="message" label="Message" required value={message} onChange={setMessage} />
    </FormCard>
  );
}
