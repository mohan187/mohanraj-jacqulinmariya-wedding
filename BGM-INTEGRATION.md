# BGM integration

- Added the supplied audio as `public/anbil-avan-bgm.m4a`.
- Clicking **Enter invitation** starts playback as part of the user's gesture, then begins the intro sequence.
- The audio loops at 32% volume and continues into the invitation because it is managed by the page component.
- The header music toggle pauses/resumes the same audio instance.
- To replace the track later, replace `public/anbil-avan-bgm.m4a` with your authorized audio file and update the path in `app/page.tsx` if its filename changes.

Run locally with `corepack pnpm install` then `corepack pnpm dev`. Browser playback should be verified locally, especially on iOS Safari.
