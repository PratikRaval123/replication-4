const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const outDir = __dirname;
const assets = path.join(__dirname, "../public/assets");
fs.mkdirSync(assets, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await page.goto("https://priglasiabakirova.tilda.ws/duulatadema", {
    waitUntil: "networkidle",
    timeout: 90000,
  });
  await page.waitForTimeout(2500);

  await page.screenshot({
    path: path.join(outDir, "full-mobile.png"),
    fullPage: true,
  });

  const texts = await page.evaluate(() => {
    const skip = new Set(["SCRIPT", "STYLE", "NOSCRIPT"]);
    const out = [];
    document.querySelectorAll("body *").forEach((el) => {
      if (skip.has(el.tagName)) return;
      if (el.children.length) return;
      const t = (el.innerText || "").trim();
      if (t && t.length < 350) out.push(t);
    });
    return [...new Set(out)];
  });
  fs.writeFileSync(
    path.join(outDir, "texts.json"),
    JSON.stringify(texts, null, 2),
    "utf8",
  );

  const meta = await page.evaluate(() => {
    const body = getComputedStyle(document.body);
    const fonts = new Set();
    document.querySelectorAll("h1,h2,h3,p,span,div,a,button,label").forEach((el) => {
      const f = getComputedStyle(el).fontFamily;
      if (f) fonts.add(f.split(",")[0].replace(/["']/g, "").trim());
    });
    const imgs = [...document.images]
      .map((i) => ({
        src: i.currentSrc || i.src,
        w: i.naturalWidth,
        h: i.naturalHeight,
        alt: i.alt,
      }))
      .filter((i) => i.w > 40);
    const audios = [...document.querySelectorAll("audio")].map(
      (a) => a.src || a.currentSrc,
    );
    const links = [...document.querySelectorAll("a[href]")]
      .map((a) => ({ href: a.href, text: (a.innerText || "").trim() }))
      .filter((a) => a.href && !a.href.includes("tilda"));
    return {
      bg: body.backgroundColor,
      color: body.color,
      fonts: [...fonts],
      imgs,
      audios,
      links,
      title: document.title,
    };
  });
  fs.writeFileSync(
    path.join(outDir, "meta.json"),
    JSON.stringify(meta, null, 2),
    "utf8",
  );

  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const vh = 844;
  let y = 0;
  let i = 0;
  while (y < height && i < 14) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(350);
    await page.screenshot({
      path: path.join(outDir, `band-${String(i).padStart(2, "0")}.png`),
    });
    y += Math.floor(vh * 0.8);
    i += 1;
  }

  console.log(
    JSON.stringify(
      {
        title: meta.title,
        fonts: meta.fonts,
        imgs: meta.imgs.length,
        audios: meta.audios,
        height,
        bands: i,
        texts: texts.length,
      },
      null,
      2,
    ),
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
