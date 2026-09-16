"use client";

import { useState } from "react";
import Button from "../ui/Button";
import TextField from "../ui/form/TextField";
import TextArea from "../ui/form/TextArea";
import Select from "../ui/form/Select";
import PillGroup from "../ui/form/PillGroup";
import FormStatus from "../ui/form/FormStatus";
import { useContactSubmit } from "@/lib/useContactSubmit";

const SERVICE_TYPES = [
  "Software Development",
  "Digital Transformation",
  "AI & Data",
  "UI/UX Design",
  "Cloud Solutions",
  "Partnership",
];

const BUDGETS = ["Under $10k", "$10k – $50k", "$50k – $150k", "$150k+", "Not sure yet"];

export type ContactFormProps = {
  /** "dark" for the homepage teaser's glass card on navy; "light" (default) for a white card. */
  tone?: "light" | "dark";
};

// Previously two divergent forms (homepage LeadForm + the dedicated /contact page ContactForm)
// with different field sets. The real backend contract only accepts one shape
// (name/email/phone/serviceType/budgetEstimate/projectDescription), so both placements now
// share this single component — the same "one shared component, not two" fix as last session's
// CTA-button consolidation, this time applied to the form itself. `tone` exists because this
// same component sits on two different card backgrounds (white on /contact, dark glass on the
// homepage teaser) and every field needs to read correctly on either.
export default function ContactForm({ tone = "light" }: ContactFormProps) {
  const { status, fieldErrors, formError, handleSubmit } = useContactSubmit();
  const [serviceType, setServiceType] = useState("");

  if (status === "success") {
    return (
      <FormStatus status="success" message="Thanks for reaching out — our team will respond shortly." />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* text-slate-600, not the "Body Mid" slate-500 token — slate-500 on white measures
          4.43-4.48:1 under axe, just under the 4.5:1 AA threshold; slate-600 clears it. */}
      <p className={`text-sm font-light ${tone === "dark" ? "text-slate-400" : "text-slate-600"}`}>
        Share a few details and we will route you to the right lead.
      </p>

      {/* Spam honeypot — visually hidden (Tailwind's standard sr-only clip pattern, not
          display:none, since some bots skip that), removed from tab order too. */}
      <div aria-hidden className="sr-only">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Full name"
          name="name"
          tone={tone}
          required
          placeholder="Jane Doe"
          error={fieldErrors.name}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          tone={tone}
          required
          placeholder="jane@company.com"
          error={fieldErrors.email}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          tone={tone}
          required
          placeholder="PK (+92) 300 0000000"
          error={fieldErrors.phone}
        />
        <Select
          label="Budget Estimate"
          name="budgetEstimate"
          tone={tone}
          required
          options={BUDGETS}
          placeholder="Select your budget range"
          error={fieldErrors.budgetEstimate}
        />
      </div>

      <PillGroup
        label="Service Type"
        name="serviceType"
        tone={tone}
        required
        options={SERVICE_TYPES}
        value={serviceType}
        onChange={setServiceType}
        error={fieldErrors.serviceType}
      />

      <TextArea
        label="Project Description"
        name="projectDescription"
        tone={tone}
        required
        placeholder="A few lines on scope, timeline and budget"
        error={fieldErrors.projectDescription}
      />

      {formError && <FormStatus status="error" message={formError} />}

      <Button type="submit" variant="teal" size="md" icon disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Get Started"}
      </Button>
    </form>
  );
}
