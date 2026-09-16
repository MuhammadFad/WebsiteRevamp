import { test, expect } from "@playwright/test";

test.describe("Contact form (/contact)", () => {
  test("shows validation errors on empty submit", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: /Get Started/i }).click();

    await expect(page.getByText("Name is required")).toBeVisible();
    await expect(page.getByText("Email is required")).toBeVisible();
    await expect(page.getByText("Request could not be completed.")).toBeVisible();
  });

  test("submits successfully with valid data", async ({ page }) => {
    await page.goto("/contact");

    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="phone"]', "+92 300 1234567");
    await page.getByRole("radio", { name: "AI & Data" }).click();
    await page.locator('select[name="budgetEstimate"]').selectOption({ label: "$10k – $50k" });
    await page.fill(
      'textarea[name="projectDescription"]',
      "We need an AI-powered analytics platform for our operations team."
    );

    await page.getByRole("button", { name: /Get Started/i }).click();

    await expect(page.getByRole("status")).toContainText("Thanks for reaching out");
  });

  test("rejects an invalid email", async ({ page }) => {
    await page.goto("/contact");
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "not-an-email");
    await page.fill('input[name="phone"]', "+92 300 1234567");
    await page.getByRole("radio", { name: "AI & Data" }).click();
    await page.locator('select[name="budgetEstimate"]').selectOption({ label: "$10k – $50k" });
    await page.fill('textarea[name="projectDescription"]', "Enough detail to pass length checks.");

    await page.getByRole("button", { name: /Get Started/i }).click();
    await expect(page.getByText("Valid email is required")).toBeVisible();
  });

  test("honeypot field is present but hidden from view and tab order", async ({ page }) => {
    await page.goto("/contact");
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toBeAttached();
    await expect(honeypot).toHaveAttribute("tabindex", "-1");

    // The sr-only wrapper's own box is what's actually clipped to 1x1px — an unstyled <input>
    // inside it keeps its natural layout size in the DOM (that's normal; overflow:hidden on the
    // ancestor clips what's painted, not the descendant's own bounding rect), so assert on the
    // wrapper rather than the input itself.
    const wrapper = page.locator('input[name="website"]').locator("xpath=..");
    const box = await wrapper.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeLessThanOrEqual(1);
    expect(box!.height).toBeLessThanOrEqual(1);
  });
});

test.describe("Careers application form (/careers)", () => {
  test("shows validation errors on empty submit", async ({ page }) => {
    await page.goto("/careers");
    await page.getByRole("button", { name: /Submit Application/i }).click();

    await expect(page.getByText("Name is required")).toBeVisible();
    await expect(page.getByText("Invalid application fields")).toBeVisible();
  });

  test("submits successfully with valid data", async ({ page }) => {
    await page.goto("/careers");

    await page.fill('input[name="name"]', "Test Candidate");
    await page.fill('input[name="email"]', "candidate@example.com");
    await page.fill('input[name="phone"]', "+92 300 1234567");
    await page.getByRole("radio", { name: "Software Engineering" }).click();
    await page.setInputFiles('input[name="resume"]', {
      name: "resume.pdf",
      mimeType: "application/pdf",
      buffer: Buffer.from("%PDF-1.4 test"),
    });
    await page.fill('textarea[name="cover_letter"]', "Backend engineer with 5 years of experience.");

    await page.getByRole("button", { name: /Submit Application/i }).click();

    await expect(page.getByRole("status")).toContainText("Thanks for applying");
  });

  test("rejects a non-resume file type", async ({ page }) => {
    await page.goto("/careers");

    await page.fill('input[name="name"]', "Test Candidate");
    await page.fill('input[name="email"]', "candidate@example.com");
    await page.fill('input[name="phone"]', "+92 300 1234567");
    await page.getByRole("radio", { name: "AI & Data" }).click();
    await page.setInputFiles('input[name="resume"]', {
      name: "resume.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("just text"),
    });

    await page.getByRole("button", { name: /Submit Application/i }).click();
    await expect(page.getByText(/Resume must be a PDF, DOC, or DOCX file/i)).toBeVisible();
  });
});
