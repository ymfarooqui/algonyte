import { chromium } from "playwright";

const paths = [
  "/",
  "/services",
  "/ai-receptionist",
  "/lead-generator",
  "/reputation-manager",
  "/seo",
  "/founding",
  "/pricing",
  "/book",
  "/contact",
  "/about",
  "/locations/chicago",
  "/locations/macomb",
  "/industries/auto-dealerships",
  "/insights/car-hub-macomb-case-study",
  "/privacy",
  "/terms",
];

const base = process.env.BASE_URL || "http://localhost:3000";
const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();

const failures = [];
let totalBlocks = 0;

for (const path of paths) {
  try {
    const res = await page.goto(base + path, { waitUntil: "domcontentloaded", timeout: 20000 });
    if (!res || res.status() >= 400) {
      failures.push({ path, error: `HTTP ${res?.status()}` });
      continue;
    }
    const blocks = await page.$$eval(
      'script[type="application/ld+json"]',
      (els) => els.map((el) => el.textContent || ""),
    );
    if (blocks.length === 0) {
      failures.push({ path, error: "no JSON-LD blocks found" });
      continue;
    }
    for (let i = 0; i < blocks.length; i++) {
      totalBlocks++;
      const raw = blocks[i];
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (e) {
        failures.push({ path, block: i, error: `invalid JSON: ${e.message}` });
        continue;
      }
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        if (!item || typeof item !== "object") {
          failures.push({ path, block: i, error: "non-object JSON-LD" });
          continue;
        }
        if (item["@context"] !== "https://schema.org") {
          failures.push({ path, block: i, error: `bad @context: ${item["@context"]}` });
        }
        if (!item["@type"]) {
          failures.push({ path, block: i, error: "missing @type" });
        }
      }
    }
  } catch (e) {
    failures.push({ path, error: e.message });
  }
}

await browser.close();

console.log(`Checked ${paths.length} pages, ${totalBlocks} JSON-LD blocks.`);
if (failures.length > 0) {
  console.error(`\nSchema validation failed: ${failures.length} issue(s)`);
  for (const f of failures) {
    console.error(`  ${f.path}${f.block !== undefined ? `[block ${f.block}]` : ""}: ${f.error}`);
  }
  process.exit(1);
}
console.log("All JSON-LD blocks valid.");
