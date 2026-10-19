# MJ Wedding Invitation — Iteration 3

## Changes in this iteration
- Reworked the page background with layered ivory, champagne, and subtle botanical/teal tones instead of a flat dotted paper appearance.
- Centered the devotional header and removed the extra “வேலும் மயிலும் துணை” line from the header and invitation card.
- Added a short English devotional supporting line beneath “ஓம் சரவணபவ”.
- Removed the duplicated Murugan medallion from the hero composition.
- Replaced the emoji peacock with an inline SVG peacock illustration with tail movement and a left-to-right flight animation.
- Fixed intro timing so the temple doors visibly open before the main invitation is revealed.
- Reworked the wedding date reveal into a tactile, textured “Scratch to reveal” control. Clicking/tapping reveals Sunday, 22-11-2026.
- Changed the invitation card date to “Sunday, 22-11-2026”.
- Moved the RSVP button to the footer and removed the duplicate RSVP action from the hero.
- Improved music error handling. Until an MP3 is supplied, clicking music control updates it to “Add music” rather than silently appearing broken.
- Added reduced-motion handling for the new flight animation and preserved the existing skip-intro control.

## Assets / remaining caveats
- `public/murugan-peacock.png` remains the devotional opening artwork. The supplied image includes both Murugan and a peacock; replace it with a standalone Murugan visual if you want Murugan alone in the opening.
- The peacock is a lightweight custom SVG illustration, not photorealistic footage.
- The scratch-to-reveal effect is an animated tactile-style reveal activated by click/tap, not a true pointer-tracking scratch canvas.
- Add a properly licensed instrumental track at `public/wedding-instrumental.mp3` when ready. Audio starts only after a user click.
- RSVP and wishes remain front-end demo interactions and do not send/store data on a server.

## Run locally
From the extracted project folder:
```bash
corepack pnpm install
corepack pnpm dev
```
Open the localhost URL shown by Next.js, usually `http://localhost:3000`.

## Testing status
The code was edited in the existing Next.js project. Dependencies are not installed in this environment, so a local Next.js build/browser render could not be run here. Please test locally and share any error or screenshot for the next iteration.
