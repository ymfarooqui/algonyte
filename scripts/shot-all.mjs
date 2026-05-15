import { chromium, devices } from "playwright";
import fs from "fs";

const pages = [
  ["/", "home"],
  ["/ai-receptionist", "ai-receptionist"],
  ["/lead-generator", "lead-generator"],
  ["/reputation-manager", "reputation-manager"],
  ["/seo", "seo"],
  ["/pricing", "pricing"],
  ["/founding", "founding"],
  ["/locations/macomb", "macomb"],
  ["/insights/car-hub-macomb-case-study", "case-study"],
  ["/about", "about"],
  ["/services", "services"],
  ["/book", "book"],
  ["/contact", "contact"],
];

const outDir = "/tmp/mobile-audit";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  ...devices["iPhone 13"],
  // Disable motion-triggered hiding by reducing motion preference
  reducedMotion: "reduce",
});
const page = await ctx.newPage();

const report = [];
for (const [path, name] of pages) {
  try {
    await page.goto("http://localhost:3000" + path, {
      waitUntil: "networkidle",
      timeout: 20000,
    });

    // Force-trigger whileInView animations: scroll to bottom, wait, scroll to top
    await page.evaluate(async () => {
      const h = document.documentElement.scrollHeight;
      const step = 400;
      for (let y = 0; y <= h; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 150));
      }
      // Wait for stagger animations to complete
      await new Promise((r) => setTimeout(r, 1500));
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 300));
    });

    await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: true });
    const dims = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      hasHOverflow: document.documentElement.scrollWidth > window.innerWidth,
      scrollHeight: document.documentElement.scrollHeight,
    }));
    report.push({ path, name, ...dims });
  } catch (e) {
    report.push({ path, name, error: e.message });
  }
}

await browser.close();
console.log(JSON.stringify(report, null, 2));
