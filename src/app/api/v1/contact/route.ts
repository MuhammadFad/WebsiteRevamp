import { NextResponse } from "next/server";
import { validate } from "@/lib/validate";

// Mirrors POST /api/v1/contact from DEVELOPMENT MATERIAL/DevLogix_Backend_API_Contract.md
// exactly (path, fields, status codes, response shape) so this mock is a drop-in stand-in for
// the real Express backend during local development — see src/lib/api/config.ts.
export async function POST(request: Request) {
  const data = (await request.json().catch(() => ({}))) as Record<string, unknown>;

  // Honeypot: a filled `website` field means a bot filled every input. Respond exactly like a
  // real success so the bot doesn't learn it was caught, but don't actually process anything.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return NextResponse.json({ success: true, message: "Request completed successfully.", data: {} });
  }

  const errors = validate(data, {
    name: { required: true, min: 1, max: 100, label: "Name" },
    email: { required: true, email: true, max: 254, label: "Email" },
    phone: { required: true, min: 1, max: 30, label: "Phone" },
    serviceType: { required: true, min: 1, max: 100, label: "Service type" },
    budgetEstimate: { required: true, min: 1, max: 100, label: "Budget estimate" },
    projectDescription: { required: true, min: 10, max: 5000, label: "Project description" },
  });

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Request could not be completed.", errors },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true, message: "Request completed successfully.", data: {} });
}
