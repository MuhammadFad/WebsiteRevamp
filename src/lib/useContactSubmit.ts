"use client";

import { useState, type FormEvent } from "react";
import { submitContact } from "./api/contact";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/** Drives the contact form against POST {API_BASE_URL}/contact (mock or real backend — see
 * src/lib/api/config.ts). Field names match the backend contract exactly. */
export function useContactSubmit() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFormError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const result = await submitContact({
        name: String(data.name ?? ""),
        email: String(data.email ?? ""),
        phone: String(data.phone ?? ""),
        serviceType: String(data.serviceType ?? ""),
        budgetEstimate: String(data.budgetEstimate ?? ""),
        projectDescription: String(data.projectDescription ?? ""),
        website: String(data.website ?? ""), // honeypot — always empty for real users
      });

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
