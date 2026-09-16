import { describe, expect, it } from "vitest";
import { validate } from "./validate";

describe("validate", () => {
  it("returns no errors when all rules pass", () => {
    const errors = validate(
      { name: "Jane Doe", email: "jane@example.com" },
      {
        name: { required: true, label: "Name" },
        email: { required: true, email: true, label: "Email" },
      }
    );

    expect(errors).toEqual({});
  });

  it("flags a missing required field", () => {
    const errors = validate({ name: "" }, { name: { required: true, label: "Name" } });

    expect(errors.name).toEqual(["Name is required"]);
  });

  it("treats a whitespace-only value as missing", () => {
    const errors = validate({ name: "   " }, { name: { required: true, label: "Name" } });

    expect(errors.name).toEqual(["Name is required"]);
  });

  it("flags an invalid email without also flagging it as missing", () => {
    const errors = validate(
      { email: "not-an-email" },
      { email: { required: true, email: true, label: "Email" } }
    );

    expect(errors.email).toEqual(["Valid email is required"]);
  });

  it("flags a value shorter than the minimum length", () => {
    const errors = validate(
      { description: "too short" },
      { description: { required: true, min: 10, label: "Description" } }
    );

    expect(errors.description).toEqual(["Description must be at least 10 characters"]);
  });

  it("flags a value longer than the maximum length", () => {
    const errors = validate(
      { name: "a".repeat(101) },
      { name: { required: true, max: 100, label: "Name" } }
    );

    expect(errors.name).toEqual(["Name must be at most 100 characters"]);
  });

  it("skips min/max/email checks on an optional field left empty", () => {
    const errors = validate(
      {},
      { website: { email: true, min: 5, label: "Website" } }
    );

    expect(errors).toEqual({});
  });

  it("ignores non-string values as if the field were empty", () => {
    const errors = validate(
      { name: 42 },
      { name: { required: true, label: "Name" } }
    );

    expect(errors.name).toEqual(["Name is required"]);
  });
});
