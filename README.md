# Wu Hung-Tse — Portfolio

Personal engineering portfolio built with **Vite + React + TypeScript**. Dark, technical, and fast — no UI framework, no animation library, self-hosted fonts.

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build locally
```

## Deploy

**GitHub Pages** — push to `main`; `.github/workflows/deploy.yml` builds and deploys automatically. In the repo settings, set *Pages → Source* to **GitHub Actions** once.

**Cloudflare Pages** — connect the repo, set build command `npm run build` and output directory `dist`. No other config needed (`base: './'` keeps asset paths relative).

## Update your info

All personal data lives in [`src/data/`](src/data/):

| File | Contents |
| --- | --- |
| `site.ts` | Name, tagline, email, GitHub, LinkedIn (set the URL to enable the link) |
| `projects.ts` | Project cards incl. case-study copy and repo links |
| `skills.ts` | Skill categories |
| `timeline.ts` | Learning-journey entries |

Design tokens (colors, spacing, type scale, motion) live in [`src/styles/tokens.css`](src/styles/tokens.css).
