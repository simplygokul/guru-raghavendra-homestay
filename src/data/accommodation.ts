/**
 * Accommodation — only publish confirmed high-level facts.
 */

export type AccommodationUnit = {
  id: string;
  name: string;
  slug: string;
  summary: string;
  floors?: string | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  guestCapacity?: number | null;
  kitchen: boolean;
  terraceAccess?: boolean | null;
  notes?: string | null;
  imageIds: string[];
};

export const accommodationUnits: AccommodationUnit[] = [
  {
    id: 'homestay',
    name: 'Family Homestay Stay',
    slug: 'family-homestay',
    summary:
      'Spacious rooms and common areas suited to families and groups, with kitchen access and a peaceful terrace overlooking the fields.',
    kitchen: true,
    terraceAccess: true,
    imageIds: ['common-living', 'bedroom', 'bathroom', 'kitchen', 'terrace'],
  },
];

export const stayJourney = [
  {
    id: 'common',
    title: 'Spacious common areas',
    description: 'Open living spaces where the family can gather, rest and feel at home.',
  },
  {
    id: 'bedrooms',
    title: 'Comfortable bedrooms',
    description: 'Bright rooms with room to move — made for restful family stays.',
  },
  {
    id: 'kitchen',
    title: 'Kitchen access',
    description: 'Cook simple meals when you need to, especially helpful for longer family visits.',
  },
  {
    id: 'bathrooms',
    title: 'Clean bathrooms',
    description: 'Bright, well-kept bathrooms with a clear, cared-for finish.',
  },
  {
    id: 'terrace',
    title: 'Terrace & countryside',
    description: 'Step outside for open sky and agricultural views over Mopidevi.',
  },
] as const;
