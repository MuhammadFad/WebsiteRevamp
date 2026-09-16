"use client";

import Button from "../ui/Button";
import TextField from "../ui/form/TextField";
import TextArea from "../ui/form/TextArea";
import Select from "../ui/form/Select";
import Checkbox from "../ui/form/Checkbox";
import FormStatus from "../ui/form/FormStatus";
import { useFormSubmit } from "@/lib/useFormSubmit";

const SERVICES = [
  "AI Transformation",
  "Data and Analytics",
  "Cloud Solutions",
  "Digital Engineering",
  "UI/UX Design",
  "Not sure yet",
];

const BUDGETS = ["Under $10k", "$10k – $50k", "$50k – $150k", "$150k+", "Not sure yet"];

export default function LeadForm() {
  const { status, fieldErrors, formError, handleSubmit } = useFormSubmit("/api/leads");

  if (status === "success") {
    return <FormStatus status="success" message="Thanks — we'll be in touch within 24 hours." />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Name"
          name="name"
          tone="dark"
          required
          placeholder="Your full name"
          error={fieldErrors.name}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          tone="dark"
          required
          placeholder="your@email.com"
          error={fieldErrors.email}
        />
      </div>

      <TextField
        label="Phone Number"
        name="phone"
        type="tel"
        tone="dark"
        placeholder="Your phone number"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Select
          label="Select Service"
          name="service"
          tone="dark"
          required
          options={SERVICES}
          placeholder="Choose a service..."
          error={fieldErrors.service}
        />
        <Select
          label="What Is Your Budget?"
          name="budget"
          tone="dark"
          options={BUDGETS}
          placeholder="Select your budget range"
        />
      </div>

      <TextArea
        label="Project Description"
        name="projectDescription"
        tone="dark"
        required
        rows={4}
        placeholder="Briefly describe your project or goals..."
        error={fieldErrors.projectDescription}
      />

      <Checkbox
        name="agree"
        tone="dark"
        label="I agree to be contacted by DevLogix about my project (optional)"
      />

      {formError && <FormStatus status="error" message={formError} />}

      <Button type="submit" variant="dark" size="md" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Get Started"}
      </Button>
    </form>
  );
}
