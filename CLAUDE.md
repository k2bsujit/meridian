# MERIDIAN — Luxury Real Estate Website
### Project Context for Claude Cowork

> **Placeholder brand name:** "MERIDIAN" is used throughout this file and the codebase as a stand-in brand name. It's a single find-and-replace away from your real company name — search the codebase for `MERIDIAN` before final delivery.

This file is the persistent source of truth for this project. Read it in full before starting any milestone. When in doubt about a design or technical decision, default to what's written here rather than inventing new patterns.

---

## 1. Project Summary

A single-brand luxury real estate website (developer/boutique brokerage style, not a listings-portal). The goal is a cinematic, editorial, story-led site that feels like a $200K build from a top-tier digital agency — closer to a high-fashion or architecture digital publication than a typical real estate template.

**Non-negotiables:**
- No generic real-estate-template look (stock hero slider + grid of listing cards + sidebar filters).
- Motion and whitespace do the persuading — not banners, badges, or urgency copy.
- Every page must work perfectly with zero images loaded (semantic HTML, real content, no layout collapse) — images are an enhancement layer, not a structural dependency.

---

## 2. Tech Stack

- **Framework:** Astro (latest stable) — static-first, islands architecture
- **Styling:** Tailwind CSS (utility-first, custom design tokens — see §4)
- **Animation:** GSAP + ScrollTrigger for scroll-driven reveals; [Lenis](https://github.com/darkroomengineering/lenis) for smooth inertia scrolling
- **Interactivity:** Astro islands (`client:visible` for below-the-fold animated components, `client:idle` for non-critical widgets) — keep JS shipped to the client minimal; this is a content site, not an app
- **Forms:** Static-friendly form handling (Netlify Forms) for the appointment/contact form
- **Deployment:** Netlify
- **Fonts:** Self-hosted via `@fontsource` packages (avoids render-blocking Google Fonts requests) — see §4
- **Icons:** Inline SVG only, no icon font libraries

Package manager: npm. Node version: latest LTS.

---

## 3. Sitemap & Navigation (Approved)

**Fixed header (all pages, REVISED per client direction):**
- Logo (left) — also serves as the "Home" affordance; there is no separate "Home" nav item
- Always-visible horizontal nav bar at `xl` breakpoint and up (no hamburger/off-canvas at this width)
- Persistent CTA button: **"Schedule Appointment"** — links to `/contact#schedule`, styled distinctly from text links (solid or outlined button, never looks like a nav item)
- Below `xl`, the horizontal bar collapses to a hamburger menu opening a full-screen off-canvas nav (same content, stacked)

**Fixed bar — order and structure:**
1. About — `/about` — with a caret revealing a mini dropdown:
   - Testimonials — `/testimonials`
   - Gallery — `/gallery`
2. Residences — `/residences` (+ individual `/residences/[slug]` detail pages)
3. The Experience — `/experience`
4. Neighborhood — `/neighborhood`
5. Journal — `/journal` (+ `/journal/[slug]`)
6. Contact — `/contact` — with a caret revealing a mini dropdown:
   - FAQs — `/faq` (dedicated page, not a `/contact` anchor)

Each top-level label is a real link to its own page; the caret next to About and Contact is a separate disclosure control (click to open, only one open at a time, closes on outside click/Escape/selection) rather than a single catch-all "More" menu.

**Footer (every page):**
- Condensed link list mirroring the above
- Direct link to `/faq`
- Newsletter signup (email field + submit, no third-party embed needed yet — stub the handler)
- Social icons (inline SVG, stub `href="#"` until real accounts are provided)
- Legal row: Privacy Policy / Accessibility Statement / Terms (stub pages, real content later)
- Sales office address + phone (placeholder data, clearly commented `<!-- TODO: real contact info -->`)

---

## 4. Design System

### 4.1 Color Palette
Quiet-luxury palette — restrained, warm neutrals with a single metallic accent used sparingly (never as a background fill, only for hairlines, icons, small text accents, hover states).

| Token | Hex | Use |
|---|---|---|
| `ink` | `#14140F` | Primary text, dark section backgrounds |
| `bone` | `#F6F2EA` | Primary background, light section text |
| `stone` | `#8C8579` | Secondary/muted text, borders |
| `brass` | `#B08B57` | Accent only — links on hover, dividers, small labels |
| `overlay` | `#0A0A08` at 40–60% opacity | Image overlays for text legibility |

Do not introduce additional colors without updating this table first.

### 4.2 Typography
- **Display / headlines:** `Fraunces` (variable serif — use optical size + soft variants for large cinematic headlines)
- **Body / UI:** `Inter`
- Headline sizes should feel oversized relative to typical corporate sites — think editorial magazine, not SaaS landing page. Use `clamp()` for fluid type scaling instead of fixed breakpoint jumps.
- Generous line-height on body copy (1.6–1.8), tight line-height on display type (1.0–1.1).
- Letter-spacing: slightly widened tracking on all-caps labels/eyebrows (nav secondary tier, section labels).

### 4.3 Spacing & Layout
- Section vertical padding: generous, minimum `8rem` desktop / `4rem` mobile between major sections.
- Grid: 12-column, but content rarely fills it — asymmetric layouts (offset images, text blocks that don't span full width) read as more editorial than centered/symmetric ones.
- Max content width for body copy: ~65–75ch for readability.

### 4.4 Motion Principles
- Scroll-triggered reveals: fade + subtle upward translate (8–16px), staggered for grouped elements. Nothing bounces, springs aggressively, or overshoots — luxury motion is slow and confident, not playful.
- Hero sections: subtle parallax or slow Ken-Burns-style movement on hero imagery/video, not hard cuts.
- Hover states: understated — opacity shifts, slow underline draws, gentle scale (1.02–1.03 max), never large scale jumps.
- Page/section transitions: smooth, no jarring hard reloads where avoidable.
- **Always respect `prefers-reduced-motion`** — provide a static fallback state for every animated component.

---

## 5. Imagery & Logo Strategy

No real photography or brand assets exist yet. Use this approach so everything is a clean swap-out later:

1. **Logo:** Build a simple **typographic wordmark** in code (styled text using the Fraunces display font, not a generated raster logo). This is more reliable than AI-generated logo marks, renders crisp at every size, and is trivial to replace with a real logo file later — just swap the `<Logo />` component's markup for an `<img>`/inline SVG once a real logo exists. Do not spend generation budget on a raster logo icon.
2. **Photography:** Use AI image generation (whatever image tool is available in this environment) to produce placeholder hero/lifestyle imagery — architectural exteriors, interiors, lifestyle/amenity shots consistent with the palette in §4.1 (warm neutrals, golden-hour or soft daylight, minimal/modern architecture). Keep a consistent visual mood across all generated images so the site doesn't feel disjointed.
3. **Fallback:** If no image generation tool is available in a given session, use solid-color/gradient placeholder blocks (using the palette tokens) with a clearly visible `IMAGE: [description of intended shot]` label, so nothing is ever left visually broken or filled with unrelated stock photography.
4. Every image gets descriptive `alt` text — write it as if the real photo will match the description (helps whoever swaps in real photography later, and is required for accessibility regardless).

---

## 6. Content Tone

Editorial, confident, understated. Avoid real-estate marketing clichés ("won't last long!", "your dream home awaits!", excessive exclamation points, ALL CAPS urgency). Write the way a high-end architecture or design publication would — descriptive, specific, sensory, unhurried. It's fine (encouraged) to invent placeholder property names, neighborhood details, and testimonial quotes for now — flag them clearly as placeholder content with an HTML comment so they're easy to find and replace.

---

## 7. Coding Conventions

- Component structure: `/src/components/` grouped by domain (`nav/`, `hero/`, `residences/`, `shared/`), `/src/layouts/` for page shells, `/src/pages/` mirrors the sitemap in §3.
- Tailwind config: extend the theme with the tokens from §4.1–4.2 rather than using arbitrary values inline throughout components — keeps future rebranding to a config-file edit.
- Keep components small and single-purpose; avoid giant monolithic page files.
- Comment any placeholder content/data clearly: `<!-- PLACEHOLDER: replace with real [X] -->`.
- Semantic HTML throughout (`<nav>`, `<section>`, `<article>`, proper heading hierarchy) — this is both an accessibility and SEO requirement, not optional polish.

---

## 8. Performance & Accessibility Requirements

- Target Core Web Vitals scores above 90 in Lighthouse/PageSpeed Insights.
- Lazy-load all below-the-fold images; use responsive `srcset`/`<picture>` via Astro's built-in image optimization.
- Minimize client-side JS — most of the site should ship zero or near-zero JS; only animated/interactive islands hydrate.
- WCAG-compliant: color contrast, full keyboard navigation (including the off-canvas menu — focus trap when open, Escape to close), visible focus states, screen-reader-friendly labeling on all interactive elements.

---

## 9. Definition of Done (per milestone)

- Builds and deploys cleanly on Netlify with no console errors.
- Responsive across mobile / tablet / desktop breakpoints — check the off-canvas nav, hero sections, and any multi-column layouts specifically.
- Lighthouse pass (Performance, Accessibility, Best Practices ≥ 90).
- All placeholder content/images clearly flagged for later replacement.
- Motion respects `prefers-reduced-motion`.
