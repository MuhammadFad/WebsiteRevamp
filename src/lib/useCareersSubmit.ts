"use client";

import { useState, type FormEvent } from "react";
import { submitCareersApplication } from "./api/careers";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/** Drives the careers application form against POST {API_BASE_URL}/careers/apply
 * (multipart/form-data — required because it carries the resume file). Field names match the
 * backend contract exactly: name, email, phone, position, cover_letter, resume. */
export function useCareersSubmit() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFormError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await submitCareersApplication(formData);

      if (!result.success) {
        const flat = Object.fromEntries(
          Object.entries(result.errors ?? {}).map(([field, messages]) => [field, messages[0]])
        );
        setFieldErrors(flat);
        setFormError(result.message);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setFormError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  return { status, fieldErrors, formError, handleSubmit };
}
