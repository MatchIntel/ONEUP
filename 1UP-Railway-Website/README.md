# 1UP Esports Website

Production-ready OneUp Esports website with the supplied 1UP branding, current pro roster, auto-updating regional organization rankings, and the latest tracked tournament earning.

## Railway deployment

1. Extract the ZIP and upload every extracted file to a GitHub repository.
2. In Railway, choose **New Project → Deploy from GitHub repo**.
3. Select the repository. Railway reads `railway.toml`, installs dependencies, builds the site, and starts it.
4. Open **Settings → Networking → Generate Domain** after the deploy finishes.

No custom Railway variables are required. Railway provides `PORT` automatically.

## Automatic FortniteTracker updates

- The browser requests `/api/fortnite-tracker` when the site opens and every 30 minutes.
- The server checks the OneUp organization page plus the Global, NA West, NA Central, and Brazil organization boards.
- Successful public responses update the roster, all four rankings, earnings, tracker links, the latest cash result, its event artwork, and the full teammate lineup together.
- Verified copies of the supplied X profile photos are bundled with the site so they always render. A same-site image route checks X again after seven days and caches any changed photo; if X is unavailable, it serves the bundled photo instead of a broken image.
- FortniteTracker sometimes uses automated-traffic protection. When that happens, the site serves the included verified snapshot instead of returning an empty or broken dashboard. The sync badge clearly says whether the data is live, partial, or a verified snapshot.
- Brazil starts at **#62** in the verified snapshot and is replaced whenever the public Brazil board responds successfully.

No API key, database, cron service, or paid proxy is needed.

## Local development

Use Node.js 20.9 or newer:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm run start
```

## Project map

- `app/page.tsx` contains the main page structure and official organization links.
- `components/live-org-dashboard.tsx` contains the roster filters, tabs, rankings, latest-earning card, and refresh behavior.
- `lib/fortnite-tracker.ts` contains the public-page parser, 30-minute server cache, and verified fallback data.
- `app/api/fortnite-tracker/route.ts` exposes the normalized live-data endpoint.
- `app/globals.css` contains the complete responsive design system.
- `public/oneup-wordmark-color.png`, `public/oneup-wordmark-white.png`, and `public/oneup-icon-orange.png` are the supplied brand assets.
- `railway.toml` contains the Railway build and start configuration.

## Data source note

Fortnite and FortniteTracker names, event records, rankings, and logos belong to their respective owners. This project links back to the source records and does not claim affiliation with Epic Games or Tracker Network.
