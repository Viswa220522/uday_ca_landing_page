# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **Claude Design handoff bundle** — HTML/CSS/JS prototypes for a Chartered Accountant firm landing page ("Raghavendra Kothuluru and Associates"). The design is fixed to a professional, high-end Navy Blue identity.

There is no build system, no package.json, no framework — only browser-runnable prototypes. Open `index.html` directly in a browser to preview.

## Primary design file

`index.html` — complete, self-contained landing page. All HTML, CSS, JS inline. No build system, no dependencies, no CDN.

## Architecture

### Design system (CSS custom properties)
All colors/spacing live in `:root` on `index.html`:
- `--gold` (#2563a8) — Primary Navy Blue accent (repurposed from legacy system)
- `--gold-light` (#3a7bc8) — Lighter navy for hovers
- `--ink / --ink-mid / --ink-light` (#0d1f3c / #2a3f62 / #6280a8) — Text hierarchy (Deep Navy to Slate)
- `--warm-white / --warm-grey / --border / --hero-bg` — Professional Ice Blue/Steel backgrounds
- `--sans` (Plus Jakarta Sans) / `--script` (Cormorant Garamond) — Font stacks
- `--section-pad / --metric-pad / --card-pad / --why-pad` — Density tokens

### Fixed Identity
Single professional Navy Blue identity. All colors/spacing controlled via CSS custom properties in `:root`. No theme switching.

### Page sections (in order)
Nav → Hero → Metrics strip (4-col) → Services (3-col grid, 6 cards) → About (2-col Dark Navy) → Why (5-col grid) → Testimonials (3-col) → Final CTA → Footer

### JavaScript in `index.html`
- Scroll reveal: `IntersectionObserver` adds `.visible` to `.reveal` elements
- Nav scroll state: background opacity change at `scrollY > 80`
- Hero alive effects: letter-split hover, cursor-tracking radial glow, word cycling in subtitle, magnetic button pull on CTAs
- All vanilla JS, no frameworks or transpilation

## Implementation notes

When building the production version, match visual output pixel-for-pixel; don't copy the prototype's internal structure.

Key visual details to preserve:
- The blinking `nav-logo-divider` animation (`blink` keyframe, 1.6s)
- Plus Jakarta Sans used for all primary text and headlines
- Cormorant Garamond for the cinematic "script" accents (e.g., "Professionalism", "Chartered Accountants")
- `service-card::after` bottom-border sweep on hover (width 0 → 100%)
- `.reveal` stagger delays (`.reveal-delay-1` through `.reveal-delay-5`)
- The about section uses a Deep Navy background (`#1a3560`)
