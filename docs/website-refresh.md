# Website refresh and dependency remediation

## Experience

The homepage now uses a dark, restrained visual system, oversized typography, a CSS 3D sculpture that rotates and responds to scrolling, dimensional service illustrations, and revised studio/process/contact sections. The animation has a pause control and respects reduced-motion preferences. The page remains server rendered; only the sculpture's controls and scroll response require client JavaScript.

Contact calls to action now open email to info@noveltechworks.ca. The previous Netlify form and testimonial carousel are no longer rendered. Existing components remain available for reference; testimonials should be confirmed before reuse.

## Security verification — 2026-09-11

The signed-in GitHub Dependabot page showed 62 open alerts, including the critical Next.js React Flight RCE alert. The original local lockfile reported 20 vulnerable packages (1 critical, 16 high, 3 moderate). These counts differ because GitHub tracks individual advisories, while npm groups affected packages.

- Next.js updated to 15.5.25; matching eslint-config-next updated.
- React and React DOM updated to 19.3.0.
- Netlify Next.js adapter upgraded from major version 4 to 5.15.13, eliminating its old vulnerable dependency chain.
- Next.js's PostCSS dependency overridden to a patched 8.5 release. The lockfile resolves PostCSS 8.5.28. Retain this override until upstream ships a safe dependency; re-run the build and audit when removing it.
- Remaining compatible dependencies refreshed and the lockfile regenerated.
- Added nosniff, frame denial, referrer policy, and camera/microphone/geolocation restrictions; removed the framework identification header.

Final `npm audit`: **0 vulnerabilities** across all dependency scopes. This is a dependency advisory check, not a complete penetration test. GitHub alerts must be re-evaluated after pushing to the default branch. Live-site remediation requires the updated deployment to complete.

## Validation

- `npm run build`: passed, with static generation and TypeScript validation.
- `npm run lint`: passed, with two pre-existing next/image warnings in unused BlogSection and Portfolio components.
- Browser inspection at desktop/tablet and 390px mobile widths: legible layout and 3D graphic.
- Motion pause control and back-to-top navigation exercised in the browser.
- Netlify adapter major upgrade requires deployment validation in Netlify; the local production build succeeds.

## Run locally

Use `npm ci`, then `npm run dev`. Use `npm run build` and `npm start` for a production preview. The deployed site's existing Google Analytics measurement ID is preserved.
