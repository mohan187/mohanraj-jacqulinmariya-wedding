# MJ Wedding Invitation — Iteration 4

## Changes in this iteration
- Removed the English subtitle under the header's Tamil mantra. The header now contains only centered `ஓம் சரவணபவ`.
- Removed the duplicate English “With the blessings of Lord Murugan” eyebrow above the hero mantra.
- Kept `May His divine grace guide our union` as the single English devotional line in the hero.
- Replaced the footer line “A sacred beginning, held in divine grace” with `வேலும் மயிலும் துணை`.
- Removed the duplicate “Skip intro” button from the blessing scene; one corner skip control remains.
- Fixed intro progression: Enter invitation starts the peacock flight and then holds at the closed temple doors instead of timing out before the guest can interact.
- Made the MJ monogram/temple doorway itself a keyboard-accessible button. Selecting it opens the doors, reveals the warm light, and transitions into the invitation. The skip intro remains available.

## Run locally
```bash
corepack pnpm install
corepack pnpm dev
```
Then open the localhost URL printed by Next.js, usually http://localhost:3000.

## Current limitations
- The flying peacock is a lightweight custom SVG illustration, not photorealistic footage.
- The opening artwork currently supplied in `public/murugan-peacock.png` includes a peacock with the Murugan image. Replace it with a licensed/approved standalone Murugan visual if the opening must depict Lord Murugan alone.
- Background music remains a placeholder at `public/wedding-instrumental.mp3`; add a properly licensed MP3 to enable playback.
- A production build/browser test was not run in this environment. Please run the project locally and report any console/build errors.
