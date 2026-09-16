import { test, expect } from "@playwright/test";

const PAGES = [
  "/",
  "/about",
  "/industries",
  "/services",
  "/services/artificial-intelligence",
  "/services/software-development",
  "/services/ui-ux-design",
  "/services/cloud-solutions",
  "/services/digital-transformation",
  "/blog",
  "/contact",
  "/careers",
];

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
    test(`${path} returns 200 and has exactly one h1`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
    });

    // Regression check for the double-header/footer bug found in the services pages (each
    // rendered its own Navbar/FooterSection on top of the root layout's) — the page should have
    // exactly one <header> and one site <footer> as a direct child of <body> (the root layout's).
    // Scoped to `body >` because a couple of pages legitimately use a nested <footer> for
    // blockquote citations, which is valid semantic HTML and not the bug this guards against.
    test(`${path} has exactly one header and one site footer`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("header")).toHaveCount(1);
      await expect(page.locator("body > footer")).toHaveCount(1);
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

  test("services dropdown links all resolve", async ({ page, request }) => {
    await page.goto("/");
    // Hover to reveal the dropdown, then collect its links (desktop nav only).
    await page.getByRole("link", { name: "Services", exact: true }).hover();
    const dropdownLinks = page.locator('nav[aria-label="Primary"] a[href^="/services/"]');
    const hrefs = await dropdownLinks.evaluateAll((links) =>
      links.map((l) => (l as HTMLAnchorElement).getAttribute("href")).filter((h): h is string => !!h)
    );
    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of [...new Set(hrefs)]) {
      const res = await request.get(href);
      expect(res.status(), `${href} should not 404`).toBeLessThan(400);
    }
  });

  test("/careers resolves directly without redirecting to home", async ({ page }) => {
    const response = await page.goto("/careers");
    expect(response?.status()).toBe(200);
    expect(new URL(page.url()).pathname).toBe("/careers");
  });

  test("/services/unknown-slug 404s cleanly", async ({ page }) => {
    const response = await page.goto("/services/not-a-real-service");
    expect(response?.status()).toBe(404);
  });

  // Full-site crawl: every internal <a href> found on every real page must resolve without a
  // client error, covering card CTAs, "read more" links, and anything else the narrower checks
  // above don't specifically target (this is what actually caught the /services page's
  // "Latest Insights" links pointing at a stale /insights/* prefix instead of /blog/*).
  test("every internal link on every page resolves", async ({ page, request }) => {
    const found = new Map<string, string>(); // href -> first page it was seen on

    for (const path of PAGES) {
      await page.goto(path);
      const hrefs = await page.locator("a[href]").evaluateAll((links) =>
        links.map((l) => (l as HTMLAnchorElement).getAttribute("href")).filter((h): h is string => !!h)
      );
      for (const href of hrefs) {
        if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
        const clean = href.split("#")[0] || "/";
        if (!found.has(clean)) found.set(clean, path);
      }
    }

    for (const [href, sourcePage] of found) {
      const res = await request.get(href);
      expect(res.status(), `${href} (linked from ${sourcePage}) should not 404`).toBeLessThan(400);
    }
  });
});
