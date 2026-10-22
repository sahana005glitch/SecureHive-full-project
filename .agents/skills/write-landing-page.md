# Add a Marketing Page

The repository does not ship generic landing-page demos. Add a route for an
actual SecureHive product, solution, or campaign instead of copying template
demo content.

## Steps

1. Add the route in `src/pages/` and use `PageLayout` for the standard site
   header and footer.
2. Set a page-specific title and description in the layout metadata.
3. Compose the page from the active components in `src/components/widgets/`;
   see `use-widgets.md` for the current list and conventions.
4. Keep user-facing copy in the existing translation catalogs or localized
   structured page data, following the closest existing route.
5. Check every call-to-action and internal link against the routes that remain
   in `src/pages/`.
6. Run `npm run check:astro` and `npm run build`, then inspect the page in the
   browser at mobile and desktop widths.
