import { test, expect } from "@playwright/test";

test.describe("Contact form (/contact)", () => {
  test("shows validation errors on empty submit", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: /Initiate Alliance/i }).click();

    await expect(page.getByText("Full name is required.")).toBeVisible();
    await expect(page.getByText("Business email is required.")).toBeVisible();
    await expect(page.getByText("Please fix the highlighted fields.")).toBeVisible();
  });

  test("submits successfully with valid data", async ({ page }) => {
    await page.goto("/contact");

    await page.fill('input[name="fullName"]', "Test User");
    await page.fill('input[name="businessEmail"]', "test@example.com");
    await page.fill('input[name="companyName"]', "Acme Inc");
    await page.getByRole("radio", { name: "AI & Data" }).click();
    await page.fill('textarea[name="projectDetails"]', "We need an AI-powered analytics platform.");

    await page.getByRole("button", { name: /Initiate Alliance/i }).click();

    await expect(page.getByRole("status")).toContainText("Thanks for reaching out");
  });

  test("rejects an invalid email", async ({ page }) => {
    await page.goto("/contact");
    await page.fill('input[name="fullName"]', "Test User");
    await page.fill('input[name="businessEmail"]', "not-an-email");
    await page.fill('input[name="companyName"]', "Acme Inc");
    await page.getByRole("radio", { name: "AI & Data" }).click();
    await page.fill('textarea[name="projectDetails"]', "Details");

    await page.getByRole("button", { name: /Initiate Alliance/i }).click();
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  });
});

test.describe("Careers application form (/careers)", () => {
  test("shows validation errors on empty submit", async ({ page }) => {
    await page.goto("/careers");
    await page.getByRole("button", { name: /Submit Application/i }).click();

    await expect(page.getByText("Full name is required.")).toBeVisible();
    await expect(page.getByText("Please fix the highlighted fields.")).toBeVisible();
  });

  test("submits successfully with valid data", async ({ page }) => {
    await page.goto("/careers");

    await page.fill('input[name="fullName"]', "Test Candidate");
    await page.fill('input[name="businessEmail"]', "candidate@example.com");
    await page.setInputFiles('input[name="resume"]', {
      name: "resume.pdf",
      mimeType: "application/pdf",
      buffer: Buffer.from("%PDF-1.4 test"),
    });
    await page.getByRole("radio", { name: "Software Engineering" }).click();
    await page.fill('textarea[name="about"]', "Backend engineer with 5 years of experience.");

    await page.getByRole("button", { name: /Submit Application/i }).click();

    await expect(page.getByRole("status")).toContainText("Thanks for applying");
  });
});
