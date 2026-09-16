import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins plain class names", () => {
    expect(cn("flex", "items-center")).toBe("flex items-center");
  });

  it("drops falsy values", () => {
    expect(cn("flex", false, undefined, null, "gap-2")).toBe("flex gap-2");
  });

  it("resolves conflicting Tailwind utilities to the last one", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("lets a caller-provided className override a default", () => {
    expect(cn("bg-white text-slate-900", "bg-brand-navy")).toBe("text-slate-900 bg-brand-navy");
  });
});
