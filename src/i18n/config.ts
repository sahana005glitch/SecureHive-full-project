export const DEFAULT_LOCALE = 'en' as const;

export interface LocaleConfig {
  code: string;
  name: string;
  label: string;
  dir: 'ltr' | 'rtl';
  flag?: string;
  htmlLang: string;
  ogLocale: string;
}

export const LOCALES = {
  en: {
    code: 'en',
    name: 'English',
    label: 'English',
    dir: 'ltr',
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  fr: {
    code: 'fr',
    name: 'Français',
    label: 'Français',
    dir: 'ltr',
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
  },
  de: {
    code: 'de',
    name: 'Deutsch',
    label: 'Deutsch',
    dir: 'ltr',
    htmlLang: 'de',
    ogLocale: 'de_DE',
  },
} satisfies Record<string, LocaleConfig>;

export type Locale = keyof typeof LOCALES;

export const SUPPORTED_LOCALES = Object.keys(LOCALES) as Locale[];

export const isSupportedLocale = (locale: string): locale is Locale => locale in LOCALES;

export const getLocaleConfig = (locale?: string): LocaleConfig => {
  if (locale && isSupportedLocale(locale)) {
    return LOCALES[locale];
  }
  return LOCALES[DEFAULT_LOCALE];
};
