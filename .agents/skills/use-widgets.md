# Page Components

SecureHive page sections live in `src/components/widgets/`. Each component has
its own props; check the component and its interface in `src/types.d.ts` rather
than assuming every section accepts the same props.

## Page sections

| Component              | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `Hero`                 | Main page introduction with optional image, badge, and actions |
| `HeroText`             | Text-only page introduction                                    |
| `Features`             | Feature list with icons                                        |
| `Features2`            | Feature cards                                                  |
| `Steps`                | Ordered process section                                        |
| `FAQs`                 | Native disclosure list; can emit FAQ structured data           |
| `CallToAction`         | Closing call-to-action section                                 |
| `Contact`              | Contact form section                                           |
| `Newsletter`           | Newsletter signup section                                      |
| `BlogHighlightedPosts` | Selected blog posts for a page or related-post section         |

`Header` and `Footer` are shared site chrome in the same directory, not page
sections. Blog lists and article rendering live in `src/components/blog/`.

## Conventions

- Prefer the existing component and its `classes`/`bg` props over duplicating a
  section's markup.
- Use the shared translation catalogs or localized page data for user-facing
  copy; do not add locale-specific ternaries to a presentation component.
- Keep one page-level `<h1>` and supply meaningful image alt text.
- Run `npm run check:astro` and `npm run build` after changing component props.
