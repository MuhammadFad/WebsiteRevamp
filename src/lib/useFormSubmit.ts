"use client";

import { useState, type FormEvent } from "react";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export type FieldErrors = Record<string, string>;

export function useFormSubmit(endpoint: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFormError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    // File values aren't JSON-serializable (and this mock endpoint has nowhere to store bytes
    // anyway) — send the filename as a string reference instead of dropping/crashing on it.
    const data = Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([key, value]) => [
        key,
        value instanceof File ? value.name : value,
      ])
    );

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (body.fieldErrors) setFieldErrors(body.fieldErrors);
        setFormError(body.message ?? "Something went wrong. Please try again.");
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

  const reset = () => {
    setStatus("idle");
    setFieldErrors({});
    setFormError(null);
  };

  return { status, fieldErrors, formError, handleSubmit, reset };
}
