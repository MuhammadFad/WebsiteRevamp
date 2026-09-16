import { NextResponse } from "next/server";
import { validate } from "@/lib/validate";

const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024; // 5MB, matches CAREERS_MAX_RESUME_SIZE_BYTES default

// Mirrors POST /api/v1/careers/apply from DEVELOPMENT MATERIAL/DevLogix_Backend_API_Contract.md
// — multipart/form-data, same field names, status codes, and error messages as the real
// backend, so this mock is a drop-in stand-in during local development.
export async function POST(request: Request) {
  const formData = await request.formData();
  const data = Object.fromEntries(
    Array.from(formData.entries()).filter(([, v]) => typeof v === "string")
  ) as Record<string, unknown>;

  const errors = validate(data, {
    name: { required: true, min: 2, max: 120, label: "Name" },
    email: { required: true, email: true, max: 254, label: "Email" },
    phone: { required: true, min: 7, max: 30, label: "Phone" },
    position: { required: true, min: 2, max: 160, label: "Position" },
    cover_letter: { max: 5000, label: "Cover letter" },
  });

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Invalid application fields", errors },
      { status: 400 }
    );
  }

  const resume = formData.get("resume");

  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ success: false, message: "Resume is required" }, { status: 400 });
  }

  if (!ACCEPTED_RESUME_TYPES.includes(resume.type)) {
    return NextResponse.json(
      { success: false, message: "Resume must be a PDF, DOC, or DOCX file" },
      { status: 400 }
    );
  }

  if (resume.size > MAX_RESUME_SIZE_BYTES) {
    return NextResponse.json(
      { success: false, message: "Resume exceeds the maximum allowed size" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      data: {
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        position: data.position,
        status: "new",
        created_at: new Date().toISOString(),
      },
    },
    { status: 201 }
  );
}
