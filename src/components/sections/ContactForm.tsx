"use client";

import { useState } from "react";
import Button from "../ui/Button";
import TextField from "../ui/form/TextField";
import TextArea from "../ui/form/TextArea";
import Select from "../ui/form/Select";
import PillGroup from "../ui/form/PillGroup";
import FormStatus from "../ui/form/FormStatus";
import { useFormSubmit } from "@/lib/useFormSubmit";

const REGIONS = ["Pakistan", "Middle East", "North America", "Europe", "Asia Pacific", "Other"];

const LOOKING_FOR = [
  "Software Development",
  "Digital Transformation",
  "AI & Data",
  "UI/UX Design",
  "Partnership",
];

export default function ContactForm() {
  const { status, fieldErrors, formError, handleSubmit } = useFormSubmit("/api/contact");
  const [lookingFor, setLookingFor] = useState("");

  if (status === "success") {
    return (
      <FormStatus status="success" message="Thanks for reaching out — our team will respond shortly." />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <p className="text-sm font-light text-slate-400">
        Share a few details and we will route you to the right lead.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Full name"
          name="fullName"
          tone="dark"
          required
          placeholder="Jane Doe"
          error={fieldErrors.fullName}
        />
        <TextField
          label="Business email"
          name="businessEmail"
          type="email"
          tone="dark"
          required
          placeholder="jane@company.com"
          error={fieldErrors.businessEmail}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField label="Phone" name="phone" type="tel" tone="dark" placeholder="PK (+92) 300 0000000" />
        <TextField
          label="Company name"
          name="companyName"
          tone="dark"
          required
          placeholder="Company"
          error={fieldErrors.companyName}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField label="Company website" name="companyWebsite" tone="dark" placeholder="company.com" />
        <Select label="Region" name="region" tone="dark" options={REGIONS} placeholder="Select Region" />
      </div>

      <PillGroup
        label="I am looking for"
        name="lookingFor"
        tone="dark"
        required
        options={LOOKING_FOR}
        value={lookingFor}
        onChange={setLookingFor}
        error={fieldErrors.lookingFor}
      />

      <TextArea
        label="Tell us more about your project"
        name="projectDetails"
        tone="dark"
        required
        placeholder="A few lines on scope, timeline and budget"
        error={fieldErrors.projectDetails}
      />

      {formError && <FormStatus status="error" message={formError} />}

      <Button type="submit" variant="teal" size="md" icon disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Initiate Alliance"}
      </Button>
    </form>
  );
}
