# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **Claude Design handoff bundle** — HTML/CSS/JS prototypes for a Chartered Accountant firm landing page ("Kothuluru and Associates"). The design is fixed to a professional, high-end Navy Blue identity.

There is no build system, no package.json, no framework — only browser-runnable prototypes. Open `index.html` directly in a browser to preview.

## Primary design files

- `index.html` — Main landing page.
- `styles.css` — Core design system and global styles.
- `services/` — Service detail pages.
- `service-styles.css` — Styles shared across service pages.

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

### JavaScript & Interactions
- **Scroll reveal**: `IntersectionObserver` adds `.visible` to `.reveal` elements.
- **Dynamic Nav**: Transparent bar with a centered glass-morphism menu group. Interactive active state highlights that follow hover/scroll.
- **Count-up Stats**: Numbers in the metrics section animate from 0 to target value when entering viewport.
- **Hero alive effects**: Letter-split hover, cursor-tracking radial glow, magnetic button pull on CTAs.
- **Logo animation**: Typographic entrance animation for firm name.

## Implementation notes

When building the production version, match visual output pixel-for-pixel; don't copy the prototype's internal structure.

Key visual details to preserve:
- **Sharp Edges**: Strict 0px border-radius across all navigation elements, buttons, and dropdowns.
- **Glass-morphism**: Background blur (`backdrop-filter`) applied specifically to the centered nav menu group.
- **Pulsing Divider**: The gold `nav-logo-divider` with infinite pulse animation.
- **Animated Metrics**: Flowing gradient ("wind" effect) on metric numbers.
- **Font Stacks**: Plus Jakarta Sans (primary) and Cormorant Garamond (italic accents).
- **Service Cards**: Hover sweep effect and staggered `.reveal` entries.
