# MJ Wedding Invitation — Iteration 1

## Design updates
- Responsive hero typography, including the full name “Jacqulin Mariya”.
- Ivory, champagne-gold, blush and peacock-toned visual system.
- Custom inline antique-gold Vel SVG and Tamil devotional lines.
- A short intro flow: devotional artwork, a peacock transition, and a temple-door/MJ monogram reveal. The intro can be skipped at any time.
- Couple portrait displayed with `object-fit: contain` so the full saree trail is not intentionally cropped.
- Existing wedding date/time/venue details retained from the supplied project.
- RSVP and wishes UI retained. These are front-end preview interactions only and do not persist or send data to a backend.
- Reduced-motion preference respected.

## Assets
- `public/murugan-peacock.png` — existing devotional artwork.
- `public/mj-couple-portrait.png` — supplied rear-facing couple portrait used in the hero.
- Optional music: add a properly licensed instrumental MP3 as `public/wedding-instrumental.mp3`. Audio playback is user-triggered.

## Run locally
Use Node.js 20.9+ (Node 22 recommended). From this directory:

```bash
corepack pnpm install
corepack pnpm dev
```

Then open the local URL printed by Next.js, typically http://localhost:3000.

## Limitations to address before publishing
- The provided devotional artwork contains both Murugan and a peacock; it is not a standalone Murugan image. Supply a preferred standalone devotional image if the opening must show Murugan alone.
- Peacock flight is represented by a lightweight emoji-based motion placeholder, not a realistic flying-peacock animation. Replace with an appropriately licensed transparent animation/SVG for a cinematic result.
- Temple doors and the MJ monogram are CSS artwork, not a photorealistic temple scene.
- RSVP and wishes are not connected to a backend.
- No audio file is included; add an authorized track if desired.
- Dependency installation and a production build could not be verified in this environment because package registry access was unavailable.
