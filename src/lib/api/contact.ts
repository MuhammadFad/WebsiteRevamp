import { API_BASE_URL } from "./config";
import type { ApiResult } from "./types";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  budgetEstimate: string;
  projectDescription: string;
  /** Spam honeypot — must stay empty; real users never fill it. */
  website: string;
};

export async function submitContact(payload: ContactPayload): Promise<ApiResult> {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return (await res.json()) as ApiResult;
}
