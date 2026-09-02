# Mohammed Vaseem Pasha — Portfolio

Premium, editorial Next.js (App Router) portfolio with a liquid-glass anatomical
cursor/touch reveal hero.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Verification commands

```bash
npm run typecheck   # tsc --noEmit
npm run build        # next build
```

## Project structure

```
app/
  globals.css
  layout.tsx
  page.tsx
components/
  glass-hero.tsx
public/
  images/
    Base_image_desktop.png
    Reveal_image_desktop.png
    Base_image_mobile.png
    Reveal_image_mobile.png
```

## Notes

- The cursor/touch reveal uses a single `requestAnimationFrame` loop, refs only
  (no React state) for pointer position, smoothed position, and radius, and
  writes directly to `--reveal-x`, `--reveal-y`, `--reveal-radius` via
  `element.style.setProperty`.
- Desktop reveal radius: 235px. Mobile reveal radius: 150px.
- Desktop image pair swaps to the mobile pair at `max-width: 767px`, and back
  to the desktop pair at `max-width: 767px` in landscape.
- `prefers-reduced-motion: reduce` collapses both smoothing factors to `1`
  (instant) and removes entrance animation durations.
