const fs = require("fs");
const html = fs.readFileSync(__dirname + "/page.html", "utf8");

const names = [
  "Дуулат",
  "Адэма",
  "Мелис",
  "Жыпар",
  "Женис",
  "Жынар",
];
for (const n of names) {
  const count = (html.match(new RegExp(n, "g")) || []).length;
  console.log(n, count);
}

const fontFaces = [...html.matchAll(/@font-face\s*\{[\s\S]*?\}/gi)].map((m) =>
  m[0].slice(0, 300),
);
console.log("font-faces", fontFaces.length);
fontFaces.slice(0, 8).forEach((f, i) => console.log(i, f.replace(/\s+/g, " ")));

const woff = [...html.matchAll(/https?:\/\/[^"'\\\s]+\.(?:woff2?|ttf|otf)/gi)].map(
  (m) => m[0],
);
console.log("font urls", [...new Set(woff)]);
