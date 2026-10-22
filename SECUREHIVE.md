# SecureHive — Enterprise Privileged Access Management Website

Production-oriented Astro site built on **AstroWind** (Astro 7 + Tailwind 4).

## Features

- **PAM-focused branding** (SecureHive): navy `#0B2D5B`, accent blue `#3B82F6`
- **Animated hero** (network/nodes SVG, respects `prefers-reduced-motion`)
- **93 cybersecurity/PAM blog posts** (migrated from EnterprisePA)
- **6 product pages** + hub (`/products/...`)
- **6 solution pages** + hub (`/solutions/...`)
- **Pagefind site search** (header + Ctrl/Cmd+K) — indexes after production build
- **Dark / light mode** toggle with system preference
- **View transitions**, section reveal animations, micro-interactions
- Contact, About, Pricing, SEO, RSS, sitemap (AstroWind)

## Quick start

```bash
npm install
npm install -D pagefind   # if not already installed
npm run dev               # local development
npm run build             # astro build, then Pagefind runs automatically
npm run preview           # preview production build + search
```

Search only works after `npm run build` (Pagefind indexes `dist/`).

## Main routes

| Route          | Description               |
| -------------- | ------------------------- |
| `/`            | Homepage                  |
| `/products`    | Product suite hub         |
| `/products/*`  | Individual PAM products   |
| `/solutions`   | Solutions hub             |
| `/solutions/*` | Industry / use-case pages |
| `/blog`        | Blog listing              |
| `/contact`     | Demo / contact form       |
| `/about`       | Company                   |
| `/pricing`     | Enterprise pricing CTA    |

## Stack

- Astro 7, Tailwind CSS 4, AstroWind template architecture
- Locale-partitioned content collections for the blog (`src/data/post/<locale>/`)
- Pagefind for static search

## Notes

- No fabricated customer logos, stats, or compliance certifications
- Securden used only as structural/content-strategy reference — design is original
- Placeholder company URL in `src/config.yaml` — update before production deploy
