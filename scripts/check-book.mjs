import { chromium, devices } from "playwright";

const browser = await chromium.launch();

// Mobile
const mobile = await browser.newContext({ ...devices["iPhone 13"] });
const mPage = await mobile.newPage();
await mPage.goto("http://localhost:3000/book", { waitUntil: "load" });
// Wait extra for lazy iframe
await mPage.waitForTimeout(5000);
const mHeight = await mPage.evaluate(() => document.documentElement.scrollHeight);
const mIframeDims = await mPage.evaluate(() => {
  const f = document.querySelector("#book-call-widget");
  if (!f) return null;
  const r = f.getBoundingClientRect();
  return { w: Math.round(r.width), h: Math.round(r.height), src: f.src };
});

// Desktop
const desktop = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const dPage = await desktop.newPage();
await dPage.goto("http://localhost:3000/book", { waitUntil: "load" });
await dPage.waitForTimeout(5000);
const dHeight = await dPage.evaluate(() => document.documentElement.scrollHeight);
const dIframeDims = await dPage.evaluate(() => {
  const f = document.querySelector("#book-call-widget");
  if (!f) return null;
  const r = f.getBoundingClientRect();
  return { w: Math.round(r.width), h: Math.round(r.height) };
});

console.log("Mobile:", { pageHeight: mHeight, iframe: mIframeDims });
console.log("Desktop:", { pageHeight: dHeight, iframe: dIframeDims });

await browser.close();
