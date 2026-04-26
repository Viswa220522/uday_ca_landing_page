# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **Claude Design handoff bundle** — HTML/CSS/JS prototypes for a Chartered Accountant firm landing page ("Kothaluru & Associates"). The goal is to implement these prototypes as a production website in whatever tech stack fits.

There is no build system, no package.json, no framework — only browser-runnable prototypes. Open `project/index.html` directly in a browser to preview.

## Primary design file

`project/index.html` — complete, self-contained landing page prototype. Read it fully before implementing. It loads `project/tweaks-panel.jsx` via Babel standalone for the live-edit panel.

## Architecture

### Design system (CSS custom properties)
All colors/spacing live in `:root` on `index.html`:
- `--gold / --gold-light / --gold-muted` — primary accent
- `--ink / --ink-mid / --ink-light` — text hierarchy
- `--warm-white / --warm-grey / --border / --hero-bg` — backgrounds
- `--sans` (Outfit) / `--mono` (JetBrains Mono) — font stacks
- `--section-pad / --metric-pad / --card-pad / --why-pad` — density tokens

### Theme system
Four color themes via `body.theme-*` class: default gold (no class), `theme-navy`, `theme-saffron`, `theme-forest`. Each theme overrides the CSS vars and key selector colors. Controlled by the tweaks panel → `tweaks.personality`.

### Tweaks panel (`project/tweaks-panel.jsx`)
Shared React component library loaded via `<script type="text/babel">`. Exposes globals: `useTweaks`, `TweaksPanel`, `TweakSection`, `TweakSlider`, `TweakRadio`, etc. The `TWEAK_DEFAULTS` block in `index.html` (between `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/`) is rewritten on disk by the Claude Design host when a tweak is saved — don't change its format.

Three tweakable dimensions:
- `personality`: `'prestigious' | 'navy' | 'saffron' | 'forest'`
- `scriptPresence`: `0–3` (controls visibility/size of secondary technical elements and metric number font)
- `density`: `'spacious' | 'compact'` (maps to the spacing CSS vars)

### Page sections (in order)
Nav → Hero → Metrics strip (4-col) → Services (3-col grid, 6 cards) → About (2-col dark) → Why (5-col grid) → Testimonials (3-col) → Final CTA → Footer

### JavaScript in `index.html`
- Scroll reveal: `IntersectionObserver` adds `.visible` to `.reveal` elements
- Nav scroll state: background opacity change at `scrollY > 80`
- Hero alive effects: letter-split hover, cursor-tracking radial glow, word cycling in subtitle, magnetic button pull on CTAs

### Other files
- `project/wireframes.html` — earlier layout explorations using `project/design-canvas.jsx`; reference only
- `project/uploads/` — logo and reference images to use in implementation

## Implementation notes

When building the production version, match visual output pixel-for-pixel; don't copy the prototype's internal structure. The prototype uses React 18 + Babel via CDN only for the tweaks panel — the actual page content is plain HTML/CSS. A production build can use any framework (or none).

Key visual details to preserve:
- The blinking `nav-logo-divider` animation (`blink` keyframe, 1.6s)
- Outfit sans-serif used for all primary text and headlines
- JetBrains Mono (or clean mono) for technical prefixes (e.g., `//`) and numbers
- Remove Cormorant Garamond script text in favor of modern technical hierarchy
- `service-card::after` bottom-border sweep on hover (width 0 → 100%)
- `.reveal` stagger delays (`.reveal-delay-1` through `.reveal-delay-5`)
- The about section uses a dark background (`#2c1e08`) as a `<section>` element styled with `display:grid`
