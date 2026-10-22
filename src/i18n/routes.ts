import { SUPPORTED_LOCALES, DEFAULT_LOCALE, isSupportedLocale, LOCALES } from './config';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { APP_BLOG } from 'astrowind:config';

const pageFiles = Object.keys(import.meta.glob('../pages/{*.astro,*.md,products/*.astro,solutions/*.astro}'));
const staticPagePaths = new Set(
  pageFiles
    .filter((file) => !file.endsWith('/404.astro'))
    .map((file) =>
      normalizeRoutePath(
        file
          .replace('../pages/', '/')
          .replace(/\.(?:astro|md)$/u, '')
          .replace(/(^|\/)index$/u, '')
      )
    )
);
const translatedPostFiles = import.meta.glob('../data/post/{fr,de}/*.md');
const translatedPostSlugs = Object.keys(translatedPostFiles).reduce<Record<string, Set<string>>>((byLocale, file) => {
  const [, locale, filename] = file.match(/\/data\/post\/(fr|de)\/([^/]+)\.md$/u) ?? [];
  if (locale && filename) {
    (byLocale[locale] ??= new Set()).add(filename);
  }
  return byLocale;
}, {});

export function normalizeRoutePath(path: string): string {
  const normalized = `/${path.replace(/^\/+|\/+$/gu, '')}`;
  return normalized === '/' ? normalized : normalized.replace(/\/$/u, '');
}

/**
 * Strips any supported locale prefix from the pathname, returning the canonical path.
 * e.g., '/fr/products/credential-vault' -> '/products/credential-vault'
 * e.g., '/de/about' -> '/about'
 * e.g., '/about' -> '/about'
 */
export const stripLocaleFromPath = (path: string): string => {
  const normalized = normalizeRoutePath(path);
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    const regex = new RegExp(`^\\/${locale}(?=\\/|$)`, 'u');
    if (regex.test(normalized)) {
      const stripped = normalized.replace(regex, '');
      return stripped === '' ? '/' : stripped;
    }
  }
  return normalized;
};

/**
 * Backwards compatibility helper
 */
export const getEnglishPath = (path: string, _locale?: string): string => stripLocaleFromPath(path);

export const getLocalizedTaxonomyPath = (
  type: 'category' | 'tag',
  slug: string,
  locale: string = DEFAULT_LOCALE
): string => {
  const taxonomyBase = normalizeRoutePath(
    type === 'category' ? APP_BLOG.category.pathname : APP_BLOG.tag.pathname
  ).replace(/^\/+/u, '');

  return getRelativeLocaleUrl(isSupportedLocale(locale) ? locale : DEFAULT_LOCALE, `${taxonomyBase}/${slug}`);
};

/**
 * Given any path and target locale, generates the correct localized URL.
 * e.g. ('/about', 'fr') -> '/fr/about'
 * e.g. ('/about', 'de') -> '/de/about'
 * e.g. ('/fr/about', 'en') -> '/about'
 */
export const getLocalizedPath = (path: string, targetLocale: string = DEFAULT_LOCALE): string => {
  const canonical = stripLocaleFromPath(path);
  const cleanPath = canonical.replace(/^\/+/, '');

  if (!isSupportedLocale(targetLocale) || targetLocale === DEFAULT_LOCALE) {
    return canonical;
  }

  if (hasLocalizedRoute(canonical, targetLocale)) {
    return getRelativeLocaleUrl(targetLocale, cleanPath);
  }

  const blogBase = normalizeRoutePath(APP_BLOG.list.pathname);
  const fallbackPath = canonical.startsWith(`${blogBase}/`) ? blogBase.replace(/^\/+/, '') : '';
  return getRelativeLocaleUrl(targetLocale, fallbackPath);
};

export const hasLocalizedRoute = (path: string, locale: string): boolean => {
  if (!isSupportedLocale(locale)) return false;

  const canonical = stripLocaleFromPath(path);
  if (staticPagePaths.has(canonical)) return true;

  const blogBase = normalizeRoutePath(APP_BLOG.list.pathname);
  if (canonical === blogBase) return locale === DEFAULT_LOCALE || isSupportedLocale(locale);

  const postSlug = canonical.startsWith(`${blogBase}/`) ? canonical.slice(blogBase.length + 1) : '';
  if (!postSlug) return false;
  if (locale === DEFAULT_LOCALE) return true;

  return translatedPostSlugs[locale]?.has(postSlug) ?? false;
};

export const hasFrenchRoute = (path: string): boolean => hasLocalizedRoute(path, 'fr');
export const hasGermanRoute = (path: string): boolean => hasLocalizedRoute(path, 'de');

export const getAlternateLanguageUrls = (
  currentPath: string,
  siteUrl: string = '',
  availableLocales: readonly string[] = SUPPORTED_LOCALES
): Array<{ lang: string; url: string }> => {
  const routePath = normalizeRoutePath(currentPath);
  const canonical = stripLocaleFromPath(routePath);
  const cleanPath = canonical.replace(/^\/+/, '');
  const base = siteUrl.replace(/\/+$/, '');
  const isLocalizedBlogPost =
    normalizeRoutePath(routePath) !== canonical &&
    canonical.startsWith(`${normalizeRoutePath(APP_BLOG.list.pathname)}/`);

  const links: Array<{ lang: string; url: string }> = [];

  for (const locale of SUPPORTED_LOCALES) {
    if (!availableLocales.includes(locale) || !hasLocalizedRoute(canonical, locale)) continue;
    const relativeUrl = isLocalizedBlogPost
      ? locale === DEFAULT_LOCALE
        ? canonical
        : getRelativeLocaleUrl(locale, cleanPath)
      : getLocalizedPath(canonical, locale);
    links.push({
      lang: LOCALES[locale].htmlLang,
      url: base ? `${base}${relativeUrl}` : relativeUrl,
    });
  }

  // x-default points to default locale (English)
  const defaultUrl =
    links.find((link) => link.lang === LOCALES[DEFAULT_LOCALE].htmlLang)?.url ||
    links.find((link) => link.lang === LOCALES.fr.htmlLang)?.url ||
    links[0]?.url ||
    (base ? `${base}${canonical}` : canonical);
  links.push({
    lang: 'x-default',
    url: defaultUrl,
  });

  return links;
};
