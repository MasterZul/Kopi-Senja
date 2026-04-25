# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

There is no test suite configured.

## Architecture

Single-page marketing site for a Malaysian coffee shop. Next.js App Router with a single route (`/`). All components are `'use client'` — no server components or API routes.

**Component composition** (`app/page.tsx`):
```
Header → Hero → SpecialSection → BestSelling → Testimonials → Newsletter → Footer
```

All product and testimonial data is hardcoded inside the components themselves (`BestSelling.tsx`, `Testimonials.tsx`). There is no API integration — all buttons have empty `onClick` handlers, ready for future wiring.

## Styling

Tailwind CSS with a custom coffee-themed palette defined in `tailwind.config.ts`:
- `cream` / `cream-dark` — light backgrounds
- `coffee-light` / `coffee-mid` / `coffee-dark` / `coffee-black` — brand browns
- `golden` — accent and CTA color

Custom fonts via Google Fonts: `playfair` (Playfair Display, headings) and `sans` (Nunito, body).

## Animations

GSAP 3 with ScrollTrigger is used extensively in every section. The pattern across all animated components:
- Initialize with `gsap.context()` inside `useEffect`, return the context's `revert()` as cleanup
- Entrance animations use `opacity`, `y`, `x`, `scale` properties with eases like `power3.out`
- ScrollTrigger fires at `80% bottom` viewport threshold
- Hero image uses an infinite floating loop (`yoyo: true, repeat: -1`)

When adding new animated sections, follow this same `gsap.context` + `ScrollTrigger` pattern.

## Images

All images are from Unsplash via `next/image`. The `next.config.mjs` allows `images.unsplash.com` as a remote pattern. Always use the `Image` component with `fill` + `object-cover` for section images, and `priority` only on the hero image.
