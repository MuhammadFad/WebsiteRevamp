"use client";

import { useState } from "react";
import Button from "../ui/Button";
import TextField from "../ui/form/TextField";
import TextArea from "../ui/form/TextArea";
import PillGroup from "../ui/form/PillGroup";
import FileUpload from "../ui/form/FileUpload";
import FormStatus from "../ui/form/FormStatus";
import { useCareersSubmit } from "@/lib/useCareersSubmit";

// Real job-application tracks (the source Figma export reused the client form's service
// categories here verbatim — not job roles — see last session's notes; this list was already
// corrected).
const POSITIONS = ["Software Engineering", "AI & Data", "Product Design", "Internship Program", "Other"];

export default function CareersForm() {
  const { status, fieldErrors, formError, handleSubmit } = useCareersSubmit();
  const [position, setPosition] = useState("");

  if (status === "success") {
    return (
      <FormStatus status="success" message="Thanks for applying — our talent team will be in touch." />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <p className="text-sm font-light text-slate-500">
        Share a few details and we&apos;ll connect you with the right team.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Full name"
          name="name"
          required
          placeholder="Jane Doe"
          error={fieldErrors.name}
        />
        <TextField
          label="Email address"
          name="email"
          type="email"
          required
          placeholder="jane@email.com"
          error={fieldErrors.email}
        />
      </div>

      <TextField
        label="Phone"
        name="phone"
        type="tel"
        required
        placeholder="PK (+92) 300 0000000"
        error={fieldErrors.phone}
      />

      <PillGroup
        label="Position of Interest"
        name="position"
        required
        options={POSITIONS}
        value={position}
        onChange={setPosition}
        error={fieldErrors.position}
      />

      <FileUpload
        label="Resume / CV"
        name="resume"
        required
        accept=".pdf,.doc,.docx"
        error={fieldErrors.resume}
      />

      <TextArea
        label="Cover Letter (optional)"
        name="cover_letter"
        placeholder="A few sentences about your background and interest in this role"
        error={fieldErrors.cover_letter}
      />

      {formError && <FormStatus status="error" message={formError} />}

      <Button type="submit" variant="teal" size="md" icon disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
