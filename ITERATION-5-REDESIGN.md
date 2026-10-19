# MJ Wedding Invitation — Iteration 5

## Changes
- Reworked the intro background into a layered dark temple-inspired scene with a restrained gold dust field, glow, and frame-arrival animation.
- Added subtle lamp glows and ornamental accents around the existing devotional artwork.
- Refined the peacock SVG flight with a wing-beat animation and extended the transition so the flight can complete before the temple scene appears.
- Replaced the plain striped arch-door look with layered bronze/wood tones, carved-looking inset panels, ornamental door medallions, and a stronger gold architectural frame.
- Corrected door state logic in CSS: the doors remain closed in `intro-doors` and open only in `intro-open` after the user clicks the MJ emblem.
- Removed the redundant Tamil mantra/Vel block from the main hero; only “May His divine grace guide our union” remains there. The centered header still contains “ஓம் சரவணபவ”.
- Removed the text overlay from the couple hero photograph to avoid another repeated caption.
- Preserved the existing Next.js stack, wedding details, RSVP and skip-intro flow.

## Run locally
From this folder:

```bash
corepack pnpm install
corepack pnpm dev
```

Then open the localhost URL printed by Next.js, typically http://localhost:3000.

## Validation status
Source changes were inspected, but a build/browser run could not be completed in this environment because Corepack could not download pnpm from the package registry. Please run locally and report any browser-console errors. The peacock remains an inline SVG illustration rather than live-action footage; the temple doors are CSS-rendered with layered ornamental detailing. The existing Murugan asset is the artwork already included in the project and still includes a peacock in the image.
