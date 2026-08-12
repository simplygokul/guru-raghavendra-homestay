/**
 * Central business identity — single source of truth for UI, metadata, and schema.
 * Fields marked PENDING must not be published as verified facts until owner confirmation.
 */

export const siteUrl = 'https://gururaghavendrahomestay.in';

/** Working public name — capitalisation/spelling still configurable until GBP/signage lock. */
export const businessName = 'Sri Guru Raghavendra HomeStay';

/** Roadside signage uses Telugu "Sri Guru Raghavendra Nilayam" — PENDING owner decision on public English name. */
export const businessNameAlternates = {
  nilayamTelugu: 'శ్రీ గురురాఘవేంద్ర నిలయం',
  // Do not put unverified English aliases into schema.alternateName
} as const;

export const brandLine = 'Stay comfortably. Explore locally. Feel at home.';

export const location = {
  locality: 'Mopidevi',
  district: 'Krishna District',
  region: 'Andhra Pradesh',
  country: 'India',
  /** PENDING — exact street/village address for NAP + schema */
  streetAddress: null as string | null,
  postalCode: null as string | null,
  /** PENDING — GBP/map pin coordinates */
  geo: null as { latitude: number; longitude: number } | null,
  /** PENDING — Google Maps place / embed URLs once pin confirmed */
  mapsEmbedUrl: null as string | null,
  mapsDirectionsUrl: null as string | null,
  mapsPlaceUrl: null as string | null,
} as const;

export const contact = {
  /** Confirmed WhatsApp number */
  whatsapp: {
    e164: '918008861819',
    display: '+91 80088 61819',
    href: 'https://wa.me/918008861819',
  },
  /**
   * PENDING — primary voice number.
   * Appears in homepage design reference as +91 94924 35566 but not locked in PRD.
   */
  phone: {
    e164: null as string | null,
    display: null as string | null,
    href: null as string | null,
  },
  email: null as string | null,
  contactHours: null as string | null,
} as const;

export const policies = {
  /**
   * Safe flexible check-in wording until owner confirms firmer policy.
   * Do not publish 24/7 or guaranteed early check-in claims.
   */
  flexibleCheckIn:
    'Early or flexible check-in may be available for temple visitors subject to prior confirmation. Please contact us in advance.',
  checkIn: null as string | null,
  checkOut: null as string | null,
  bookingNotes: null as string | null,
} as const;

export const positioning = {
  primary: 'A peaceful, spacious homestay in Mopidevi.',
  support:
    'Large comfortable rooms, kitchen facilities, countryside surroundings and friendly local hosts.',
  experience:
    'Suitable for temple visits, family trips and relaxed weekend stays.',
  hospitality:
    'Helpful local guidance for nearby places, routes and practical travel needs.',
} as const;

/** Verified strengths safe to show publicly (high-level; detail amenities stay in amenities.ts). */
export const verifiedStrengths = [
  {
    id: 'spacious',
    title: 'Spacious Rooms',
    description: 'Large, clean rooms suited to families and groups.',
  },
  {
    id: 'kitchen',
    title: 'Kitchen Access',
    description: 'Home-style cooking facility for longer, easier stays.',
  },
  {
    id: 'family',
    title: 'Family Friendly',
    description: 'Welcoming spaces for families and group travel.',
  },
  {
    id: 'terrace',
    title: 'Peaceful Terrace',
    description: 'Open terrace with agricultural countryside views.',
  },
  {
    id: 'hosts',
    title: 'Local Hosts',
    description: 'Practical guidance from people who know Mopidevi.',
  },
] as const;

export function whatsappLink(message?: string): string {
  const base = contact.whatsapp.href;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  'Hello, I would like to enquire about staying at Sri Guru Raghavendra HomeStay in Mopidevi.';

export function stayEnquiryMessage(unitName: string): string {
  return `Hello, I would like to check availability for ${unitName} for [date] for [number of guests].`;
}
