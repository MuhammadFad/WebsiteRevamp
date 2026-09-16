import { CheckCircle2, AlertCircle } from "lucide-react";

export type FormStatusProps = {
  status: "success" | "error";
  message: string;
};

// Uses the design system's reserved success tokens (Teal Tint Light / Teal Border) exactly for
// their documented purpose: success states only.
export default function FormStatus({ status, message }: FormStatusProps) {
  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-xl border border-brand-teal-border bg-brand-teal-tint-light p-4 text-sm text-slate-800"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal-dark" aria-hidden />
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
    >
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-hidden />
      <p>{message}</p>
    </div>
  );
}
