import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const PAGES = [
  "/",
  "/about",
  "/industries",
  "/services",
  "/services/artificial-intelligence",
  "/services/cloud-solutions",
  "/services/digital-transformation",
  "/services/software-development",
  "/services/ui-ux-design",
  "/blog",
  "/blog/why-digital-transformations-fail",
  "/contact",
  "/careers",
];

for (const path of PAGES) {
  test(`${path || "/"} has no serious or critical axe violations`, async ({ page }) => {
    // Reveal.tsx fades sections in via Framer Motion's whileInView (0.6s). networkidle doesn't
    // wait for that, so axe can catch content mid-fade — partial opacity genuinely lowers
    // rendered contrast below what the settled color passes at, causing flaky failures
    // unrelated to the actual token (seen intermittently on /contact and /careers). Emulating
    // prefers-reduced-motion makes Reveal skip the animation and render at full opacity
    // immediately (see Reveal.tsx) — the same code path a reduced-motion user gets, and the
    // correct one for an accessibility check to exercise anyway.
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const seriousOrWorse = results.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical"
    );

    if (seriousOrWorse.length > 0) {
      console.log(JSON.stringify(seriousOrWorse, null, 2));
    }

    expect(seriousOrWorse).toEqual([]);
  });
}
