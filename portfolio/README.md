# Adam Sobieraj — Portfolio

Personal portfolio / business-card site: **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion**.
Hosts: Vercel / Netlify / GitHub Pages. Runs locally via `npm run dev` or Docker.

## Features

- **Bilingual UI (PL/EN)** — toggle in the navbar, next to the theme button
- Light/dark theme toggle (React Context, no localStorage)
- Scroll-reveal animations (Framer Motion `whileInView`)
- Interactive experience timeline (click to expand/collapse)
- Skills grouped by category with animated proficiency bars + filters
- Smooth scroll + active-section highlighting in the nav (IntersectionObserver)
- Mobile-first responsive, keyboard navigation, ARIA, WCAG AA contrast
- SEO: meta, Open Graph, inline-SVG favicon, Google Fonts (Inter + JetBrains Mono)
- Code splitting (`React.lazy` for sections) + manual chunks (react / framer-motion)
- Docker: multi-stage build served by nginx (SPA fallback, gzip, immutable asset cache)

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

### Or with Docker

```bash
docker compose up -d --build   # build + start
docker compose logs -f         # follow logs
docker compose down            # stop and remove
```

The site is served at **http://localhost:8080** (change the port in `docker-compose.yml`).

## Production build

```bash
npm run build      # output in dist/
npm run preview    # local preview of the build
```

## Deployment

### Vercel
1. Push the folder to GitHub.
2. Vercel → *Add New Project* → select the repo.
3. Framework preset: **Vite** (auto-detected). Build: `npm run build`, output: `dist`.
4. Deploy.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages
- Add `base: '/repo-name/'` to `vite.config.ts`, build, and publish `dist/` to the `gh-pages` branch (e.g. via GitHub Actions).

## Editing content

**Polish content:** `src/data/cv.ts` (object `cvPl`)
**English content:** `src/data/cv-en.ts` (object `cvEn`) — same 1:1 structure
**UI strings (buttons, labels, section headings):** `src/i18n/ui.ts`

Edit the data files and every section updates automatically.

### How to add your own photo

1. Drop your photo into the **`public/`** folder (e.g. `public/photo.jpg`).
2. Set the path in the `profile.photo` field (both `cv.ts` and `cv-en.ts`):
   ```ts
   photo: '/photo.jpg',   // ← file from the public/ folder
   ```
3. Rebuild (`npm run build` or `docker compose up -d --build`).

> A neutral placeholder lives at `public/photo.svg`. The photo renders as a circular
> avatar with a gradient ring in the Hero. If the file is missing, the slot hides
> automatically (`onError`) — the site keeps working. A square image (min. 800×800 px)
> looks best, as it gets cropped to a circle.

### Where are location & phone

Both are in `cvPl.profile` (`src/data/cv.ts`) and `cvEn.profile` (`src/data/cv-en.ts`):
- `location: 'Wrocław, Poland'` — shown in the Hero and the footer
- `phone: '+48 690 238 789'` — shown in the Contact section (clickable `tel:`)

### Languages (PL/EN)

- **UI strings:** `src/i18n/ui.ts`
- **CV content — Polish:** `src/data/cv.ts`
- **CV content — English:** `src/data/cv-en.ts`
- **Language state:** `src/i18n/I18nContext.tsx` (React Context, no localStorage)

Switching language automatically updates: `<html lang>`, `<title>`, the
`meta description`, and every section of the site.

## Project structure

```
public/
  photo.svg            <- avatar placeholder (replace with your photo)
src/
  data/
    cv.ts              <- Polish CV content (types + cvPl)
    cv-en.ts           <- English CV content (cvEn)
  i18n/
    ui.ts              <- UI strings PL/EN
    nav.ts             <- nav items (section ids + label keys)
    I18nContext.tsx    <- language state + useI18n() hook
  context/
    ThemeContext.tsx   <- light/dark theme (React Context)
  hooks/
    useTypewriter.ts
    useActiveSection.ts
  components/
    Navbar.tsx, Footer.tsx, Reveal.tsx, SectionHeading.tsx,
    ThemeToggle.tsx, LanguageToggle.tsx
  sections/
    Hero.tsx, About.tsx, Experience.tsx, Skills.tsx,
    Projects.tsx, Education.tsx, Contact.tsx
  App.tsx, main.tsx, index.css
Dockerfile             <- multi-stage: node build → nginx serve
nginx.conf             <- SPA fallback, gzip, caching
docker-compose.yml     <- port 8080 → 80
```
