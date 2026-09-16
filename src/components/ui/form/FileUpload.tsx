"use client";

import { useId, useState } from "react";
import { Upload, FileCheck2 } from "lucide-react";

export type FileUploadProps = {
  label: string;
  name: string;
  required?: boolean;
  accept?: string;
  error?: string;
};

// HANDOFF-AMBIGUOUS: no résumé/file-upload field existed anywhere in the job/internship
// export (see content-contact.md flag #4) despite this being a careers application form —
// added here since a working application form needs one.
export default function FileUpload({
  label,
  name,
  required,
  accept = ".pdf,.doc,.docx",
  error,
}: FileUploadProps) {
  const id = useId();
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-300">
        {label}
        {required && (
          <span aria-hidden className="text-brand-teal-dark">
            {" "}
            *
          </span>
        )}
      </label>
      <label
        htmlFor={id}
        className={`mt-2 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed px-4 py-3 text-sm transition-colors duration-300 ${
          error ? "border-red-500" : "border-white/20 hover:border-brand-teal"
        }`}
      >
        {fileName ? (
          <FileCheck2 className="h-4 w-4 shrink-0 text-brand-teal-hover" aria-hidden />
        ) : (
          <Upload className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
        )}
        <span className={fileName ? "text-white" : "text-slate-400"}>
          {fileName ?? "Upload your resume (PDF or Word)"}
        </span>
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        required={required}
        aria-invalid={!!error}
        className="sr-only"
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
      />
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
