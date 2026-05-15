import { chromium, devices } from "playwright";

const url = process.argv[2] || "http://localhost:3000/founding";
const outPath = process.argv[3] || "/tmp/shot.png";

const browser = await chromium.launch();
const ctx = await browser.newContext({ ...devices["iPhone 13"] });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.screenshot({ path: outPath, fullPage: true });
const dims = await page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  viewportWidth: window.innerWidth,
  scrollHeight: document.documentElement.scrollHeight,
}));
console.log(JSON.stringify(dims));
await browser.close();
