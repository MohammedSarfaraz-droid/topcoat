# Development Log

## 2026-03-03

### Theme + Navbar
- Migrated project theme tokens in `src/app/globals.css` to match sample palette and removed hardcoded navbar color values.
- Fixed token format to valid CSS colors so `text-primary`, `bg-primary`, and hover states render correctly.
- Navbar uses `next/image` logo from `public/logo.png` and sample-like layout behavior.

### Footer
- Rebuilt footer for Next.js (`next/link`, `next/image`) and removed React Router usage.
- Replaced hardcoded business data with `siteConfig` values.
- Updated footer container to include visible themed background (`bg-secondary/40`) while keeping token-based styling.

### Working Agreement
- Keep this log updated for future changes to preserve long-term context across iterations.

### 2026-03-03 (Sample Replication Fix)
- Navbar replicated closer to sample layout/classes and logo sizing (`h-24`) from `public/logo.png`.
- Removed active-link coloring logic that made multiple links red on home (`/#services`, `/#portfolio` were incorrectly active).
- Footer classes/layout aligned to sample structure (`bg-card border-t border-border`, spacing/typography/order).
- Kept Next.js clean implementation (`next/link`, `next/image`) and retained `siteConfig` for service/contact links.

### 2026-03-03 (Home Page Build - Hero)
- Added `src/components/Sections/HeroSection.tsx` from provided sample style, converted to Next.js (`next/link`, `next/image`, public asset `/hero-epoxy.jpg`).
- Wired homepage composition in `src/app/page.tsx` to include `Navbar`, `HeroSection`, and `Footer` for one complete page flow.
- Current focus remains: finish full page first, then convert remaining hardcoded colors to theme tokens in a cleanup pass.

### 2026-03-04 (Service Section + Config Architecture)
- Refactored `src/components/Sections/ServiceSection.tsx` to remove hardcoded service content and consume centralized config data.
- Added typed service models in `src/types/service.ts` and extended `src/Config/Site.ts` with `serviceHighlights` for homepage cards.
- Kept Next.js-first implementation (`next/link`, `next/image`) and aligned section/container spacing with project standards (`py-16`, `max-w-7xl mx-auto px-4`).
