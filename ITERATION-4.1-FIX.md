# Iteration 4.1 — Intro button interaction fix

- Explicitly sets the Enter Invitation and Skip Intro controls to `type="button"`.
- Adds accessible labels and prevents accidental default/bubbling behavior on Enter Invitation.
- Places decorative star layers behind the interactive scene and raises the controls' stacking order.
- Enter Invitation should transition to the peacock scene, then the closed temple door scene; selecting the MJ temple control opens the doors and reveals the invitation.
- Skip Intro remains a single control and opens the main invitation directly.

Run locally with `corepack pnpm install` and `corepack pnpm dev`. Browser interaction/build testing was not available in this environment; verify locally before publishing.
