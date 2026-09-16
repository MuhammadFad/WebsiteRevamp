import { test, expect } from "@playwright/test";

const PAGES = ["/", "/about", "/industries", "/contact", "/careers"];

test.describe("Homepage", () => {
  test("loads and renders the hero", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page).toHaveTitle(/DevLogix/);
  });
});

test.describe("Every page", () => {
  for (const path of PAGES) {
    test(`${path || "/"} returns 200 and has exactly one h1`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
    });
  }
});

test.describe("Navigation links resolve without 404s", () => {
  test("header nav links all resolve", async ({ page, request }) => {
    await page.goto("/");
    const header = page.locator("header");
    const hrefs = await header.locator("a[href]").evaluateAll((links) =>
      links.map((l) => (l as HTMLAnchorElement).getAttribute("href")).filter((h): h is string => !!h)
    );

    const internal = [...new Set(hrefs)].filter((h) => h.startsWith("/"));
    for (const href of internal) {
      const path = href.split("#")[0] || "/";
      const res = await request.get(path);
      expect(res.status(), `${href} should not 404`).toBeLessThan(400);
    }
  });

  test("footer links all resolve", async ({ page, request }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    const hrefs = await footer.locator("a[href]").evaluateAll((links) =>
      links
        .map((l) => (l as HTMLAnchorElement).getAttribute("href"))
        .filter((h): h is string => !!h && !h.startsWith("http"))
    );

    const internal = [...new Set(hrefs)];
    for (const href of internal) {
      const path = href.split("#")[0] || "/";
      const res = await request.get(path);
      expect(res.status(), `${href} should not 404`).toBeLessThan(400);
    }
  });

  test("/careers resolves directly without redirecting to home", async ({ page }) => {
    const response = await page.goto("/careers");
    expect(response?.status()).toBe(200);
    expect(new URL(page.url()).pathname).toBe("/careers");
  });
});
