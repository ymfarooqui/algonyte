import { chromium, devices } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({ ...devices["iPhone 13"] });
const page = await ctx.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
const sections = await page.evaluate(() => {
  const els = document.querySelectorAll("section, header, footer, main > *");
  return Array.from(els).map((el, i) => {
    const r = el.getBoundingClientRect();
    return {
      i,
      tag: el.tagName,
      cls: el.className?.toString?.()?.slice(0, 80),
      top: Math.round(r.top + window.scrollY),
      height: Math.round(r.height),
    };
  });
});
console.log(JSON.stringify(sections, null, 2));
await browser.close();
