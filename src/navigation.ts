import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { getLocalizedPath } from './i18n/routes';
import { useTranslations } from './i18n/translations';

const frenchNavigationText: Record<string, string> = {
  Products: 'Produits',
  Overview: 'Vue d’ensemble',
  'Privileged Account Manager': 'Gestionnaire des comptes privilégiés',
  'Just-in-Time Access': 'Accès juste-à-temps',
  'Session Manager': 'Gestionnaire de sessions',
  'Credential Vault': 'Coffre-fort d’identifiants',
  'Endpoint Privilege Manager': 'Gestionnaire des privilèges des terminaux',
  'Service Account Security': 'Sécurité des comptes de service',
  Solutions: 'Solutions',
  'Financial Services': 'Services financiers',
  Healthcare: 'Santé',
  Manufacturing: 'Industrie',
  Government: 'Secteur public',
  'Enterprise IT': 'Informatique d’entreprise',
  'Vendor Access': 'Accès des fournisseurs',
  Blog: 'Blog',
  Contact: 'Contact',
  'Request a Demo': 'Demander une démonstration',
  Resources: 'Ressources',
  'About Us': 'À propos',
  Pricing: 'Tarifs',
  Company: 'Entreprise',
  About: 'À propos',
  'Privacy Policy': 'Politique de confidentialité',
  'Terms of Service': 'Conditions d’utilisation',
};

const germanNavigationText: Record<string, string> = {
  Products: 'Produkte',
  Overview: 'Übersicht',
  'Privileged Account Manager': 'Privileged Account Manager',
  'Just-in-Time Access': 'Just-in-Time Access',
  'Session Manager': 'Session Manager',
  'Credential Vault': 'Credential Vault',
  'Endpoint Privilege Manager': 'Endpoint Privilege Manager',
  'Service Account Security': 'Service Account Security',
  Solutions: 'Lösungen',
  'Financial Services': 'Finanzdienstleistungen',
  Healthcare: 'Gesundheitswesen',
  Manufacturing: 'Industrie & Fertigung',
  Government: 'Öffentlicher Sektor',
  'Enterprise IT': 'Unternehmens-IT',
  'Vendor Access': 'Dienstleisterzugriff',
  Blog: 'Blog',
  Contact: 'Kontakt',
  'Request a Demo': 'Demo anfordern',
  Resources: 'Ressourcen',
  'About Us': 'Über uns',
  Pricing: 'Preise',
  Company: 'Unternehmen',
  About: 'Über uns',
  'Privacy Policy': 'Datenschutzrichtlinie',
  'Terms of Service': 'Nutzungsbedingungen',
};

const navigationTranslationsByLocale: Record<string, Record<string, string>> = {
  fr: frenchNavigationText,
  de: germanNavigationText,
};

type NavigationItem = {
  text?: string;
  title?: string;
  href?: string;
  links?: NavigationItem[];
};

const getLocalizedNavLabel = (label: string | undefined, locale: string): string | undefined => {
  if (!label) return label;
  if (locale === 'en') return label;
  const dict = navigationTranslationsByLocale[locale];
  return dict?.[label] || label;
};

const localizeHref = (href: string | undefined, locale: string) => {
  if (!href || !href.startsWith('/') || href.startsWith('//')) return href;
  const [pathname, suffix = ''] = href.split(/(?=[?#])/u, 2);
  const localizedPath = getLocalizedPath(pathname, locale);
  return `${localizedPath}${suffix}`;
};

const localizeNavigationItem = <T extends NavigationItem>(item: T, locale: string): T =>
  ({
    ...item,
    ...(item.text ? { text: getLocalizedNavLabel(item.text, locale) } : {}),
    ...(item.title ? { title: getLocalizedNavLabel(item.title, locale) } : {}),
    ...(item.href ? { href: localizeHref(item.href, locale) } : {}),
    ...(item.links ? { links: item.links.map((child) => localizeNavigationItem(child, locale)) } : {}),
  }) as T;

export const headerData = {
  links: [
    {
      text: 'Products',
      links: [
        { text: 'Overview', href: getPermalink('/products') },
        { text: 'Privileged Account Manager', href: getPermalink('/products/privileged-account-manager') },
        { text: 'Just-in-Time Access', href: getPermalink('/products/just-in-time-access') },
        { text: 'Session Manager', href: getPermalink('/products/session-manager') },
        { text: 'Credential Vault', href: getPermalink('/products/credential-vault') },
        { text: 'Endpoint Privilege Manager', href: getPermalink('/products/endpoint-privilege-manager') },
        { text: 'Service Account Security', href: getPermalink('/products/service-account-security') },
      ],
    },
    {
      text: 'Solutions',
      links: [
        { text: 'Overview', href: getPermalink('/solutions') },
        { text: 'Financial Services', href: getPermalink('/solutions/financial-services') },
        { text: 'Healthcare', href: getPermalink('/solutions/healthcare') },
        { text: 'Manufacturing', href: getPermalink('/solutions/manufacturing') },
        { text: 'Government', href: getPermalink('/solutions/government') },
        { text: 'Enterprise IT', href: getPermalink('/solutions/enterprise-it') },
        { text: 'Vendor Access', href: getPermalink('/solutions/vendor-access') },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Request a Demo',
      href: getPermalink('/contact'),
      variant: 'primary' as const,
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Privileged Account Manager', href: getPermalink('/products/privileged-account-manager') },
        { text: 'Just-in-Time Access', href: getPermalink('/products/just-in-time-access') },
        { text: 'Session Manager', href: getPermalink('/products/session-manager') },
        { text: 'Credential Vault', href: getPermalink('/products/credential-vault') },
        { text: 'Endpoint Privilege Manager', href: getPermalink('/products/endpoint-privilege-manager') },
        { text: 'Service Account Security', href: getPermalink('/products/service-account-security') },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'Financial Services', href: getPermalink('/solutions/financial-services') },
        { text: 'Healthcare', href: getPermalink('/solutions/healthcare') },
        { text: 'Manufacturing', href: getPermalink('/solutions/manufacturing') },
        { text: 'Government', href: getPermalink('/solutions/government') },
        { text: 'Enterprise IT', href: getPermalink('/solutions/enterprise-it') },
        { text: 'Vendor Access', href: getPermalink('/solutions/vendor-access') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} SecureHive. All rights reserved. Privileged Access Management for the enterprise.`,
};

export const getNavigationData = (locale: string = 'en') => {
  const { t } = useTranslations(locale);
  const year = new Date().getFullYear();

  if (locale === 'en') {
    return {
      headerData,
      footerData: {
        ...footerData,
        footNote: t('footer.footnote', { year }),
      },
    };
  }

  return {
    headerData: {
      ...headerData,
      links: headerData.links.map((item) => localizeNavigationItem(item, locale)),
      actions: headerData.actions.map((item) => localizeNavigationItem(item, locale)),
    },
    footerData: {
      ...footerData,
      links: footerData.links.map((group) => localizeNavigationItem(group, locale)),
      secondaryLinks: footerData.secondaryLinks.map((item) => localizeNavigationItem(item, locale)),
      footNote: t('footer.footnote', { year }),
    },
  };
};
