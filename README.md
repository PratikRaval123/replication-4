# Wedding invite — Duulat & Adema

Reusable mobile-first wedding invitation template based on
[priglasiabakirova.tilda.ws/duulatadema](https://priglasiabakirova.tilda.ws/duulatadema).

## Reuse for a new couple

1. Edit `src/config/wedding.js` (names, date, venue, texts, links, media paths).
2. Replace images under `public/assets/`.
3. Optionally set `RSVP_WEBHOOK_URL` or `GOOGLE_SHEETS_WEBHOOK_URL` in `.env.local`.

Do not change section components unless you need a layout change.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3003](http://localhost:3003).

## Stack

- Next.js + React + Tailwind CSS v4 + Framer Motion
- RU / KZ language toggle (same pattern as previous replications)
