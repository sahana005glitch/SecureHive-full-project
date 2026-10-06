import { getPermalink, getBlogPermalink } from './utils/permalinks';

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
