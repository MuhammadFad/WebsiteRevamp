export type ValidationRule = {
  required?: boolean;
  email?: boolean;
  label: string;
};

export type ValidationSchema = Record<string, ValidationRule>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validate(
  data: Record<string, unknown>,
  schema: ValidationSchema
): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const [field, rule] of Object.entries(schema)) {
    const value = typeof data[field] === "string" ? (data[field] as string).trim() : "";

    if (rule.required && !value) {
      errors[field] = `${rule.label} is required.`;
      continue;
    }

    if (value && rule.email && !EMAIL_RE.test(value)) {
      errors[field] = `Enter a valid email address.`;
    }
  }

  return errors;
}
