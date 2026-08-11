import { chromium } from "playwright";

const OUT = "public/screenshots";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("https://app.roz-hr.com/", { waitUntil: "networkidle" });
await page.fill('input[type="email"]', "demo002@roz.demo");
await page.fill('input[type="password"]', "demo1234");
await page.click('button[type="submit"]');
await page.waitForURL("**/admin/dashboard", { timeout: 15000 });
await page.waitForFunction(
  () => !document.body.innerText.includes("Headcount\n0"),
  { timeout: 10000 }
).catch(() => {});
await page.waitForTimeout(1000);
await page.screenshot({ path: `${OUT}/dashboard.png` });
await browser.close();
console.log("done");
