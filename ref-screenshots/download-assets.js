const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const assets = path.join(__dirname, "../public/assets");
fs.mkdirSync(assets, { recursive: true });

const files = [
  {
    url: "https://static.tildacdn.one/tild6432-6331-4434-b363-316232633036/WhatsApp_Image_2026-.jpeg",
    name: "hero-couple.jpg",
  },
  {
    url: "https://static.tildacdn.one/tild3735-3232-4037-a666-663633643532/handsonhands.jpeg",
    name: "photo-hands-ring.jpg",
  },
  {
    url: "https://static.tildacdn.one/tild6338-6632-4037-a538-336238376562/handsbarely.jpeg",
    name: "photo-hands-close.jpg",
  },
  {
    url: "https://static.tildacdn.one/tild3666-6337-4439-a531-386632343932/IMAGE_2026-03-11_124.jpg",
    name: "photo-extra.jpg",
  },
  {
    url: "https://static.tildacdn.one/tild3433-3338-4337-b337-646234326330/4029084.png",
    name: "icon-map.png",
  },
  {
    url: "https://static.tildacdn.one/tild6631-3934-4337-a162-363833646539/375.png",
    name: "icon-instagram.png",
  },
  {
    url: "https://static.tildacdn.one/tild6661-3630-4639-a436-316565356532/WhatsAppsvg.webp",
    name: "icon-whatsapp.webp",
  },
  {
    url: "https://static.tildacdn.one/tild6233-6661-4031-b732-633933353163/Instagram_logo_2022s.webp",
    name: "icon-instagram-color.webp",
  },
  {
    url: "https://static.tildacdn.one/tild3461-6238-4337-b736-656562656435/free-up-arrow-196504.webp",
    name: "icon-chevrons.webp",
  },
  {
    url: "https://static.tildacdn.one/tild3663-6634-4437-b732-666165623431/_1.svg",
    name: "deco-1.svg",
  },
  {
    url: "https://static.tildacdn.one/tild6166-6333-4461-a233-383235376363/photo.svg",
    name: "deco-photo.svg",
  },
  {
    url: "https://static.tildacdn.one/tild3665-3962-4038-a439-333232643564/_3.svg",
    name: "deco-3.svg",
  },
  {
    url: "https://static.tildacdn.one/tild6236-6464-4236-b133-653438333363/___-_2025-10-29T1739.svg",
    name: "deco-heart-calendar.svg",
  },
  {
    url: "https://static.tildacdn.one/tild3139-6233-4838-b433-616666313339/_4.svg",
    name: "deco-4.svg",
  },
  {
    url: "https://static.tildacdn.one/tild3762-6130-4764-b836-376433663931/_5.svg",
    name: "deco-5.svg",
  },
  {
    url: "https://static.tildacdn.one/tild3436-3563-4161-b565-343464623562/_11.svg",
    name: "deco-plane.svg",
  },
  {
    url: "https://static.tildacdn.one/tild6632-6432-4761-a436-313030376335/_23.svg",
    name: "deco-heartbeat.svg",
  },
  {
    url: "https://static.tildacdn.one/tild3065-6561-4331-a539-343933623631/_19.svg",
    name: "deco-19.svg",
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const lib = url.startsWith("http://") ? http : https;
    const req = lib.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`${res.statusCode} ${url}`));
      }
      res.pipe(file);
      file.on("finish", () => file.close(() => resolve(dest)));
    });
    req.on("error", reject);
  });
}

(async () => {
  for (const f of files) {
    const dest = path.join(assets, f.name);
    try {
      await download(f.url, dest);
      console.log("ok", f.name, fs.statSync(dest).size);
    } catch (e) {
      console.warn("fail", f.name, e.message);
    }
  }
})();
