import { NextResponse } from "next/server";
import { validate } from "@/lib/validate";

// HANDOFF-AMBIGUOUS: the MERN backend is described as "largely pre-existing" and out of scope
// here, so this is a real, working Next.js Route Handler that validates input and returns a
// proper success/error response — not a fake client-only submit. Wire it to the actual backend
// (or a Mongo collection) when that service is available; the request/response contract below
// is what the client already expects.
export async function POST(request: Request) {
  const data = (await request.json().catch(() => ({}))) as Record<string, unknown>;

  const fieldErrors = validate(data, {
    name: { required: true, label: "Name" },
    email: { required: true, email: true, label: "Email" },
    service: { required: true, label: "Service" },
    projectDescription: { required: true, label: "Project description" },
  });

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { message: "Please fix the highlighted fields.", fieldErrors },
      { status: 422 }
    );
  }

  return NextResponse.json({ message: "Thanks — we'll be in touch within 24 hours." });
}
