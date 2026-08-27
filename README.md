# 1UP Esports Website

Production-ready OneUp Esports website with the complete 17-player Fortnite roster, organization stats, rankings, announcements, profile links, and the supplied 1UP branding.

## Railway deployment

1. Extract this ZIP and upload every extracted file to a GitHub repository.
2. In Railway, choose **New Project → Deploy from GitHub repo**.
3. Select the repository. Railway automatically reads `railway.toml`, installs dependencies, builds the site, and starts it.
4. After the deploy finishes, open **Settings → Networking → Generate Domain**.

No custom variables are required. Railway supplies `PORT` automatically.

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

## Editing content

- `app/page.tsx` contains the player data, links, stats, rankings, and page structure.
- `app/globals.css` contains the responsive design system.
- `public/oneup-logo.png` is the supplied 1UP logo.
- `railway.toml` contains the complete Railway configuration.
