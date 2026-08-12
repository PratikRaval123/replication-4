# Wedding Invitation Template — Duulat & Adema

Reusable Next.js wedding invitation template. Mobile-first, bilingual (RU / KZ), config-driven.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize for a new couple

Edit only:

1. `src/config/wedding.js` — names, dates, venue, texts, media paths, RSVP copy
2. `public/assets/` — photos, icons, decorations

You should not need to change section components for a typical client.

## Language toggle

Fixed top-right **RU / KZ** pills. Content uses `.lang-ru` / `.lang-kz` CSS switching and `{ ru, kz }` fields in config.

## RSVP

Form posts to `/api/rsvp`. Optional Google Sheets webhook:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/...
```

Without it, submissions are logged in the server console.
