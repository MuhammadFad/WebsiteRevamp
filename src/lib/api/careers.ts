import { API_BASE_URL } from "./config";
import type { ApiResult } from "./types";

export async function submitCareersApplication(formData: FormData): Promise<ApiResult> {
  // Do not set Content-Type manually — the browser adds the multipart boundary itself
  // (per the contract's explicit note).
  const res = await fetch(`${API_BASE_URL}/careers/apply`, {
    method: "POST",
    body: formData,
  });
  return (await res.json()) as ApiResult;
}
