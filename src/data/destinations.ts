/**
 * Nearby destinations — publish verified distance/time only.
 * Candidate list for research; do not invent travel times.
 */

export type Destination = {
  id: string;
  name: string;
  slug: string;
  whyVisit: string;
  category: 'temple' | 'town' | 'nature' | 'regional' | 'practical';
  /** PENDING until researched */
  distanceKm: number | null;
  travelTimeMinutes: number | null;
  mapsUrl: string | null;
  imageId: string | null;
  published: boolean;
};

export const destinations: Destination[] = [
  {
    id: 'mopidevi-temple',
    name: 'Mopidevi Sri Subrahmanyeswara Swamy Temple',
    slug: 'mopidevi-temple',
    whyVisit: 'The main spiritual anchor of the town — very close to the homestay.',
    category: 'temple',
    distanceKm: null,
    travelTimeMinutes: null,
    mapsUrl: null,
    imageId: 'mopidevi-temple',
    published: true,
  },
  {
    id: 'kallepalli',
    name: 'Kallepalli',
    slug: 'kallepalli',
    whyVisit: 'A nearby temple town with a calm spiritual atmosphere.',
    category: 'town',
    distanceKm: null,
    travelTimeMinutes: null,
    mapsUrl: null,
    imageId: 'kallepalli',
    published: true,
  },
  {
    id: 'village-atmosphere',
    name: 'Village Surroundings',
    slug: 'village-surroundings',
    whyVisit: 'Quiet roads, greenery and a slower pace away from city noise.',
    category: 'nature',
    distanceKm: null,
    travelTimeMinutes: null,
    mapsUrl: null,
    imageId: null,
    published: true,
  },
];

/** Itineraries stay unpublished until route times are verified. */
export const itineraries = {
  oneDay: null,
  twoDayRelaxed: null,
  spiritualCircuit: null,
  familyLeisure: null,
} as const;

export const publishedDestinations = destinations.filter((d) => d.published);
