import { NextResponse } from "next/server";
import { validate } from "@/lib/validate";

export async function POST(request: Request) {
  const data = (await request.json().catch(() => ({}))) as Record<string, unknown>;

  const fieldErrors = validate(data, {
    fullName: { required: true, label: "Full name" },
    businessEmail: { required: true, email: true, label: "Email" },
    position: { required: true, label: "Position of interest" },
    about: { required: true, label: "About you" },
  });

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { message: "Please fix the highlighted fields.", fieldErrors },
      { status: 422 }
    );
  }

  return NextResponse.json({ message: "Thanks for applying — our talent team will be in touch." });
}
