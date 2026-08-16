# Onebo Business House

Premium, animated corporate landing page for:
- onebofx — Trading & Analytics
- BabyDiary — bolalar kiyimlari
- CleanPro HoReCa — professional cleaning solutions

## Stack
- Next.js App Router
- TypeScript
- Pure CSS animations (no heavy animation library)
- Railway-ready standalone build

## Local run
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production build
```bash
npm run build
npm run start
```

## Railway
This project already includes:
- `output: "standalone"` in `next.config.ts`
- Railway build/start config in `railway.json`
- `npm run start` pointing to `.next/standalone/server.js`

### GitHub deploy
1. Push the project to GitHub.
2. Railway → New Project → Deploy from GitHub Repo.
3. Select this repository.
4. Add `NEXT_PUBLIC_SITE_URL` in Variables after Railway gives you a domain.
5. Settings → Networking → Generate Domain.

### Railway CLI
```bash
railway login
railway init
railway up
```
Then generate a public domain from Railway Networking settings.

## Content edits
All phone, address, social links and brand texts are centralized in:
`lib/site.ts`

## Current generated contact details
- Phone: +998 90 000 00 00
- Location: Tashkent City, Shayxontohur tumani, Toshkent
- Instagram: @onebo.businesshouse

Replace them later in `lib/site.ts` if needed.
