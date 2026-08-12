export type Destination = {
  id: string;
  name: string;
  slug: string;
  whyVisit: string;
  category: 'temple' | 'town' | 'nature' | 'regional' | 'practical';
  distanceKm: number | null;
  travelTimeMinutes: number | null;
  mapsUrl: string | null;
  imageId: string | null;
  published: boolean;
  featured?: boolean;
};

export const destinations: Destination[] = [
  {
    id: 'mopidevi-temple',
    name: 'Mopidevi Sri Subrahmanyeswara Swamy Temple',
    slug: 'mopidevi-temple',
    whyVisit:
      'The spiritual heart of the town — the reason many families travel to Mopidevi, and a short journey from the homestay.',
    category: 'temple',
    distanceKm: null,
    travelTimeMinutes: null,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mopidevi+Sri+Subrahmanyeswara+Swamy+Temple',
    imageId: 'mopidevi-temple',
    published: true,
    featured: true,
  },
  {
    id: 'kallepalli',
    name: 'Kallepalli',
    slug: 'kallepalli',
    whyVisit: 'A nearby temple town with a calm spiritual atmosphere, suited to a gentle half-day outing.',
    category: 'town',
    distanceKm: null,
    travelTimeMinutes: null,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kallepalli+Andhra+Pradesh',
    imageId: 'kallepalli',
    published: true,
  },
  {
    id: 'village-atmosphere',
    name: 'Countryside around Mopidevi',
    slug: 'village-surroundings',
    whyVisit: 'Quiet roads, greenery and agricultural fields — a slower pace for evenings and weekend leisure.',
    category: 'nature',
    distanceKm: null,
    travelTimeMinutes: null,
    mapsUrl: null,
    imageId: null,
    published: true,
  },
];

export const publishedDestinations = destinations.filter((d) => d.published);
export const featuredDestination = destinations.find((d) => d.featured) ?? publishedDestinations[0];
