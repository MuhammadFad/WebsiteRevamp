"use client";

import { useState } from "react";
import Button from "../ui/Button";
import TextField from "../ui/form/TextField";
import TextArea from "../ui/form/TextArea";
import Select from "../ui/form/Select";
import PillGroup from "../ui/form/PillGroup";
import FileUpload from "../ui/form/FileUpload";
import FormStatus from "../ui/form/FormStatus";
import { useFormSubmit } from "@/lib/useFormSubmit";

const REGIONS = ["Pakistan", "Middle East", "North America", "Europe", "Asia Pacific", "Other"];

// HANDOFF-AMBIGUOUS: the source form's "Position of Interest*" pills reused the client form's
// service categories verbatim (Software Development / Digital Transformation / AI & Data /
// UI/UX Design / Partnership) — not job roles (see content-contact.md flag #2). Replaced with
// actual application tracks.
const POSITIONS = ["Software Engineering", "AI & Data", "Product Design", "Internship Program", "Other"];

export default function CareersForm() {
  const { status, fieldErrors, formError, handleSubmit } = useFormSubmit("/api/careers");
  const [position, setPosition] = useState("");

  if (status === "success") {
    return (
      <FormStatus status="success" message="Thanks for applying — our talent team will be in touch." />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <p className="text-sm font-light text-slate-400">
        Share a few details and we&apos;ll connect you with the right team.
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
        {/* HANDOFF-AMBIGUOUS: relabeled from "Business email" — that reads oddly for an
            individual candidate rather than a company contact (content-contact.md flag #3). */}
        <TextField
          label="Email address"
          name="businessEmail"
          type="email"
          tone="dark"
          required
          placeholder="jane@email.com"
          error={fieldErrors.businessEmail}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField label="Phone" name="phone" type="tel" tone="dark" placeholder="PK (+92) 300 0000000" />
        {/* HANDOFF-AMBIGUOUS: placeholder fixed from the leftover "Company" text to an actual
            URL example (content-contact.md flag #1). */}
        <TextField
          label="LinkedIn / Portfolio URL"
          name="portfolioUrl"
          tone="dark"
          placeholder="linkedin.com/in/janedoe"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Select label="Region" name="region" tone="dark" options={REGIONS} placeholder="Select Region" />
        <FileUpload label="Resume / CV" name="resume" required error={fieldErrors.resume} />
      </div>

      <PillGroup
        label="Position of Interest"
        name="position"
        tone="dark"
        required
        options={POSITIONS}
        value={position}
        onChange={setPosition}
        error={fieldErrors.position}
      />

      <TextArea
        label="Tell us about yourself"
        name="about"
        tone="dark"
        required
        placeholder="A few sentences about your background and interest in this role"
        error={fieldErrors.about}
      />

      {formError && <FormStatus status="error" message={formError} />}

      {/* HANDOFF-AMBIGUOUS: "Initiate Alliance" is client/partnership copy, wrong tone for a
          job application (content-contact.md flag under Submit button) — replaced. */}
      <Button type="submit" variant="teal" size="md" icon disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
