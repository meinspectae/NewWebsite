"use client";

import { useState } from "react";
import { TextField } from "@/components/marketing/FormField";
import { FormCard } from "@/components/marketing/FormCard";
import { submitForm } from "@/lib/submitForm";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <FormCard
      submitLabel="Join the Waiting List"
      successTitle="You're on the list."
      successBody="No spam — just one email when we launch on the App Store and Play Store."
      onSubmit={() => submitForm("waitlist", { name, email })}
    >
      <TextField id="name" label="Name" value={name} onChange={setName} />
      <TextField id="email" label="Email Address" type="email" required value={email} onChange={setEmail} />
    </FormCard>
  );
}
