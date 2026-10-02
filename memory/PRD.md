# PRD — Meridian Capital Advisors (Boutique Investment Advisory Website)

## Original Problem Statement
Build a premium, modern, fully responsive STATIC single-page website for a boutique investment advisory & financial consulting startup founded by two professionals (incl. a Chartered Accountant). No backend, database, auth, CMS or admin panel. 4 major sections (Home/Hero, About & Expertise, Investment Approach/Services, Contact) with smooth-scroll nav, Apple-level simplicity, premium fintech aesthetic, all editable content centralized in ONE config file, WhatsApp/email/phone contact links, and a static enquiry form that opens WhatsApp/email with prefilled details.

## Architecture
- React (CRA + craco) frontend only — served on :3000, hot-reloaded, supervisor-managed.
- Tailwind theme: ink #0C0E12, paper #F9F8F6, gold #C5A059/#E5C889/#A07E3B; fonts Fraunces (display serif), Manrope (body), JetBrains Mono (eyebrows/numbers).
- Motion: framer-motion (masked hero line reveal, scroll reveals, parallax), lenis momentum smooth-scroll, CSS editorial marquee.
- Single content source: `frontend/src/config/siteContent.js` (brand, nav, hero, marquee, about, founders, stats, approach, services, journey, contact, footer, images).
- Components: Navbar, Hero, Marquee, About, Approach, Services, Journey, Contact, Footer, Logo, Reveal helpers (`src/components/`).
- Images in `frontend/public/images/` (hero.jpg, about.jpg, journey.jpg, founder-1.jpg, founder-2.jpg) + `public/favicon.svg`.
- README.md at `/app/README.md` — non-developer content-editing guide.

## User Personas
1. **Site owner (non-developer)**: edits one config file to change names, numbers, services; swaps images in public/images.
2. **Prospective client**: lands on hero, scans expertise/services, contacts via WhatsApp/email/phone or enquiry form.

## Core Requirements (static)
- One-page site, smooth-scroll anchor nav with compacting sticky nav + mobile hamburger overlay.
- Hero with kinetic masked line-by-line headline reveal, parallax abstract visual, dual CTAs.
- Editorial marquee band; About with stats (count-up), philosophy, founder cards; Approach 4 cards; Services 6 cards; Journey 3-stage parallax section.
- Contact: 3 method cards (WhatsApp/mailto/tel) + enquiry form → opens WhatsApp (primary) / email (fallback), explicitly states nothing is stored.
- Footer: brand, quick links, contact, socials, editable disclaimer, copyright.
- Fully responsive 390px→desktop, no horizontal scroll, data-testids on all interactive elements.

## Implemented (2026-10-02)
- Full config-driven site (all sections above) with framer-motion reveals + lenis smooth scroll + parallax hero/journey + slow marquee + count-up stats.
- Original SVG brand mark (meridian globe) as inline logo + favicon; logo swap supported via config.
- README.md content guide; placeholder contact/founder/stat values clearly marked for replacement.
- Fixed template bug: corrupted posthog snippet in public/index.html (t.split → e.split restore) that crashed the page with a runtime-error overlay.

## Verification
- Desktop 1440 & mobile 390 screenshots (hero, about, approach, services, contact, form filled + submitted → toast "Opening WhatsApp…"), overflow-x: false, no console errors.

## Backlog / Next
- P0: Replace placeholder contact details (phone/WhatsApp/email), founder names/designations, stats, brand name — all in siteContent.js.
- P1: Replace stock imagery with real firm photography; add real social URLs.
- P1: SEO pass (og:image, sitemap for deployment), favicon to PNG fallback.
- P2: Spark ideas — floating WhatsApp concierge button, subtle page-load preloader with brand mark, testimonials section (content added by owner).
