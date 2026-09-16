import { test, expect } from "@playwright/test";

const PAGES = ["/", "/about", "/industries", "/contact", "/careers"];
const VIEWPORTS = [
  { name: "mobile", width: 375, height: 800 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

for (const path of PAGES) {
  test.describe(`Responsive: ${path || "/"}`, () => {
    for (const viewport of VIEWPORTS) {
      test(`no horizontal overflow at ${viewport.name} (${viewport.width}px)`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(path);
        await page.waitForLoadState("networkidle");

        const { scrollWidth, clientWidth } = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
        }));

        expect(scrollWidth, `page scrollWidth (${scrollWidth}) should not exceed viewport (${clientWidth})`).toBeLessThanOrEqual(
          clientWidth + 1 // 1px tolerance for scrollbar rounding
        );
      });
    }
  });
}
