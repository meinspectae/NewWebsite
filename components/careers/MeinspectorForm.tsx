"use client";

import { useState } from "react";
import { TextField, SelectField, TextAreaField } from "@/components/marketing/FormField";
import { FormCard } from "@/components/marketing/FormCard";
import { submitForm } from "@/lib/submitForm";

const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];
const AVAILABILITY = ["Full-time", "Part-time", "Weekends only", "Flexible / On-call"];

export function MeinspectorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emirate, setEmirate] = useState("");
  const [occupation, setOccupation] = useState("");
  const [availability, setAvailability] = useState("");
  const [why, setWhy] = useState("");

  return (
    <FormCard
      submitLabel="Apply to Become a Meinspector"
      successTitle="Application received."
      successBody="We review every application and get back to you within a few days."
      onSubmit={() =>
        submitForm("careers", { fullName: name, email, phone, emirate, occupation, availability, why })
      }
    >
      <TextField id="full-name" label="Full Name" required value={name} onChange={setName} />
      <TextField id="email" label="Email Address" type="email" required value={email} onChange={setEmail} />
      <TextField id="phone" label="Phone / WhatsApp" type="tel" required value={phone} onChange={setPhone} />
      <SelectField id="emirate" label="Emirate" required options={EMIRATES} value={emirate} onChange={setEmirate} />
      <TextField id="occupation" label="Current Occupation" value={occupation} onChange={setOccupation} />
      <SelectField
        id="availability"
        label="Availability"
        options={AVAILABILITY}
        value={availability}
        onChange={setAvailability}
      />
      <TextAreaField
        id="why"
        label="Why do you want to become a Meinspector?"
        value={why}
        onChange={setWhy}
      />
    </FormCard>
  );
}
