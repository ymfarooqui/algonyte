import { chromium, devices } from "playwright";

const url = process.argv[2];
const selector = process.argv[3];
const outPath = process.argv[4] || "/tmp/el.png";

const browser = await chromium.launch();
const ctx = await browser.newContext({ ...devices["iPhone 13"] });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle" });
const el = await page.locator(selector).first();
await el.screenshot({ path: outPath });
await browser.close();
console.log("ok");
