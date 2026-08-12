import { businessName, siteUrl } from './property';

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  h1: string;
  ogImage?: string;
};

/** Working metadata directions — easy to update after keyword review. */
export const pageSeo: Record<string, PageSeo> = {
  home: {
    path: '/',
    title: `${businessName} | Spacious Stay in Mopidevi`,
    description:
      'Stay comfortably at Sri Guru Raghavendra HomeStay in Mopidevi — spacious rooms, kitchen access, peaceful terrace views and friendly local guidance near the temple.',
    h1: 'Spacious, Peaceful Stay in Mopidevi',
    ogImage: '/og/home.jpg',
  },
  stay: {
    path: '/stay/',
    title: `Spacious Family Accommodation in Mopidevi | ${businessName}`,
    description:
      'Explore spacious family accommodation in Mopidevi with comfortable rooms, common spaces, kitchen convenience and terrace access. Enquire on WhatsApp.',
    h1: 'Spacious Family Accommodation in Mopidevi',
    ogImage: '/og/stay.jpg',
  },
  temple: {
    path: '/mopidevi-temple/',
    title: 'Mopidevi Temple Guide | Story, Timings & Visitor Information',
    description:
      'A useful guide to Sri Subrahmanyeswara Swamy Temple in Mopidevi — traditional story, significance, visitor tips and how to plan your visit.',
    h1: 'Mopidevi Sri Subrahmanyeswara Swamy Temple Guide',
    ogImage: '/og/temple.jpg',
  },
  explore: {
    path: '/places-to-visit-near-mopidevi/',
    title: 'Places to Visit Near Mopidevi | Local Travel Guide',
    description:
      'Discover places to visit near Mopidevi — temple towns, peaceful surroundings and practical ideas for a wider family or leisure trip.',
    h1: 'Places to Visit Near Mopidevi',
    ogImage: '/og/explore.jpg',
  },
  gallery: {
    path: '/gallery/',
    title: `${businessName} Gallery | Mopidevi`,
    description:
      'See the rooms, kitchen, bathrooms, terrace, exterior and countryside surroundings of Sri Guru Raghavendra HomeStay in Mopidevi.',
    h1: 'Property Gallery',
    ogImage: '/og/gallery.jpg',
  },
  contact: {
    path: '/contact/',
    title: `Contact ${businessName} | Mopidevi`,
    description:
      'Contact Sri Guru Raghavendra HomeStay in Mopidevi — WhatsApp, call and directions for a simple, direct enquiry.',
    h1: 'Contact & Location',
    ogImage: '/og/contact.jpg',
  },
};

export function canonicalUrl(path: string): string {
  const normalised = path.endsWith('/') || path === '/' ? path : `${path}/`;
  return new URL(normalised, siteUrl).toString();
}

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/stay/', label: 'Stay' },
  { href: '/mopidevi-temple/', label: 'Temple' },
  { href: '/places-to-visit-near-mopidevi/', label: 'Explore' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/contact/', label: 'Contact' },
] as const;
