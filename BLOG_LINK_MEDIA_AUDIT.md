# Blog Link and Media Audit

Audit date: 2026-09-28

## Link repairs

The site uses `trailingSlash: false` and blog post permalinks are configured as `/%slug%`. Blog posts therefore resolve at `/<slug>` rather than `/blog/<slug>/`. The latter was not a trailing-slash-only issue: it used the wrong route base and an unnecessary trailing slash.

| Blog post | Broken destination | Repair | Cause |
| --- | --- | --- | --- |
| Anatomy of a Phishing Attack | `/blog/mfa-bypass-methods/` | `/mfa-bypass-methods` | Wrong post base and trailing slash; resolved `404` |
| Anatomy of a Phishing Attack | `/product` | `/products/privileged-account-manager` | No `/product` route; use the existing PAM detail page |
| Inside a Ransomware Negotiation | `/blog/zero-trust-architecture-explained/` | `/zero-trust-architecture-explained` | Wrong post base and trailing slash; resolved `404` |
| Inside a Ransomware Negotiation | `/product` | `/products/privileged-account-manager` | No `/product` route; use the existing PAM detail page |
| MFA Bypass Methods | `/blog/anatomy-of-a-phishing-attack/` | `/anatomy-of-a-phishing-attack` | Wrong post base and trailing slash; resolved `404` |
| MFA Bypass Methods | `/blog/zero-trust-architecture-explained/` | `/zero-trust-architecture-explained` | Wrong post base and trailing slash; resolved `404` |
| MFA Bypass Methods | `/product` | `/products/privileged-account-manager` | No `/product` route; use the existing PAM detail page |
| Password Hygiene in 2026 | `/product` | `/products/credential-vault` | No `/product` route; use the relevant existing credential-vault page |
| Password Hygiene in 2026 | `/blog/anatomy-of-a-phishing-attack/` | `/anatomy-of-a-phishing-attack` | Wrong post base and trailing slash; resolved `404` |
| Scaling Enterprise Infrastructure | `/case-studies` | `/solutions/enterprise-it` | No case-studies route; related-reading copy updated to describe the existing solution page accurately |
| Zero Trust Architecture Explained | `/product` | `/products/privileged-account-manager` | No `/product` route; use the existing PAM detail page |
| Zero Trust Architecture Explained | `/blog/password-hygiene-2026/` | `/password-hygiene-2026` | Wrong post base and trailing slash; resolved `404` |

The unrelated PostgreSQL documentation link and `/contact` links were reachable and left unchanged.

## YouTube embeds

| Blog post | Video | Result and action |
| --- | --- | --- |
| Anatomy of a Phishing Attack | `inWWhr5tnEA` | YouTube oEmbed returned `200` and identified a published Simplilearn cybersecurity overview. The previous section described it as a phishing-kit walkthrough, which did not match the video; description and iframe title were corrected. Explicit cross-origin referrer policy added. |
| MFA Bypass Methods | `xoSjVXsSJXk` | YouTube oEmbed returned `404`. The embed URL format was valid, so the failure is provider-side (video unavailable), not a site URL-construction error. Removed the dead iframe and linked to NinjaOne's relevant MFA Fatigue Attacks video page, which returned `200`. |
| Scaling Enterprise Infrastructure | `dQw4w9WgXcQ` | YouTube oEmbed returned `200`, but identified Rick Astley's official music video, not the described on-call walkthrough. Removed the mismatched embed and linked to the Google SRE Workbook on-call chapter, which returned `200`. |
| Zero Trust Architecture Explained | `yn6CPQ9RioA` | YouTube oEmbed returned `200` and identified IBM Technology's “Zero Trust Explained in 4 mins”. The source used a `youtu.be` share URL as an iframe URL; changed it to the privacy-enhanced `/embed/` URL and added an explicit referrer policy. |

The two remaining embedded YouTube videos have valid provider metadata and their iframe documents load in the site preview. Automated browser tooling could not inspect/play the cross-origin YouTube player itself (its player surface is cross-origin and the tool does not expose its frames), so uninterrupted playback in a normal end-user browser could not be conclusively certified here. No provider-side removal/private status was reported for either remaining video.

## Audio

The three SoundHelix MP3 sources (`SoundHelix-Song-1.mp3`, `SoundHelix-Song-2.mp3`, and `SoundHelix-Song-3.mp3`) all returned `206 audio/mpeg` for byte-range requests. Each browser audio element reached `readyState: 4`, advanced playback time, and reported no media error. No source or site playback issue was found.

## Navigation and verification

- The previously linked `/blog/<slug>/`, `/product`, and `/case-studies` routes returned `404` on the production preview.
- Corrected blog, product, solution, contact, tag, and category routes returned `200`.
- Category links rendered by the six affected posts use `/category/identity-and-access`, `/category/threats-and-attacks`, `/category/best-practices`, and `/category/engineering`; all resolve. `/category/identity-access` returned `404` only as a manually guessed URL and is not generated or linked by the site.
- Browser checks scanned 178 internal anchors across six affected blog pages; none returned an HTTP error.
- Browser click-throughs from the zero-trust post to its related password-hygiene post and Identity & Access category both navigated to the expected pages.
- `npm run build` completed, and Pagefind indexed 301 pages.
- Direct audio playback was tested in-browser. YouTube availability was checked through provider oEmbed metadata and iframe document loading; see the playback limitation above.