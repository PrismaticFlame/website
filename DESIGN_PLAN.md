# Site Design Plan — Christopher Williams Portfolio

## Design Vision

A clean, professional portfolio that feels designed rather than documented.
Inspired by three references that share large deliberate space, strong visual hierarchy, and dark atmospheres:

- **Crunchyroll** — carousel layouts, media-forward cards, high contrast
- **Bungie.net** — full-bleed imagery, dramatic typography, atmospheric
- **IBM Quantum** — technical elegance, grid discipline, sophisticated palette

Personal touches: earth-tone pastel palette, interests reflected in project imagery,
and a long-term quantum interaction system (see Phase 5).

---

## Color Palette

| Role | Value | Notes |
|---|---|---|
| Background | `#111118` | Very dark blue-black |
| Card / elevated | `#1a1a28` | Slightly lighter surfaces |
| Borders | `#2e2e42` | Subtle, not harsh |
| Text primary | `#f0ece4` | Warm off-white |
| Text muted | `#6e6e7e` | Secondary info |
| Tag — language | `#a8b4cc` | Dusty blue |
| Tag — framework | `#9fb89f` | Sage green |
| Tag — library | `#c8b898` | Warm sand |
| Tag — tool | `#c9a8a8` | Dusty rose |

---

## Phases

### ✅ Phase 1 — Core Structure
- Single-page layout: About, Education, Experience, Projects, Hobbies
- Navigation buttons
- Responsive-friendly base

### ✅ Phase 2 — Project Carousel
- Horizontal carousel with arrow navigation
- Click-to-expand modal with tags, description, GitHub link
- Tag color system (language / framework / library / tool)
- `data-tags` attribute pattern for modal population

### ✅ Phase 3 — Project Card Visuals
- Crunchyroll-style card layout: banner image on top, title + icons below
- Per-tile background images via `--bg-image` CSS variable
- Hover: background zoom + opacity lift
- Custom SVG banners (sarcasm detection, PyTorch tutorials)
- Layered banner variant (SteamRec: PNG + SVG overlay + title)
- HTML-content banner variants (centered icon, card text)
- Devicons integration for tech stack icons

### ✅ Phase 4 — Hero Section
- Tagline, focus-area chips, status line, GitHub / LinkedIn / Resume links
- Earth-tone chip palette
- Compact info, large visual presence

### 🔄 Phase 5 — Dark Mode (current)
- Dark background throughout (`#111118`)
- All text, borders, and surfaces inverted to dark equivalents
- Pastel tag colors retained (they read well on dark)
- Typography hierarchy tightened

### ✅ Phase 6 — Typography & Layout Scale
- Larger, heavier section headings
- Full-viewport hero section
- Better section spacing and visual rhythm

### ⬜ Phase 7 — Quantum Interactions
Elements exist in a "superposition" state and collapse on hover.

Ideas:
- Key stats or words shown blurred / doubled / scrambled → sharpen on hover
- Section headings with a subtle interference/wave background → calms on hover
- The QEC project tile as a flagship example (most thematically appropriate)
- CSS-only version first (blur + opacity + transition)
- Canvas wave function visualization as stretch goal

### ⬜ Phase 8 — Remaining Sections
- Blog section (posts or link-outs)
- Hobbies section redesign
- Experience section visual upgrade
- Footer

---

## Open Decisions
- Blog: full posts on this site, or links to external platform?
- Mobile layout: carousel becomes vertical scroll or stays horizontal?
