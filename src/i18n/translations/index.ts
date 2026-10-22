import enMessages from '../../messages/en.json';
import frMessages from '../../messages/fr.json';
import deMessages from '../../messages/de.json';
import enAbout from '../../data/pages/en/about.json';
import enContact from '../../data/pages/en/contact.json';
import enHome from '../../data/pages/en/home.json';
import enPricing from '../../data/pages/en/pricing.json';
import enProducts from '../../data/pages/en/products.json';
import enServices from '../../data/pages/en/services.json';
import enSolutions from '../../data/pages/en/solutions.json';
import frAbout from '../../data/pages/fr/about.json';
import frContact from '../../data/pages/fr/contact.json';
import frHome from '../../data/pages/fr/home.json';
import frPricing from '../../data/pages/fr/pricing.json';
import frProducts from '../../data/pages/fr/products.json';
import frServices from '../../data/pages/fr/services.json';
import frSolutions from '../../data/pages/fr/solutions.json';
import deAbout from '../../data/pages/de/about.json';
import deContact from '../../data/pages/de/contact.json';
import deHome from '../../data/pages/de/home.json';
import dePricing from '../../data/pages/de/pricing.json';
import deProducts from '../../data/pages/de/products.json';
import deServices from '../../data/pages/de/services.json';
import deSolutions from '../../data/pages/de/solutions.json';
import { DEFAULT_LOCALE, isSupportedLocale, getLocaleConfig, type Locale } from '../config';

export const marketingContent = {
  en: {
    about: enAbout,
    contact: enContact,
    home: enHome,
    pricing: enPricing,
    products: enProducts,
    services: enServices,
    solutions: enSolutions,
  },
  fr: {
    about: frAbout,
    contact: frContact,
    home: frHome,
    pricing: frPricing,
    products: frProducts,
    services: frServices,
    solutions: frSolutions,
  },
  de: {
    about: deAbout,
    contact: deContact,
    home: deHome,
    pricing: dePricing,
    products: deProducts,
    services: deServices,
    solutions: deSolutions,
  },
} satisfies Record<Locale, Record<string, unknown>>;

export const en = {
  ...enMessages,
  ...marketingContent.en,
};

export const fr = {
  ...frMessages,
  ...marketingContent.fr,
};

export const de = {
  ...deMessages,
  ...marketingContent.de,
};

export type TranslationCatalog = typeof en;

type TranslationLeafKeys<T> = {
  [Key in keyof T & string]: T[Key] extends string
    ? Key
    : T[Key] extends readonly unknown[]
      ? never
      : T[Key] extends Record<string, unknown>
        ? `${Key}.${TranslationLeafKeys<T[Key]>}`
        : never;
}[keyof T & string];

export type TranslationKey = TranslationLeafKeys<TranslationCatalog>;

export const translations = {
  en,
  fr,
  de,
} satisfies Record<Locale, TranslationCatalog>;

export function getMarketingContent(locale?: string) {
  const resolvedLocale = locale && isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  return marketingContent[resolvedLocale];
}

function getNestedValue(obj: unknown, path: string): string | undefined {
  if (typeof obj !== 'object' || obj === null) return undefined;
  const segments = path.split('.');
  let current: unknown = obj;
  for (const segment of segments) {
    if (typeof current === 'object' && current !== null && segment in current) {
      current = (current as Record<string, unknown>)[segment];
    } else {
      return undefined;
    }
  }
  return typeof current === 'string' ? current : undefined;
}

export function getTranslation(
  locale: string = DEFAULT_LOCALE,
  key: TranslationKey,
  params?: Record<string, string | number>
): string {
  const activeLocale: Locale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const activeCatalog = translations[activeLocale];
  const fallbackCatalog = translations[DEFAULT_LOCALE];

  const text = getNestedValue(activeCatalog, key) ?? getNestedValue(fallbackCatalog, key);
  if (text === undefined) {
    throw new Error(`Translation key "${key}" is missing from both "${activeLocale}" and "${DEFAULT_LOCALE}".`);
  }

  let interpolatedText = text;
  if (params) {
    for (const [paramKey, paramValue] of Object.entries(params)) {
      interpolatedText = interpolatedText.replaceAll(`{${paramKey}}`, String(paramValue));
    }
  }

  return interpolatedText;
}

export function useTranslations(locale?: string) {
  const resolvedLocale = locale && isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const config = getLocaleConfig(resolvedLocale);

  const t = (key: TranslationKey, params?: Record<string, string | number>) =>
    getTranslation(resolvedLocale, key, params);

  return {
    t,
    locale: resolvedLocale,
    dir: config.dir,
    config,
  };
}
