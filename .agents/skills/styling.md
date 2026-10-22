# Styling Guide

## Tailwind CSS v4 Configuration

All Tailwind config is in `src/assets/styles/tailwind.css`:

### Theme Tokens

Defined in `@theme` block, mapped to CSS variables from `CustomStyles.astro`:

| Token                | CSS Variable                              | Usage                              |
| -------------------- | ----------------------------------------- | ---------------------------------- |
| `--color-primary`    | `--aw-color-primary`                      | `bg-primary`, `text-primary`       |
| `--color-secondary`  | `--aw-color-secondary`                    | `bg-secondary`, `text-secondary`   |
| `--color-accent`     | `--aw-color-accent`                       | `bg-accent`, `text-accent`         |
| `--color-brand-warm` | `--aw-color-warm`                         | `bg-brand-warm`, `text-brand-warm` |
| `--color-heading`    | `--aw-color-text-heading`                 | `text-heading` (titles, hero h1)   |
| `--color-default`    | `--aw-color-text-default`                 | `text-default`                     |
| `--color-muted`      | `--aw-color-text-muted`                   | `text-muted`                       |
| `--color-link`       | `--aw-color-link` (falls back to primary) | `text-link`, active header link    |

### Custom Utilities

| Utility         | Purpose                                                                         |
| --------------- | ------------------------------------------------------------------------------- |
| `bg-page`       | Page background color                                                           |
| `bg-dark`       | Dark page background                                                            |
| `text-page`     | Legacy; `--aw-color-text-page` is not defined, so it inherits the parent colour |
| `btn`           | Base button styles                                                              |
| `btn-primary`   | Primary CTA button                                                              |
| `btn-secondary` | Secondary button                                                                |
| `btn-tertiary`  | Text-style button                                                               |

### Dark Mode

Class-based: add/remove `.dark` on `<html>`. Registered as:

```css
@variant dark (&:where(.dark, .dark *));
```

Use `dark:` prefix on any utility: `dark:text-slate-300`, `dark:bg-slate-800`. Prefer the tokens above over hard-coded colours so `CustomStyles.astro` stays the single place to re-theme.

### Scroll Animations

Custom `intersect` variant for IntersectionObserver animations:

```html
<div class="intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"></div>
```

## shadcn/ui Tokens

`src/assets/styles/shadcn.css` (imported by `tailwind.css`) defines the semantic variables shadcn/ui components expect and maps them to Tailwind utilities:

| shadcn utility                                                                   | Backed by                                       |
| -------------------------------------------------------------------------------- | ----------------------------------------------- |
| `bg-background`, `text-foreground`                                               | `--aw-color-bg-page`, `--aw-color-text-default` |
| `bg-card`, `bg-popover` (+ `-foreground`)                                        | theme card surface / default text               |
| `text-muted-foreground`                                                          | `--aw-color-text-muted`                         |
| `border-border`, `border-input`, `ring-ring`                                     | theme border / primary                          |
| `bg-destructive`, `text-destructive-foreground`                                  | fixed red / white                               |
| `text-primary-foreground`, `text-secondary-foreground`, `text-accent-foreground` | white                                           |
| `bg-chart-1..5`, `bg-sidebar*`                                                   | derived from primary / secondary / accent       |

Differences from a stock shadcn theme (kept on purpose): `bg-primary`, `bg-secondary`, `bg-accent` are AstroWind brand colours (shadcn uses `secondary`/`accent` as subtle surfaces), `text-muted` is a text colour and `bg-muted` is **not** defined as a surface, and the `rounded-*` scale is Tailwind's default (shadcn's `--radius` is defined but not mapped). See `use-shadcn-tokens.md`.

## Changing Colors

Edit `src/components/CustomStyles.astro`:

```css
:root {
  --aw-color-primary: #024950;
  --aw-color-secondary: #003135;
  --aw-color-accent: #0fa4af;
  --aw-color-warm: #964734;
  --aw-color-text-heading: #003135;
  /* optional: --aw-color-link: #024950; */
}
.dark {
  --aw-color-primary: #6edff6;
  --aw-color-secondary: #729bff;
  --aw-color-bg-page: #081426;
  --aw-color-bg-section: #0e1c31;
  --aw-color-bg-card: #142641;
  --aw-color-text-heading: #f0f5ff;
  --aw-color-text-default: #c0ccdf;
  --aw-color-text-muted: #8494ae;
  --aw-color-border: #293a55;
  --aw-color-link: #6edff6;
}
```

The light theme uses the SecureHive teal palette with a terracotta warm accent. The dark theme uses a navy palette with cyan and periwinkle accents. Use dark text on the bright accent-colored buttons for readable contrast.

## Changing Fonts

Fonts use Astro's native Fonts API (no `@fontsource` packages):

1. In `astro.config.ts`, edit the `fonts` array (provider, `name`, `cssVariable`, weights, subsets). Example: `fontProviders.google()` with `name: 'Poppins'` and `cssVariable: '--font-poppins'`.
2. In `src/layouts/Layout.astro`, update `<Font cssVariable="--font-poppins" preload />`.
3. In `src/components/CustomStyles.astro`, point `--aw-font-sans`, `--aw-font-serif` and `--aw-font-heading` at the new variable.

## Adding a New Theme Color

1. Add the CSS variable in `CustomStyles.astro` for both `:root` and `.dark`
2. Register in `tailwind.css` under `@theme`: `--color-yourcolor: var(--aw-color-yourcolor);`
3. Use as `bg-yourcolor`, `text-yourcolor`, etc.
