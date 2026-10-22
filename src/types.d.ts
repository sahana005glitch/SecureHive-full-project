import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { ImageMetadata } from 'astro';
import type { HTMLAttributes } from 'astro/types';

export interface Post {
  /** Unique ID identifying the post. */
  id: string;
  /** URL-friendly slug derived from the post name. */
  slug: string;
  /** Fully resolved permalink, computed from the configured pattern. */
  permalink: string;
  /** Locale and shared key used to pair translated versions of this post. */
  locale: 'en' | 'fr' | 'de';
  translationKey: string;

  publishDate: Date;
  updateDate?: Date;

  title: string;
  /** Optional summary of post content. */
  excerpt?: string;
  image?: ImageMetadata | string;
  /** Alternative text for the cover image. */
  imageAlt?: string;

  category?: Taxonomy;
  tags?: Taxonomy[];
  author?: string;

  metadata?: MetaData;

  draft?: boolean;

  /** Rendered Astro component factory for the post body. */
  Content?: AstroComponentFactory;

  /** Estimated reading time in minutes. */
  readingTime?: number;
}

export interface Taxonomy {
  slug: string;
  title: string;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;
  alternateLinks?: Array<{ lang: string; url: string }>;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
  /** Open Graph `article:*` properties, used when `type` is `article`. */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    expirationTime?: string;
    authors?: Array<string>;
    section?: string;
    tags?: Array<string>;
  };
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image {
  src: string;
  alt?: string;
  /** Optional link (used by Brands logos). */
  href?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
  /** Makes the whole item a link (used by Features2 cards). */
  href?: string;
}

export interface Input {
  type: astroHTML.JSX.HTMLInputTypeAttribute;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
  required?: boolean;
}

export interface Textarea {
  label?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
}

export interface Disclaimer {
  label?: string;
}

// COMPONENTS
export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export interface Form {
  inputs?: Array<Input>;
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description?: string;
}

// WIDGETS
export interface HeroImage extends Image {
  /** `cover` (default) crops the picture to the hero's frame; `auto` shows it whole at its natural proportions, for illustrations with a transparent background. */
  aspect?: 'cover' | 'auto';
  /** Any other attribute is forwarded to the <img>. */
  [attribute: string]: unknown;
}

export interface Hero extends Omit<Headline, 'classes'>, Omit<Widget, 'isDark' | 'classes'> {
  /** Small pill above the tagline, e.g. "New" or "Beta". */
  badge?: string;
  content?: string;
  actions?: string | CallToAction[];
  image?: string | HeroImage;
}

export interface Features extends Omit<Headline, 'classes'>, Widget {
  image?: string | unknown;
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface Faqs extends Omit<Headline, 'classes'>, Widget {
  items?: Array<Item>;
  columns?: number;
  /** Render questions as a native accordion (`<details>`); `false` keeps every answer visible. */
  collapsible?: boolean;
  /** Index of the question open by default when collapsible (-1 for none). */
  defaultOpen?: number;
  /** Emit FAQPage structured data (JSON-LD) built from the items. */
  schema?: boolean;
}

export interface Steps extends Omit<Headline, 'classes'>, Widget {
  items?: Array<Item>;
  callToAction?: string | CallToAction;
  image?: string | Image;
  isReversed?: boolean;
}

export interface Contact extends Omit<Headline, 'classes'>, Form, Widget {}

export interface Newsletter extends Omit<Headline, 'classes'>, Widget {
  placeholder?: string;
  button?: string;
  disclaimer?: string;
  /** Where to POST the email. Without it the form does nothing (see configure-contact-form.md). */
  action?: string;
  method?: 'post' | 'get';
  name?: string;
  layout?: 'band' | 'card';
}
