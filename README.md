# GREEN Bio Cosmetics

Frontend-only website for a Moroccan natural cosmetics brand (savon beldi, Fez lipstick, argan oil, ghassoul hair rituals, soothing skincare).

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · react-i18next (FR default / EN)

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where to edit things

| What | Where |
|---|---|
| Phone / WhatsApp / Instagram / domain | `src/config.ts` |
| Products (add, remove, rename) | `src/data/products.ts` + `products.items` in `src/locales/en.ts` & `src/locales/fr.ts` |
| All copy (French & English) | `src/locales/` |
| Colors, fonts, arch frames, grain | `src/index.css` |

## Notes

- Ordering happens through WhatsApp deep links with prefilled messages — there is no backend, no form, no data collection.
- Images in `src/assets/images/` are temporary stock placeholders (Unsplash) — replace with real product photos.
- SEO: per-page meta via `usePageMeta`, JSON-LD business schema in `index.html`, `sitemap.xml` / `robots.txt` in `public/`.
- Security: CSP + hardening headers in `vercel.json`. Deploy on Vercel — nothing else to configure.
