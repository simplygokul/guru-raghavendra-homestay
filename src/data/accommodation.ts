/**
 * Accommodation structure — PENDING owner confirmation of floors/units/capacity.
 * Internal placeholders only; do not invent published room counts or tariffs.
 */

export type AccommodationUnit = {
  id: string;
  name: string;
  slug: string;
  summary: string;
  /** PENDING fields */
  floors?: string | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  guestCapacity?: number | null;
  kitchen: boolean;
  terraceAccess?: boolean | null;
  notes?: string | null;
  imageIds: string[];
  verified: boolean;
};

/**
 * Until rental structure is confirmed, present one honest property-level stay
 * without inventing floor/unit marketing names.
 */
export const accommodationUnits: AccommodationUnit[] = [
  {
    id: 'homestay',
    name: 'Family Homestay Stay',
    slug: 'family-homestay',
    summary:
      'Spacious rooms and common areas suited to families and groups, with kitchen access and a peaceful terrace overlooking the fields.',
    floors: null,
    bedrooms: null,
    bathrooms: null,
    guestCapacity: null,
    kitchen: true,
    terraceAccess: true,
    notes:
      'Exact floor/unit rental structure, bed count and guest capacity are pending owner confirmation.',
    imageIds: ['common-living', 'bedroom', 'bathroom', 'kitchen', 'terrace'],
    verified: false,
  },
];

export const accommodationHighlights = [
  {
    id: 'bedrooms',
    title: 'Comfortable Bedrooms',
    description: 'Clean, spacious sleeping areas for restful family stays.',
  },
  {
    id: 'living',
    title: 'Spacious Living Areas',
    description: 'Open common spaces where the whole group can settle in.',
  },
  {
    id: 'bathrooms',
    title: 'Clean Bathrooms',
    description: 'Bright, well-kept bathrooms that show the property clearly.',
  },
] as const;
