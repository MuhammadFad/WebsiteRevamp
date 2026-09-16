export type ValidationRule = {
  required?: boolean;
  email?: boolean;
  min?: number;
  max?: number;
  label: string;
};

export type ValidationSchema = Record<string, ValidationRule>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Matches the backend contract's error shape: { field: [message, ...] }. */
export function validate(
  data: Record<string, unknown>,
  schema: ValidationSchema
): Record<string, string[]> {
  const errors: Record<string, string[]> = {};

  for (const [field, rule] of Object.entries(schema)) {
    const value = typeof data[field] === "string" ? (data[field] as string).trim() : "";
    const fieldErrors: string[] = [];

    if (rule.required && !value) {
      fieldErrors.push(`${rule.label} is required`);
    } else if (value) {
      if (rule.email && !EMAIL_RE.test(value)) {
        fieldErrors.push("Valid email is required");
      }
      if (rule.min && value.length < rule.min) {
        fieldErrors.push(`${rule.label} must be at least ${rule.min} characters`);
      }
      if (rule.max && value.length > rule.max) {
        fieldErrors.push(`${rule.label} must be at most ${rule.max} characters`);
      }
    }

    if (fieldErrors.length > 0) errors[field] = fieldErrors;
  }

  return errors;
}
