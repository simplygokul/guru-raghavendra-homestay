/**
 * Central business identity — single source of truth for UI, metadata, and schema.
 *
 * GBP source (owner share, Aug 2026): Sri Guru Raghavendra HomeStay knowledge panel.
 * Conflicts flagged below — do not invent further facts.
 */

export const siteUrl = 'https://gururaghavendrahomestay.in';

export const businessName = 'Sri Guru Raghavendra HomeStay';

/**
 * CONFLICT / NOTES (internal — not for public UI):
 * - Roadside signage uses Telugu "Sri Guru Raghavendra Nilayam".
 * - Maps also shows a second nearby listing: "శ్రీ గురు రాఘవేంద్ర నిలయము For రూమ్స్" (plus code 3W9G+64).
 * - Voice phone still unverified (design mock had +91 94924 35566; not locked).
 * Public English name follows GBP: Sri Guru Raghavendra HomeStay.
 */
export const businessNameAlternates = {
  nilayamTelugu: 'శ్రీ గురురాఘవేంద్ర నిలయం',
} as const;

export const brandLine = 'Stay comfortably. Explore locally. Feel at home.';

/** Address & map from GBP / Maps pin shared by owner. */
export const location = {
  locality: 'Mopidevi',
  district: 'Krishna District',
  region: 'Andhra Pradesh',
  country: 'India',
  streetAddress: 'Chandamama Estates, 3rd line, Sivalayam Road, Mopidevi Lanka',
  postalCode: '521125',
  formattedAddress:
    'Chandamama Estates, 3rd line, Sivalayam Road, Mopidevi, Mopidevi Lanka, Andhra Pradesh 521125',
  geo: { latitude: 16.0600225, longitude: 80.9253814 },
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=16.0600225,80.9253814&z=17&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=16.0600225,80.9253814',
  mapsPlaceUrl:
    'https://www.google.com/maps/search/?api=1&query=Sri+Guru+Raghavendra+HomeStay+Mopidevi',
} as const;

export const contact = {
  whatsapp: {
    e164: '918008861819',
    display: '+91 80088 61819',
    href: 'https://wa.me/918008861819',
  },
  /** Same as WhatsApp — owner confirmed call uses this number. */
  phone: {
    e164: '918008861819',
    display: '+91 80088 61819',
    href: 'tel:+918008861819',
  },
  email: null as string | null,
  contactHours: null as string | null,
} as const;

export const policies = {
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
    'Approachable local hosts who can help with temple orientation, nearby places and practical routes around Mopidevi.',
} as const;

/** Three grouped ideas for homepage — fewer, stronger. */
export const experiencePillars = [
  {
    id: 'families',
    title: 'For families',
    description: 'Spacious rooms and kitchen convenience so the whole group can settle in together.',
  },
  {
    id: 'experience',
    title: 'For the experience',
    description: 'Open terrace, agricultural views and a quieter pace away from the city.',
  },
  {
    id: 'trip',
    title: 'For the trip',
    description: 'Close to Mopidevi Temple, with local guidance when you need it.',
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
